'use client';

import * as React from 'react';
import {
  KBarProvider,
  KBarPortal,
  KBarPositioner,
  KBarAnimator,
  KBarSearch,
  useMatches,
  KBarResults,
  NO_GROUP,
  ActionImpl,
} from 'kbar';
import { cn } from '@/lib/utils';

const searchStyle = {
  padding: '12px 16px',
  fontSize: '16px',
  width: '100%',
  boxSizing: 'border-box' as const,
  outline: 'none',
  border: 'none',
  background: 'var(--background)',
  color: 'var(--foreground)',
};

const animatorStyle = {
  maxWidth: '600px',
  width: '100%',
  background: 'var(--background)',
  color: 'var(--foreground)',
  borderRadius: '8px',
  overflow: 'hidden',
  boxShadow: 'var(--shadow)',
};

const groupNameStyle = {
  padding: '8px 16px',
  fontSize: '10px',
  textTransform: 'uppercase' as const,
  opacity: 0.5,
};

interface Action {
  id: string;
  name: string;
  shortcut?: string[];
  keywords?: string;
  section?: string;
  perform?: () => void;
  subtitle?: string;
  icon?: React.ReactNode;
}

const CommandPalette = ({ children, actions }: { children?: React.ReactNode; actions: Action[] }) => {
  return (
    <KBarProvider actions={actions}>
      <KBarPortal>
        <KBarPositioner className="bg-background/80 backdrop-blur-sm">
          <KBarAnimator style={animatorStyle}>
            <KBarSearch style={searchStyle} placeholder="Type a command or search..." />
            <RenderResults />
          </KBarAnimator>
        </KBarPositioner>
      </KBarPortal>
      {children}
    </KBarProvider>
  );
};

function RenderResults() {
  const { results, rootActionId } = useMatches();

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) =>
        typeof item === 'string' ? (
          <div style={groupNameStyle}>{item}</div>
        ) : (
          <ResultItem
            action={item}
            active={active}
            currentRootActionId={rootActionId}
          />
        )
      }
    />
  );
}

const ResultItem = React.forwardRef(({
  action,
  active,
  currentRootActionId,
}: {
  action: ActionImpl;
  active: boolean;
  currentRootActionId: string | null | undefined;
}, ref: React.Ref<HTMLDivElement>) => {
  const ancestors = React.useMemo(() => {
    if (!currentRootActionId) return action.ancestors;
    const index = action.ancestors.findIndex((ancestor) => ancestor.id === currentRootActionId);
    return action.ancestors.slice(index + 1);
  }, [action.ancestors, currentRootActionId]);

  return (
    <div
      ref={ref}
      className={cn(
        "flex items-center justify-between px-4 py-2 cursor-pointer",
        active && "bg-accent text-accent-foreground"
      )}
    >
      <div className="flex items-center gap-2 text-sm">
        {action.icon && action.icon}
        <div className="flex flex-col">
          <div>
            {ancestors.length > 0 &&
              ancestors.map((ancestor) => (
                <React.Fragment key={ancestor.id}>
                  <span className="opacity-50 mr-2">{ancestor.name}</span>
                  <span className="mr-2">&rsaquo;</span>
                </React.Fragment>
              ))}
            <span>{action.name}</span>
          </div>
          {action.subtitle && (
            <span className="text-xs opacity-50">{action.subtitle}</span>
          )}
        </div>
      </div>
      {action.shortcut?.length ? (
        <div className="flex items-center gap-1">
          {action.shortcut.map((sc: string) => (
            <kbd
              key={sc}
              className="px-2 py-1 text-xs bg-muted rounded"
            >
              {sc}
            </kbd>
          ))}
        </div>
      ) : null}
    </div>
  );
});

ResultItem.displayName = "ResultItem";

export { CommandPalette };
