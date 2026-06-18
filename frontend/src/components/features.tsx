export default function Features() {
  const features = [
    {
      title: "AI Crop Recommendations",
      description:
        "Get intelligent crop suggestions based on soil conditions and environmental factors.",
    },
    {
      title: "Weather Monitoring",
      description:
        "Track weather patterns and receive updates to plan farming activities effectively.",
    },
    {
      title: "Yield Prediction",
      description:
        "Estimate crop yield using historical data and AI-powered analytics.",
    },
    {
      title: "Market Insights",
      description:
        "Stay informed about market trends and crop pricing for better profitability.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-green-700 mb-12">
          Key Features
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-green-50 p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-green-700 mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}