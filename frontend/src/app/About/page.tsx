import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

export default function About() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen px-6 py-16 max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-green-700 mb-4">
          About HarvestIQ
        </h1>

        <p className="text-gray-600">
          HarvestIQ is an AI-powered agriculture platform designed to help
          farmers make smarter decisions through crop recommendations,
          weather monitoring, yield prediction, and market insights.
        </p>
      </main>

      <Footer />
    </>
  );
}