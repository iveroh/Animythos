import Navbar from "../ui/Navbar";
import HeroSection from "../ui/HeroSection";

function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <HeroSection />
      <div className="relative z-20">
        <Navbar />
      </div>
    </main>
  );
}

export default HomePage;