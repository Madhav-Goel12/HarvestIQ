import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
export default function Dashboard() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen px-6 py-16 max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-green-700 mb-4">
          Dashboard
        </h1>

        <p className="text-gray-600">
          The HarvestIQ dashboard will provide farmers with crop
          recommendations, weather insights, yield predictions,
          and market analytics in future releases.
        </p>
      </main>

      <Footer />
    </>
  );
}