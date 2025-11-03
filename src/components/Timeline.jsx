import { useState, useRef, useEffect } from "react";

const Timeline = ({ checkpoints, title, subtitle }) => {
  const [position, setPosition] = useState(5);
  const [isDragging, setIsDragging] = useState(false);
  const [activeCheckpoint, setActiveCheckpoint] = useState(0);
  const [darkMode, setDarkMode] = useState(true);
  const pathRef = useRef(null);
  const personRef = useRef(null);

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      .scrollbar-hide::-webkit-scrollbar {
        display: none;
      }
      @keyframes wiggle {
        0%, 100% { transform: translateX(0); }
        50% { transform: translateX(8px); }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    e.preventDefault();
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    e.preventDefault();
  };

  const handleMove = (clientX) => {
    if (!isDragging || !pathRef.current) return;

    const rect = pathRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(5, Math.min(92, (x / rect.width) * 100));
    setPosition(percentage);

    const nearest = checkpoints.reduce((prev, curr) => {
      return Math.abs(curr.position - percentage) <
        Math.abs(prev.position - percentage)
        ? curr
        : prev;
    });
    setActiveCheckpoint(nearest.id);
  };

  const handleMouseMove = (e) => {
    handleMove(e.clientX);
  };

  const handleTouchMove = (e) => {
    if (e.touches && e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleEnd = () => {
    if (isDragging) {
      const nearest = checkpoints[activeCheckpoint];
      setPosition(nearest.position);
      setIsDragging(false);
    }
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleEnd);
      document.addEventListener("touchmove", handleTouchMove);
      document.addEventListener("touchend", handleEnd);
    }
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleEnd);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleEnd);
    };
  }, [isDragging, activeCheckpoint]);

  const currentCheckpoint = checkpoints[activeCheckpoint];

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode
          ? "bg-linear-to-br from-slate-900 to-slate-800"
          : "bg-linear-to-br from-slate-50 to-slate-100"
      } pt-36 sm:pt-40 pb-24 sm:pb-28`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        {/* Fixed Header */}
        <div
          className={`fixed top-0 left-0 right-0 z-40 py-6 sm:py-8 transition-colors ${
            darkMode ? "bg-slate-900/80" : "bg-slate-50/80"
          }`}
          style={{
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
          }}
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-8">
            <div className="flex items-center justify-between">
              <div className="text-left sm:text-center sm:flex-1">
                <h1
                  className={`text-2xl sm:text-5xl font-bold mb-1 sm:mb-2 ${
                    darkMode ? "text-white" : "text-slate-900"
                  }`}
                >
                  {title}
                </h1>
                <p
                  className={`text-sm sm:text-lg ${
                    darkMode ? "text-slate-400" : "text-slate-600"
                  }`}
                >
                  {subtitle}
                </p>
              </div>
              <div className="sm:ml-4">
                <div
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-xl sm:text-3xl hover:scale-110 active:scale-95 transition-transform touch-manipulation rounded-full p-2 shadow-lg"
                  style={{
                    backgroundColor: darkMode ? "rgb(30, 41, 59)" : "white",
                  }}
                >
                  {darkMode ? "☀️" : "🌙"}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Details Card */}
        <div
          className={`rounded-2xl shadow-sm p-4 sm:p-8 h-96 sm:h-80 mb-8 sm:mb-12 transition-colors flex flex-col ${
            darkMode
              ? "bg-slate-800 border border-slate-700"
              : "bg-white border border-slate-200"
          }`}
        >
          <div className="mb-4 sm:mb-6 flex-shrink-0">
            <div className="flex items-center gap-3 mb-2">
              <h2
                className={`text-2xl sm:text-3xl font-semibold ${currentCheckpoint.textColor}`}
              >
                {currentCheckpoint.title}
              </h2>
            </div>
            <p
              className={`text-xs sm:text-sm ${
                darkMode ? "text-slate-400" : "text-slate-500"
              }`}
            >
              {currentCheckpoint.period}
            </p>
          </div>
          <div
            className="space-y-2 sm:space-y-3 overflow-y-auto flex-1 scrollbar-hide"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {currentCheckpoint.details.map((detail, idx) => (
              <div
                key={idx}
                className={`flex items-start gap-2 sm:gap-3 ${
                  darkMode ? "text-slate-300" : "text-slate-700"
                }`}
              >
                <div
                  className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${
                    darkMode ? "bg-slate-500" : "bg-slate-400"
                  }`}
                ></div>
                <span className="text-sm sm:text-base leading-relaxed">
                  {detail}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Stats */}
        <div className="flex flex-col gap-3 sm:flex-row sm:gap-6 mt-8">
          <div
            className={`flex-1 rounded-xl p-4 sm:p-6 text-center transition-colors ${
              darkMode
                ? "bg-slate-800 border border-slate-700"
                : "bg-white border border-slate-200"
            }`}
          >
            <div
              className={`text-2xl sm:text-3xl font-bold mb-1 ${
                darkMode ? "text-white" : "text-slate-900"
              }`}
            >
              Step {activeCheckpoint + 1}
            </div>
            <div
              className={`text-xs sm:text-sm ${
                darkMode ? "text-slate-400" : "text-slate-500"
              }`}
            >
              of {checkpoints.length}
            </div>
          </div>
          <div
            className={`flex-1 rounded-xl p-4 sm:p-6 text-center transition-colors ${
              darkMode
                ? "bg-slate-800 border border-slate-700"
                : "bg-white border border-slate-200"
            }`}
          >
            <div
              className={`text-2xl sm:text-3xl font-bold mb-1 ${
                darkMode ? "text-white" : "text-slate-900"
              }`}
            >
              ~4 years
            </div>
            <div
              className={`text-xs sm:text-sm ${
                darkMode ? "text-slate-400" : "text-slate-500"
              }`}
            >
              to PR
            </div>
          </div>
          <div
            className={`flex-1 rounded-xl p-4 sm:p-6 text-center transition-colors ${
              darkMode
                ? "bg-slate-800 border border-slate-700"
                : "bg-white border border-slate-200"
            }`}
          >
            <div
              className={`text-2xl sm:text-3xl font-bold mb-1 ${
                darkMode ? "text-white" : "text-slate-900"
              }`}
            >
              ~6 years
            </div>
            <div
              className={`text-xs sm:text-sm ${
                darkMode ? "text-slate-400" : "text-slate-500"
              }`}
            >
              to citizenship
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Journey Path */}
      <div
        className="fixed bottom-0 left-0 right-0 p-3 sm:p-4 z-40"
        style={{
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
        }}
      >
        <div className="max-w-5xl mx-auto" ref={pathRef}>
          {/* Road Container */}
          <div className="relative h-16 sm:h-20 rounded-2xl overflow-visible px-2 sm:px-4 flex items-center transition-colors bg-transparent">
            {/* Center line */}
            <div
              className={`absolute top-1/2 left-2 right-2 sm:left-4 sm:right-4 h-0.5 transform -translate-y-1/2 ${
                darkMode ? "bg-slate-600" : "bg-slate-300"
              }`}
            ></div>

            {/* Checkpoint Balls */}
            {checkpoints.map((checkpoint) => (
              <div
                key={checkpoint.id}
                className="absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2"
                style={{ left: `${checkpoint.position}%` }}
              >
                <div
                  className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full ${checkpoint.color} shadow-lg transition-all duration-300`}
                  style={{
                    transform:
                      activeCheckpoint === checkpoint.id
                        ? "scale(1.5)"
                        : "scale(1)",
                    boxShadow:
                      activeCheckpoint === checkpoint.id
                        ? `0 0 20px ${checkpoint.color
                            .replace("bg-", "rgba(")
                            .replace("-500", ", 0.6)")}`
                        : "",
                  }}
                ></div>
              </div>
            ))}

            {/* Draggable Person */}
            <div
              ref={personRef}
              className="absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2 cursor-grab active:cursor-grabbing z-20 touch-none"
              style={{
                left: `${position}%`,
                transition: isDragging
                  ? "none"
                  : "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
              onMouseDown={handleMouseDown}
              onTouchStart={handleTouchStart}
            >
              <div
                className="relative"
                style={{
                  animation: !isDragging
                    ? "wiggle 2s ease-in-out infinite"
                    : "none",
                }}
              >
                {/* Running person emoji */}
                <div
                  className="flex items-center justify-center select-none"
                  style={{
                    filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.2))",
                    transform: isDragging
                      ? "scale(1.5) scaleX(-1)"
                      : "scale(1) scaleX(-1)",
                    transition: "transform 0.2s",
                  }}
                >
                  <span style={{ fontSize: "35px" }} className="sm:text-4xl">
                    🏃🏻
                  </span>
                </div>

                {/* Colorful tooltip when dragging */}
                {isDragging && (
                  <div
                    className={`absolute -top-16 sm:-top-24 left-1/2 ${currentCheckpoint.color} text-white px-3 py-2 sm:px-4 sm:py-3 rounded-xl shadow-2xl min-w-max`}
                    style={{
                      transform: "translateX(-50%)",
                      animation: "fadeIn 0.2s ease-in",
                    }}
                  >
                    <div className="font-bold text-sm sm:text-base mb-1">
                      {currentCheckpoint.title}
                    </div>
                    <div className="text-xs sm:text-sm opacity-90">
                      {currentCheckpoint.period}
                    </div>
                    {/* Arrow pointer */}
                    <div
                      className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 ${currentCheckpoint.color} rotate-45`}
                    ></div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
