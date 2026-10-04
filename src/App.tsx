import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ComponentsPage from "./pages/ComponentsPage";
import ComponentPage from "./pages/ComponentPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/components" element={<ComponentsPage />} />
      <Route path="/components/:slug" element={<ComponentPage />} />
    </Routes>
  );
}

export default App;