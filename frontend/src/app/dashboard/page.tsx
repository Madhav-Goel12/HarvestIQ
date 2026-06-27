import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Link from "next/link";

export default function DashboardPage() {
  const features = [
    {
      title: "Crop Recommendation",
      description:
        "Get AI-powered crop recommendations based on soil and weather conditions.",
      link: "/recommendation",
      icon: "🌱",
    },
    {
      title: "Weather Monitoring",
      description:
        "View real-time weather updates and forecasts for your region.",
      link: "/weather",
      icon: "☁️",
    },
    {
      title: "Yield Prediction",
      description:
        "Predict crop yield using machine learning insights.",
      link: "/yield",
      icon: "📈",
    },
    {
      title: "Market Insights",
      description:
        "Track crop prices and market demand trends.",
      link: "/market",
      icon: "📊",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-50 px-6 py-12">
        <div className="max-w-6xl mx-auto">

          <h1 className="text-5xl font-bold text-center text-green-700 mb-4">
            Dashboard
          </h1>

          <p className="text-center text-gray-600 mb-12">
            Welcome to your smart farming dashboard.
          </p>

          <div className="grid md:grid-cols-2 gap-8">

            {features.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition"
              >
                <div className="text-5xl mb-4">
                  {item.icon}
                </div>

                <h2 className="text-2xl font-semibold mb-3">
                  {item.title}
                </h2>

                <p className="text-gray-600 mb-6">
                  {item.description}
                </p>

                <Link
                  href={item.link}
                  className="inline-block bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition"
                >
                  Explore
                </Link>
              </div>
            ))}

          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}