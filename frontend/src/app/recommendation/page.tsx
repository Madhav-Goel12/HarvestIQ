"use client";

import { useEffect, useState } from "react";
import { getRecommendations } from "../../../lib/api";

export default function RecommendationPage() {
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRecommendations() {
      try {
        const data = await getRecommendations();
        setRecommendations(data);
      } catch (error) {
        console.error("Failed to fetch recommendations:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchRecommendations();
  }, []);

  if (loading) {
    return (
      <div className="p-10 text-xl">
        Loading recommendations...
      </div>
    );
  }

  return (
    <main className="min-h-screen p-10 bg-gray-100">
      <h1 className="text-4xl font-bold text-green-700 mb-8">
        Crop Recommendations
      </h1>

      <div className="grid md:grid-cols-2 gap-6">
        {recommendations.map((item: any) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-md p-6"
          >
            <h2 className="text-2xl font-semibold">
              🌱 {item.crop}
            </h2>

            <p className="mt-3">
              <strong>Soil:</strong> {item.soil}
            </p>

            <p>
              <strong>Season:</strong> {item.season}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}