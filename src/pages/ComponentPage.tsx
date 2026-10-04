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
      <main>
        <h1>Component not found</h1>
      </main>
    );
  }

  const Demo = component.demo;

  return (
    <main>
      <Navbar />
      <span>{component.category}</span>

      <h1>{component.name}</h1>

      <p>{component.description}</p>

      <Demo />
    </main>
  );
}

export default ComponentPage;