import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <Link
          href="/"
          className="text-2xl font-bold text-green-700"
        >
          HarvestIQ
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-gray-700 hover:text-green-600 transition">
            Home
          </Link>

          <Link href="/About" className="text-gray-700 hover:text-green-600 transition">
            About
          </Link>

          <Link href="/dashboard" className="text-gray-700 hover:text-green-600 transition">
            Dashboard
          </Link>

          <Link href="/login" className="text-gray-700 hover:text-green-600 transition">
            Login
          </Link>

          <Link
            href="/Signup"
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}