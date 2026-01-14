import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Suppress external third-party errors to keep console clean
const originalError = console.error;
console.error = (...args: any[]) => {
  // Suppress HTTP protocol errors and external script errors
  const errorStr = String(args[0]);
  if (
    errorStr.includes('ERR_HTTP2_PROTOCOL_ERROR') ||
    errorStr.includes('net::ERR_') ||
    errorStr.includes('Failed to fetch') ||
    errorStr.includes('CORS') ||
    args[0]?.message?.includes('ERR_HTTP2_PROTOCOL_ERROR')
  ) {
    return; // Silently ignore external errors
  }
  originalError.apply(console, args);
};

createRoot(document.getElementById("root")!).render(<App />);
