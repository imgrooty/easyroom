import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        // Add role to the token when user signs in
        token.role = "TENANT";
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        // Add role from token to the session
        session.user.role = token.role as "TENANT" | "LANDLORD" | "ADMIN";
        session.user.id = token.sub as string;
      }
      return session;
    },
  },
  pages: {
    signIn: "/auth/login",
  },
  debug: process.env.NODE_ENV === "development",
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};