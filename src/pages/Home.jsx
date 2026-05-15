import { useEffect, useRef } from "react";

export default function Home() {
  const fullName = "Rohit Shrestha";
  const fullSubtitle = "DevOps Engineering Assistant @ UON";
  const nameRef = useRef(null);
  const mainRef = useRef(null);

  useEffect(() => {
    document.title = "Rohit Shrestha - Portfolio";
  }, []);

  const createRipple = (event) => {
    // Don't create ripple if hovering over nav elements
    if (event.target.closest('nav') || event.target.closest('a[href]')) {
      return;
    }

    const main = mainRef.current;
    const rect = main.getBoundingClientRect();
    const point = event.touches?.[0] ?? event.changedTouches?.[0] ?? event;
    const x = point.clientX - rect.left;
    const y = point.clientY - rect.top;

    const ripple = document.createElement('span');
    ripple.classList.add('ripple');
    ripple.style.left = (x - 30) + 'px';
    ripple.style.top = (y - 30) + 'px';

    main.appendChild(ripple);

    // Remove ripple after animation completes
    setTimeout(() => ripple.remove(), 1200);
  };

  return (
    <main
      ref={mainRef}
      onPointerMove={createRipple}
      onPointerDown={createRipple}
      onTouchStart={createRipple}
      className="relative flex min-h-screen items-center justify-center bg-gradient-to-br from-cyan-300 via-slate-50 to-emerald-200 pt-16 overflow-hidden"
    >
      <div className="relative max-w-4xl px-6 text-center">
        <div className="absolute inset-0 bg-white/40 blur-3xl rounded-full opacity-30" />
        
        <div className="relative z-10 space-y-6">
        <h1 className="font-display cursor-pointer text-7xl sm:text-8xl font-black tracking-tight text-slate-700 leading-tight" ref={nameRef}>
          {fullName}
        </h1>
          
          <p className="cursor-pointer font-sans text-lg sm:text-xl font-light text-slate-900 tracking-wide">
            {fullSubtitle}
          </p>
          
          <div className="flex gap-2 justify-center pt-8">
            <div className="h-1 w-8 bg-gradient-to-r from-blue-400 to-blue-300 rounded-full" />
            <div className="h-1 w-1 bg-slate-300 rounded-full" />
            <div className="h-1 w-1 bg-slate-300 rounded-full" />
          </div>
        </div>
      </div>
    </main>
  );
}
