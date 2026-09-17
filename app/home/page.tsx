import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getSession();

  if (!session) redirect("/sign-in");
  const userName: string = session.user.name;

  if (session.user.email.includes("@mypolkschools.net")) redirect("/student");
  else if (session.user.email.includes("@mypolkeducator.net"))
    redirect(`/admin/${userName}`);
}
