import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "Coming soon";
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center bg-white text-slate-950">
      <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
        Coming soon ...
      </h1>
    </main>
  );
}
