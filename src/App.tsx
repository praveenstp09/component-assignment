import React, { useState, useEffect } from "react";

import "./colorSystem/color.css";
import MultiStepForm from "./Components/MultiStepForm/MultiStepForm";
import AdvancedFileUpload from "./Components/AdvancedFileDrop/AdvancedFileDrop";

const App: React.FC = () => {
  const [activeComponent, setActiveComponent] = useState<"form" | "upload">(
    "form"
  );
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = (): void => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div
      className="h-screen pt-10 transition-colors"
      style={{
        backgroundColor: "var(--surface-background)",
        color: "var(--text-primary)",
      }}
    >
      <button
        onClick={toggleTheme}
        style={{
          position: "fixed",
          top: "1rem",
          right: "1rem",
          backgroundColor: "var(--color-primary)",
          color: "white",
          border: "none",
          borderRadius: "50%",
          width: "40px",
          height: "40px",
          cursor: "pointer",
          fontWeight: "bold",
          fontSize: "16px",
        }}
        title="Toggle Theme"
      >
        {theme === "light" ? "☀️" : "🌙"}
      </button>

      <div className="flex justify-center space-x-4 mb-7">
        <button
          style={{
            padding: "0.5rem 1rem",
            borderRadius: "6px",
            backgroundColor:
              activeComponent === "form"
                ? "var(--color-primary)"
                : "var(--surface-border)",
            color: activeComponent === "form" ? "white" : "var(--text-primary)",
            border: "none",
            transition: "all 0.3s",
          }}
          onClick={() => setActiveComponent("form")}
        >
          Multi-Step Form
        </button>
        <button
          style={{
            padding: "0.5rem 1rem",
            borderRadius: "6px",
            backgroundColor:
              activeComponent === "upload"
                ? "var(--color-primary)"
                : "var(--surface-border)",
            color:
              activeComponent === "upload" ? "white" : "var(--text-primary)",
            border: "none",
            transition: "all 0.3s",
          }}
          onClick={() => setActiveComponent("upload")}
        >
          Advanced File Upload
        </button>
      </div>

      {activeComponent === "form" && <MultiStepForm />}
      {activeComponent === "upload" && <AdvancedFileUpload />}
    </div>
  );
};

export default App;
