import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function Home() {
  // ! Add a check after implementing Microsoft OAuth
  // If user.email contains "@mypolkschools.net" send to student page, else, send to admin.
  const session = await getSession();

  if (!session) redirect("/sign-in");
  else {
    if (session.user.email.includes("@mypolkschools.net")) redirect("/student");
    else if (session.user.email.includes("@mypolkeducator.net"))redirect("/admin");
  }
}
