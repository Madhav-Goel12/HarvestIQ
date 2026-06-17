import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div>
          <h1 className="text-2xl font-bold text-green-700">
            HarvestIQ
          </h1>
          <p className="text-xs text-gray-500">
            Smart Farming Solutions
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex gap-8 text-gray-700 font-medium">
          <Link href="/" className="hover:text-green-600 transition">
            Home
          </Link>

          <Link href="/About" className="hover:text-green-600 transition">
            About
          </Link>

          <Link href="/dashboard" className="hover:text-green-600 transition">
            Dashboard
          </Link>

          <Link href="/login" className="hover:text-green-600 transition">
            Login
          </Link>
        </div>

        {/* CTA */}
        <button className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition">
          Explore Insights
        </button>

      </div>
    </nav>
  );
}