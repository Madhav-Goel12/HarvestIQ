import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

export default function Login() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen px-6 py-16 max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-green-700 mb-4">
          Login
        </h1>

        <p className="text-gray-600">
          Farmers and agricultural experts will be able to log in here to
          access personalized recommendations, dashboards, and analytics.
        </p>
      </main>

      <Footer />
    </>
  );
}