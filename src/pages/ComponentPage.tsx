import { useParams } from "react-router-dom";
import { getComponentBySlug } from "../data/components";
import Navbar from "../ui/Navbar";

function ComponentPage() {
  const { slug } = useParams();

  const component = slug
    ? getComponentBySlug(slug)
    : undefined;

  if (!component) {
    return (
      <main className="min-h-screen bg-[#16002e]">
        <Navbar />
        <h1 className="px-6 py-16 text-center text-3xl font-bold">
          Component not found
        </h1>
      </main>
    );
  }

  const Demo = component.demo;

  return (
    <main className="min-h-screen bg-[#16002e]">
      <Navbar />

      <section className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-16">
        <span className="w-fit rounded-full bg-violet-500/20 px-3 py-1 text-xs font-medium tracking-wide text-violet-200">
          {component.category}
        </span>

        <h1 className="text-4xl font-bold md:text-5xl">{component.name}</h1>

        <p className="text-lg text-white/70">{component.description}</p>

        <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-black/30">
          <Demo />
        </div>
      </section>
    </main>
  );
}

export default ComponentPage;