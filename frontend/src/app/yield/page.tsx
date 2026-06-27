export default function YieldPage() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold text-green-700 mb-6">
        Yield Prediction
      </h1>

      <div className="bg-white shadow rounded-xl p-6">
        <p>Crop : Rice</p>
        <p>Area : 2 Acres</p>
        <p>Expected Yield :</p>

        <h2 className="text-2xl font-bold text-green-600 mt-4">
          6.4 Tons
        </h2>
      </div>
    </div>
  );
}