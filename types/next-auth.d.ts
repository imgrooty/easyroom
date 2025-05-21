declare module "next-auth" {
  type UserRole = "TENANT" | "LANDLORD" | "ADMIN";

  interface Session {
    user: {
      id: string;
      role?: UserRole;
      name?: string | null;
      email?: string | null;
      image?: string | null;
    }
  }
}