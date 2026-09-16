"use server";

import AdminHome from "../components/home/admin-home";
import StudentHome from "../components/home/student-home";

export default async function Home() {
  // ! Add a check after implementing Microsoft OAuth
  // If user.email contains "@mypolkschools.net" send to student page, else, send to admin.

  return (
    <AdminHome/>
  )
}
