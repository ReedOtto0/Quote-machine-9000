"use client";

import { createContext, useState, useEffect, useReducer } from "react";

const quoteApiUrl = "https://dummyjson.com/quotes/random";
const initialQuote = {
  quote: "loading...",
  author: "",
};
const initialTheme = {
  bg: "solid",
  bgColor: "#eee",
  bgImg: null,
  font: "default",
  fontColor: "#fff",
  fontSize: "normal",
  fontWeight: "normal",
};

export const QuoteContext = createContext([]);

export default function QuoteCache({ children, filters }) {
  const [current, setCurrent] = useState(initialQuote);

  const themeReducer = (action, currentTheme) => {
    switch (action.type) {
      default:
        return { ...currentTheme };
    }
  };

  const [theme, themeDispatch] = useReducer(initialTheme, themeReducer);

  async function fetchNewQuotes() {
    try {
      const response = await fetch(quoteApiUrl);
      const data = await response.json();
      console.log(JSON.stringify(data));
      setCurrent(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchNewQuotes();
  }, []);

  return (
    <QuoteContext.Provider
      value={{
        current: current,
        refresh: fetchNewQuotes,
        theme: theme,
        themeDispatch: themeDispatch,
      }}
    >
      {children}
    </QuoteContext.Provider>
  );
}
