import {
  Loader2,
  LucideProps,
  Moon,
  SunMedium,
  Twitter,
} from "lucide-react";

export type Icon = typeof Loader2;

export const Icons = {
  sun: SunMedium,
  moon: Moon,
  twitter: Twitter,
  spinner: Loader2,
} as const; 