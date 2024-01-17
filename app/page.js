"use client";

import QuoteCache from "./components/QuoteCache";
import QuoteCard from "./components/QuoteCard";

export default function Home() {
  return (
    <main className="h-dvh w-dvw">
      <QuoteCache>
        <QuoteCard />
      </QuoteCache>
    </main>
  );
}
