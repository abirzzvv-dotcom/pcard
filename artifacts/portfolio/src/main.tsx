import { createRoot } from "react-dom/client";
import { Component, ReactNode } from "react";
import App from "./App";
import "./index.css";

class ErrorBoundary extends Component<{ children: ReactNode }, { error: Error | null }> {
  state = { error: null };
  static getDerivedStateFromError(error: Error) { return { error }; }
  render() {
    if (this.state.error) {
      return (
        <div style={{ background: "#1e1f22", color: "#ed4245", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem", fontFamily: "monospace" }}>
          <div style={{ maxWidth: 600 }}>
            <div style={{ fontSize: 18, marginBottom: 12, color: "#fff" }}>Something crashed:</div>
            <pre style={{ whiteSpace: "pre-wrap", wordBreak: "break-all", fontSize: 13 }}>
              {(this.state.error as Error).message}
              {"\n\n"}
              {(this.state.error as Error).stack}
            </pre>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

createRoot(document.getElementById("root")!).render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);
