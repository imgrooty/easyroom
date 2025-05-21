"use client";

import Link from "next/link";
import { Home, Menu, X } from "lucide-react";
import { useState } from "react";
import { useSession, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Search", href: "/search" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session, status } = useSession();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <Home className="h-6 w-6" />
            <span className="font-bold text-xl hidden sm:inline-block">EasyRooms</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {item.name}
            </Link>
          ))}
          {session?.user && session.user.role === "LANDLORD" && (
            <Link
              href="/rooms/new"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              List Room
            </Link>
          )}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden md:flex items-center gap-2">
            {status === "loading" ? (
              <Button disabled variant="ghost">
                <span className="animate-spin">⌛</span>
              </Button>
            ) : session?.user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage
                        src={session.user.image || ""}
                        alt={session.user.name || ""}
                      />
                      <AvatarFallback>
                        {session.user.name
                          ?.split(" ")
                          .map((n) => n[0])
                          .join("")
                          .toUpperCase() || "U"}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <div className="flex items-center justify-start gap-2 p-2">
                    <div className="flex flex-col space-y-1 leading-none">
                      {session.user.name && (
                        <p className="font-medium">{session.user.name}</p>
                      )}
                      {session.user.email && (
                        <p className="w-[200px] truncate text-sm text-muted-foreground">
                          {session.user.email}
                        </p>
                      )}
                    </div>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/dashboard">Dashboard</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/profile">Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    className="cursor-pointer"
                    onSelect={(event) => {
                      event.preventDefault();
                      signOut({
                        callbackUrl: `${window.location.origin}/auth/login`,
                      });
                    }}
                  >
                    Sign out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Link href="/auth/login">
                  <Button variant="outline">Log in</Button>
                </Link>
                <Link href="/auth/register">
                  <Button>Sign up</Button>
                </Link>
              </>
            )}
          </div>
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in md:hidden bg-background",
          isMenuOpen ? "slide-in-from-top-80" : "hidden"
        )}
      >
        <div className="relative z-20 grid gap-6 rounded-md p-4">
          <nav className="grid grid-flow-row auto-rows-max text-sm">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex w-full items-center rounded-md p-2 text-sm font-medium hover:bg-accent"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            {session?.user && session.user.role === "LANDLORD" && (
              <Link
                href="/rooms/new"
                className="flex w-full items-center rounded-md p-2 text-sm font-medium hover:bg-accent"
                onClick={() => setIsMenuOpen(false)}
              >
                List Room
              </Link>
            )}
            <div className="flex flex-col gap-2 mt-4">
              {session?.user ? (
                <>
                  <Link href="/dashboard" onClick={() => setIsMenuOpen(false)}>
                    <Button variant="outline" className="w-full">Dashboard</Button>
                  </Link>
                  <Link href="/profile" onClick={() => setIsMenuOpen(false)}>
                    <Button variant="outline" className="w-full">Profile</Button>
                  </Link>
                  <Button
                    className="w-full"
                    onClick={() => {
                      setIsMenuOpen(false);
                      signOut({ callbackUrl: `${window.location.origin}/auth/login` });
                    }}
                  >
                    Sign out
                  </Button>
                </>
              ) : (
                <>
                  <Link href="/auth/login" onClick={() => setIsMenuOpen(false)}>
                    <Button variant="outline" className="w-full">Log in</Button>
                  </Link>
                  <Link href="/auth/register" onClick={() => setIsMenuOpen(false)}>
                    <Button className="w-full">Sign up</Button>
                  </Link>
                </>
              )}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}