export default function MarketPage() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold text-green-700 mb-6">
        Market Insights
      </h1>

      <div className="bg-white shadow rounded-xl p-6">
        <table className="w-full">
          <thead>
            <tr className="text-left">
              <th>Crop</th>
              <th>Price (₹/Quintal)</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Rice</td>
              <td>2400</td>
            </tr>

            <tr>
              <td>Wheat</td>
              <td>2200</td>
            </tr>

            <tr>
              <td>Maize</td>
              <td>1950</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}