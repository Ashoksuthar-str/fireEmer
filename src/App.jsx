import { useState } from "react";
import { Flame, Bell, AlertTriangle, ChevronRight } from "lucide-react";

function App() {
  const [active, setActive] = useState(true);

  function changeState() {
    setActive(!active);
  }

  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-red-900 via-orange-800 to-black relative overflow-hidden">
      {/* Animated background flames */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Flame
          className="absolute top-20 left-20 text-orange-400 animate-pulse opacity-70"
          size={20}
        />
        <Flame
          className="absolute top-40 right-32 text-red-400 animate-pulse opacity-50"
          size={14}
          style={{ animationDelay: "0.5s" }}
        />
        <Flame
          className="absolute bottom-32 left-40 text-yellow-400 animate-pulse opacity-60"
          size={18}
          style={{ animationDelay: "1s" }}
        />
        <Flame
          className="absolute top-60 right-20 text-orange-500 animate-pulse opacity-80"
          size={16}
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      {active ? (
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-12 text-center">
          {/* Icon container with animation */}
          <div className="mb-8 relative">
            <div className="absolute inset-0 bg-red-500 blur-3xl opacity-40 animate-pulse"></div>
            <AlertTriangle
              className="relative text-yellow-300 animate-bounce"
              size={90}
              strokeWidth={1.5}
            />
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            What To Do In
            <span className="block bg-gradient-to-r from-yellow-300 via-red-400 to-orange-500 bg-clip-text text-transparent">
              Fire Emergency
            </span>
          </h1>

          {/* Subheading with icon */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <Bell className="text-yellow-300" size={24} />
            <p className="text-xl md:text-2xl text-red-200 font-light">
              Stay Calm. Act Quickly. Get Help.
            </p>
            <Bell className="text-yellow-300" size={24} />
          </div>

          {/* Description */}
          <p className="text-lg text-red-100 max-w-2xl mb-4 leading-relaxed">
            Fire emergencies can happen suddenly. Knowing what to do could save
            your life and others around you. Always stay alert and follow these
            steps.
          </p>

          {/* CTA Button */}
          <button
            onClick={changeState}
            className="group relative bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 text-white px-10 py-5 rounded-full text-lg font-semibold shadow-2xl hover:shadow-red-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-3"
          >
            <span>Press This Button For Help</span>
            <ChevronRight
              className="group-hover:translate-x-1 transition-transform"
              size={24}
            />
          </button>

          {/* Feature highlights */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-4xl mb-3">🚪</div>
              <h3 className="text-white font-semibold text-lg mb-2">
                Exit Safely
              </h3>
              <p className="text-red-200 text-sm">
                Use stairs, never elevators. Get out quickly.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-4xl mb-3">🧯</div>
              <h3 className="text-white font-semibold text-lg mb-2">
                Fire Safety
              </h3>
              <p className="text-red-200 text-sm">
                If trained, use extinguisher. Otherwise, leave immediately.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-4xl mb-3">📞</div>
              <h3 className="text-white font-semibold text-lg mb-2">
                Call Help
              </h3>
              <p className="text-red-200 text-sm">
                Dial 101 (India) or 911 (US) for emergency services.
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-12 text-center">
          {/* Emergency instructions */}
          <div className="mb-8 relative">
            <div className="absolute inset-0 bg-yellow-500 blur-3xl opacity-40 animate-pulse"></div>
            <Flame
              className="relative text-red-400 animate-spin"
              size={90}
              strokeWidth={1.5}
              style={{ animationDuration: "3s" }}
            />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Abhi to bas ye boliye
          </h1>

          <img
            src="https://res.cloudinary.com/dtaaxutc2/image/upload/v1759166541/Screenshot_2025-09-29_225116_y6kdjq.png"
            alt="ma ka bhosda aag"
            srcset=""
          />

          <button
            onClick={changeState}
            className="group bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full text-lg font-semibold border-2 border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-105"
          >
            ← Back to Safety Guide
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
