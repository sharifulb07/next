// File: /app/items/[slug]/page.tsx
"use client"; // Fetching dynamically, so this must be a client component

import { useEffect, useState } from "react";

export default function ItemPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const [item, setItem] = useState<{ id: number; title: string; description: string } | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`/api/items/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Item not found");
        return res.json();
      })
      .then((data) => setItem(data))
      .catch((err) => setError(err.message));
  }, [id]);

  if (error) return <div className="error">Error: {error}</div>;
  if (!item) return <div>Loading...</div>;

  return (
    <div>
      <h1>{item.title}</h1>
      <p>{item.description}</p>
    </div>
  );
}
