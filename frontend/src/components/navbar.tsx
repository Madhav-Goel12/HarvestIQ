import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <Link href="/">
          <h1 className="text-3xl font-bold text-green-700">
            HarvestIQ
          </h1>
        </Link>

        <div className="flex gap-8 items-center">
          <Link href="/">Home</Link>
          <Link href="/About">About</Link>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/login">Login</Link>

          <Link
            href="/Signup"
            className="bg-green-600 text-white px-5 py-2 rounded-lg"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}