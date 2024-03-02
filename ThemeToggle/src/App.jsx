import { useState } from "react";
import "./App.css";
import { ThemeProvider } from "./contexts/theme";
import { useEffect } from "react";
import Card from "./components/Card";
import ThemeBtn from "./components/ThemeButton";

function App() {
  const [count, setCount] = useState(0);
  const [themeMode, setThemeMode] = useState("light");
  const lightMode = () => {
    setThemeMode("light");
  };
  const darkMode = () => {
    setThemeMode("dark");
  };
  const page = document.querySelector("html").classList;
  useEffect(() => {
    page.remove("light", "dark");
    page.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, lightMode, darkMode }}>
      <div className="flex flex-wrap items-center min-h-screen">
        <div className="w-full">
          <div className="flex justify-end w-full max-w-sm mx-auto mb-4">
            <ThemeBtn/>
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
