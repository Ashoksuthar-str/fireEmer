import { useState } from "react";
import { Moon, Star, Sparkles, Cloud, ChevronRight } from "lucide-react";

function App() {
  const [active, setActive] = useState(true);

  function changeState() {
    setActive(!active);
  }

  return (
    <div className="min-h-screen w-screen  bg-gradient-to-br from-indigo-950 via-purple-900 to-indigo-900 relative overflow-hidden">
      {/* Animated background stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Star
          className="absolute top-20 left-20 text-yellow-200 animate-pulse opacity-60"
          size={16}
        />
        <Star
          className="absolute top-40 right-32 text-yellow-200 animate-pulse opacity-40"
          size={12}
          style={{ animationDelay: "0.5s" }}
        />
        <Star
          className="absolute bottom-32 left-40 text-yellow-200 animate-pulse opacity-50"
          size={14}
          style={{ animationDelay: "1s" }}
        />
        <Star
          className="absolute top-60 right-20 text-yellow-200 animate-pulse opacity-70"
          size={10}
          style={{ animationDelay: "1.5s" }}
        />
        <Cloud
          className="absolute top-10 right-40 text-indigo-300 opacity-20 animate-pulse"
          size={80}
          style={{ animationDelay: "2s" }}
        />
        <Cloud
          className="absolute bottom-20 left-20 text-indigo-300 opacity-15 animate-pulse"
          size={100}
          style={{ animationDelay: "0.8s" }}
        />
      </div>

      {active ? (
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-12 text-center">
          {/* Icon container with animation */}
          <div className="mb-8 relative">
            <div className="absolute inset-0 bg-purple-500 blur-3xl opacity-40 animate-pulse"></div>
            <Moon
              className="relative text-yellow-100 animate-bounce"
              size={80}
              strokeWidth={1.5}
            />
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Help You Get
            <span className="block bg-gradient-to-r from-purple-300 via-pink-300 to-indigo-300 bg-clip-text text-transparent">
              Better Sleep
            </span>
          </h1>

          {/* Subheading with icon */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <Sparkles className="text-yellow-300" size={20} />
            <p className="text-xl md:text-2xl text-indigo-200 font-light">
              Your Journey to Restful Nights Starts Here
            </p>
            <Sparkles className="text-yellow-300" size={20} />
          </div>

          {/* Description paragraph */}
          <p className="text-lg text-indigo-100 max-w-2xl mb-4 leading-relaxed">
            Welcome to your personal sleep sanctuary. We understand that quality
            sleep is the foundation of a healthy, productive life. Whether
            you're struggling with insomnia, restless nights, or simply want to
            optimize your sleep routine, we're here to guide you every step of
            the way.
          </p>

          <p className="text-md text-indigo-200 max-w-xl mb-12 leading-relaxed">
            Our science-backed approach combines relaxation techniques, sleep
            hygiene education, and personalized recommendations to help you
            achieve the deep, restorative sleep your body deserves.
          </p>

          {/* CTA Button */}
          <button
            onClick={changeState}
            className="group relative bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 text-white px-10 py-5 rounded-full text-lg font-semibold shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-3"
          >
            <span>Let's Get Better Sleep</span>
            <ChevronRight
              className="group-hover:translate-x-1 transition-transform"
              size={24}
            />
          </button>

          {/* Feature highlights */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-4xl mb-3">🌙</div>
              <h3 className="text-white font-semibold text-lg mb-2">
                Personalized Plans
              </h3>
              <p className="text-indigo-200 text-sm">
                Tailored sleep strategies designed just for you
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-4xl mb-3">🧘</div>
              <h3 className="text-white font-semibold text-lg mb-2">
                Relaxation Tools
              </h3>
              <p className="text-indigo-200 text-sm">
                Guided meditations and calming techniques
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-4xl mb-3">📊</div>
              <h3 className="text-white font-semibold text-lg mb-2">
                Track Progress
              </h3>
              <p className="text-indigo-200 text-sm">
                Monitor your sleep improvement journey
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-12 text-center">
          {/* Success state */}
          <div className="mb-8 relative">
            <div className="absolute inset-0 bg-green-500 blur-3xl opacity-40 animate-pulse"></div>
            <Sparkles
              className="relative text-green-300 animate-spin"
              size={80}
              strokeWidth={1.5}
              style={{ animationDuration: "3s" }}
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Hui Ja
          </h1>

          <img
            src="https://res.cloudinary.com/dtaaxutc2/image/upload/v1759165202/images_lntpay.jpg"
            alt="Hui ja loda"
            srcset=""
          />

          <button
            onClick={changeState}
            className="group bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full text-lg font-semibold border-2 border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-105"
          >
            ← Back to Home
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
