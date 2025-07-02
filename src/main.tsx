import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
console.log("STARTING");

function runUserCode(userInput) {
  eval(userInput); // Dangerous!
}

runUserCode("console.log('Hello!')");

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
