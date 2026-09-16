import Link from "next/link";

export default function AdminNavbar() {
  return (
    <nav className="text-xl sm:text-2xl font-bold w-full h-20 bg-white rounded-b-md flex justify-center items-center gap-8 xl:gap-20" id="admin-navbar">
      <Link href="/home" className="hover:underline">Home</Link>
      <Link href="/request-log" className="hover:underline">Request Log</Link>
    </nav>
  )
}
