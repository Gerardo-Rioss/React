import { createRoot } from "react-dom/client";
import { UserApp } from "./UserApp";
import { StrictMode } from "react";



createRoot(document.getElementById("root")).render(
  <StrictMode>
  <UserApp/>
  </StrictMode>
);

// RAFC
