import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <h1 className="bg-red-600 text-black">Hey</h1>
  </StrictMode>
);
