import { betterAuth } from "better-auth";
import { drizzleAdapter } from "@better-auth/drizzle-adapter";
import { db } from "@/lib/index";
import { nextCookies } from "better-auth/next-js";
import { headers } from "next/headers";
import "dotenv/config";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
  }),
  // emailAndPassword: { Not sure if this should be added },
  plugins: [nextCookies()],
  pages: {
    signIn: "/signin",
  },
  // socialProviders: { Will add Microsoft OAuth },
});
export const getSession = async () =>
  auth.api.getSession({
    headers: await headers(),
  });
