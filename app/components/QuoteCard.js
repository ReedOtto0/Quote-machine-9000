import { useContext } from "react";
import { QuoteContext } from "./QuoteCache";

export default function QuoteCard() {
  const { current: current, them: theme } = useContext(QuoteContext);

  return (
    <section className="w-full h-full flex justify-center items-center border-2 border-red-500 p-2">
      <blockquote className="border-2 border-green-500 p-2">
        <p>{current.quote}</p>
        <footer>
          {current.author !== "" && <cite>{`--${current.author}`}</cite>}
        </footer>
      </blockquote>
    </section>
  );
}
