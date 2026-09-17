import AdminHome from "@/app/components/home/admin-related/admin-home";
import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";

type AdminPageParams = {
  params: Promise<{userName: string}>
}

export default async function AdminPage({params}: AdminPageParams) {
  const { userName } = await params
  const session = await getSession();
  if(!session) redirect("/sign-in")

  return <AdminHome teacherName={userName}/>;
}
