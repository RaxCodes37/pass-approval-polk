import { getSession } from "@/lib/auth";
import AdminNavbar from "../components/home/admin-related/admin-navbar";
import { redirect } from "next/navigation";
import RequestLogClient from "../components/request-log/request-log-client";

export default async function RequestLogPage() {
  const session = await getSession();
  if (!session) redirect("/sign-in");

  const userName = session.user.name;

  return (
    <div>
      <AdminNavbar />
      <div className="flex justify-center">
        <RequestLogClient teacherName={userName}/>
      </div>
    </div>
  );
}
