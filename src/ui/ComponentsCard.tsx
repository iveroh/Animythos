import { Link } from "react-router-dom";

import type { ComponentInfo } from "../data/components";

function ComponentsCard({ component }: { component: ComponentInfo }) {
  return (
    <Link
      to={`/components/${component.slug}`}
      className="group block h-full"
    >
      <article className="flex h-full flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition duration-200 group-hover:-translate-y-1 group-hover:border-violet-400/60 group-hover:bg-white/10">
        <span className="w-fit rounded-full bg-violet-500/20 px-3 py-1 text-xs font-medium tracking-wide text-violet-200">
          {component.category}
        </span>

        <h2 className="text-xl font-semibold">{component.name}</h2>

        <p className="text-sm leading-relaxed text-white/70">
          {component.description}
        </p>
      </article>
    </Link>
  );
}

export default ComponentsCard;
