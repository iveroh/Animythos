import { components } from "../data/components";
import Navbar from "../ui/Navbar";
import ComponentsCard from "../ui/ComponentsCard";
import { AuroraFlow } from "../components/backgrounds/Aurora";

function ComponentsPage() {
  return (
    <main className="relative min-h-screen bg-[#16002e]">
      <div className="fixed inset-0">
        <AuroraFlow />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col">
        <Navbar />

        <section className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-12 px-6 py-16">
          <header className="flex flex-col items-center gap-3 text-center">
            <h1 className="text-5xl font-bold md:text-6xl">Components</h1>
            <p className="max-w-xl text-lg text-white/70">
              Explore the available Three.js animations and effects.
            </p>
          </header>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {components.map((component) => (
              <ComponentsCard key={component.slug} component={component} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

export default ComponentsPage;