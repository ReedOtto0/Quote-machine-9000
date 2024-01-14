"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [quote, setQuote] = useState({ content: "Loading..." });

  async function fetchQuote()

  useEffect(() => {
    setQuote(fetchQuote());
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>{quote.content}</p>
    </main>
  );
}
