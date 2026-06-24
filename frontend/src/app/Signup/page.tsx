import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Link from "next/link";

export default function SignupPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-b from-white to-green-50 flex items-center justify-center px-4">

        <div className="bg-white w-full max-w-lg p-8 rounded-2xl shadow-xl">

          <h1 className="text-4xl font-bold text-green-700 text-center mb-2">
            Create Your Account
          </h1>

          <p className="text-center text-gray-500 mb-8">
            Join HarvestIQ and start your smart farming journey.
          </p>

          <form className="space-y-4">

            <input
              type="text"
              placeholder="Full Name"
              className="w-full border p-3 rounded-lg"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full border p-3 rounded-lg"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full border p-3 rounded-lg"
            />

            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full border p-3 rounded-lg"
            />

            <button
              className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700"
            >
              Sign Up
            </button>

          </form>

          <p className="text-center mt-6">
            Already have an account?

            <Link
              href="/login"
              className="text-green-700 font-semibold ml-2"
            >
              Login
            </Link>
          </p>

        </div>

      </main>

      <Footer />
    </>
  );
}