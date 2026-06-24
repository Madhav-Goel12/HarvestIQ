import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Link from "next/link";

export default function LoginPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-b from-white to-green-50 flex items-center justify-center px-4">

        <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-xl">

          <h1 className="text-4xl font-bold text-green-700 text-center mb-2">
            Welcome Back!
          </h1>

          <p className="text-center text-gray-500 mb-8">
            Login to access your HarvestIQ dashboard.
          </p>

          <form className="space-y-4">

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border p-3 rounded-lg"
            />

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full border p-3 rounded-lg"
            />

            <button
              className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700"
            >
              Login
            </button>

          </form>

          <p className="text-center mt-6">
            Don't have an account?

            <Link
              href="/Signup"
              className="text-green-700 font-semibold ml-2"
            >
              Sign Up
            </Link>
          </p>

        </div>

      </main>

      <Footer />
    </>
  );
}