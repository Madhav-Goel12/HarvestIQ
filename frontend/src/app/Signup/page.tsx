import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

export default function Signup() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen px-6 py-16 max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-green-700 mb-4">
          Sign Up
        </h1>

        <p className="text-gray-600">
          Create a HarvestIQ account to receive AI-powered farming insights,
          crop recommendations, and market intelligence.
        </p>
      </main>

      <Footer />
    </>
  );
}