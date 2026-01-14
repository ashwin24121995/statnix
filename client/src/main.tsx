import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Completely suppress all console output
const noop = () => {};
console.log = noop;
console.error = noop;
console.warn = noop;
console.info = noop;
console.debug = noop;

// Also suppress window.onerror to catch any runtime errors
window.onerror = () => true;

// Suppress unhandled promise rejections
window.onunhandledrejection = () => true;

createRoot(document.getElementById("root")!).render(<App />);
