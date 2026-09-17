import Link from "next/link";

export default function AuthNavbar() {
  return (
    <nav
      className="text-xl sm:text-2xl font-bold w-full h-20 bg-white rounded-b-md flex justify-center items-center gap-8 xl:gap-20"
      id="admin-navbar"
    >
      <Link href="/sign-in" className="hover:underline">
        Sign-In
      </Link>
      <Link href="/sign-up" className="hover:underline">
        Sign-Up
      </Link>
    </nav>
  );
}
