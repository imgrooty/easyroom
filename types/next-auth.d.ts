import "next-auth";
import { JWT } from "next-auth/jwt";

type UserRole = "TENANT" | "LANDLORD" | "ADMIN";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      id: string;
      role: UserRole;
      name?: string | null;
      email?: string | null;
      image?: string | null;
    }
  }
}

declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    /** User role */
    role?: UserRole;
  }
}