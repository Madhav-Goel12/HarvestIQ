import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

export default function AboutPage() {
  const features = [
    {
      title: "AI-Powered Recommendations",
      desc: "Get the best crop suggestions based on soil and weather conditions.",
      icon: "🌱",
    },
    {
      title: "Weather Monitoring",
      desc: "Stay updated with real-time weather forecasts.",
      icon: "☁️",
    },
    {
      title: "Yield Predictions",
      desc: "Predict crop yield using machine learning.",
      icon: "📈",
    },
    {
      title: "Market Insights",
      desc: "Track prices and demand trends.",
      icon: "📊",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-6 py-16">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div>

              <h1 className="text-5xl font-bold text-green-700 mb-6">
                About HarvestIQ
              </h1>

              <p className="text-gray-600 mb-10">
                HarvestIQ empowers farmers with AI-driven insights,
                crop recommendations, weather monitoring and
                data-based decision making.
              </p>

              <div className="space-y-6">

                {features.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4"
                  >
                    <div className="text-4xl">
                      {item.icon}
                    </div>

                    <div>
                      <h3 className="font-semibold text-lg">
                        {item.title}
                      </h3>

                      <p className="text-gray-600">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}

              </div>
            </div>

            <div>

              <img
                src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854"
                alt="Farmer"
                className="rounded-3xl shadow-xl"
              />

              <div className="bg-green-50 mt-6 p-6 rounded-xl">
                <h3 className="font-bold text-green-700">
                  Our Mission
                </h3>

                <p className="text-gray-600 mt-2">
                  To revolutionize farming through AI-powered
                  decision support systems.
                </p>
              </div>

            </div>

          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}