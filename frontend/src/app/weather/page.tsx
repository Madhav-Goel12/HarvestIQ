export default function WeatherPage() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold text-green-700 mb-6">
        Weather Monitoring
      </h1>

      <div className="bg-white shadow rounded-xl p-6">
        <p><strong>Location:</strong> Bengaluru</p>
        <p><strong>Temperature:</strong> 30°C</p>
        <p><strong>Humidity:</strong> 72%</p>
        <p><strong>Condition:</strong> Sunny</p>
      </div>
    </div>
  );
}