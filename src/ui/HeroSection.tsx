import { Link } from "react-router-dom";

import { AuroraFlow } from "../components/backgrounds/Aurora";

function HeroSection() {
  return (
    <section className="absolute inset-0 overflow-hidden bg-[#16002e]">
      <AuroraFlow />

      <div className="relative z-10 flex h-full flex-col items-center justify-center gap-6 px-6 text-center">
        <span className="text-sm tracking-[0.3em] text-violet-300">
          THREE.JS × REACT
        </span>

        <h1 className="text-6xl font-bold md:text-8xl">Animythos</h1>

        <p className="max-w-xl text-lg text-white/80">
          Animated Three.js backgrounds
          built for modern React websites.
        </p>

        <Link
          to="/components"
          className="rounded-full bg-violet-600 px-8 py-3 font-medium transition hover:bg-violet-500"
        >
          Explore backgrounds
        </Link>
      </div>
    </section>
  );
}

export default HeroSection;