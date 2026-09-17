import { getSession } from "@/lib/auth";
import StudentHome from "../components/home/student-related/student-home";
import { redirect } from "next/navigation";

export default async function StudentPage() {
  const session = await getSession();
  if (!session) redirect("/sign-in");

  const studentName: string = session.user.name;

  return <StudentHome studentName={studentName} />;
}
