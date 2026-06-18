export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-green-50 to-green-100 py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h1 className="text-5xl font-bold text-green-800 mb-6">
          Smart Farming with AI-Powered Insights
        </h1>

        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
          HarvestIQ helps farmers make data-driven decisions through crop
          recommendations, yield analysis, weather monitoring, and market
          insights.
        </p>

        <div className="flex justify-center gap-4">
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">
            Get Started
          </button>

          <button className="border border-green-600 text-green-700 px-6 py-3 rounded-lg hover:bg-green-50 transition">
            Learn More
          </button>
        </div>

        <div className="mt-12">
          <img
            src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854"
            alt="Smart Farming"
            className="w-full max-w-4xl mx-auto rounded-xl shadow-lg"
          />
        </div>

      </div>
    </section>
  );
}