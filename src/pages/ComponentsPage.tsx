import { Link } from "react-router-dom";
import { components } from "../data/components";

function ComponentsPage() {
  return (
    <main>
      <h1>Components</h1>

      <p>Explore the available Three.js animations and effects.</p>

      <div>
        {components.map((component) => (
          <Link
            key={component.slug}
            to={`/components/${component.slug}`}
          >
            <article>
              <h2>{component.name}</h2>
              <p>{component.description}</p>
              <span>{component.category}</span>
            </article>
          </Link>
        ))}
      </div>
    </main>
  );
}

export default ComponentsPage;