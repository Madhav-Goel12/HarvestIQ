const API_URL = "http://localhost:5000";

export async function getRecommendations() {
  const res = await fetch(`${API_URL}/api/recommendations`);

  if (!res.ok) {
    throw new Error("Failed to fetch recommendations");
  }

  return res.json();
}