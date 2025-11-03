import React, { useState, useEffect } from "react";

export default function Home() {
  const text = "Coming soon ...";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;

    const intervalId = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(intervalId);
      }
    }, 150);

    return () => clearInterval(intervalId);
  }, [text]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-linear-to-b from-white to-gray-50 dark:from-slate-900 dark:to-slate-800 transition-colors duration-500 ease-in-out">
      <section className="max-w-xl w-full px-6 py-12 text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
          {displayedText}
          <span className="animate-blink">|</span>
        </h1>
      </section>

      <style>
        {`
          @keyframes blink {
            0%, 50%, 100% { opacity: 1; }
            25%, 75% { opacity: 0; }
          }
          .animate-blink {
            display: inline-block;
            margin-left: 2px;
            animation: blink 1s infinite;
          }
        `}
      </style>
    </main>
  );
}
