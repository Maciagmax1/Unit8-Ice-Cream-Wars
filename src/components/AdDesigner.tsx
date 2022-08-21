import { useState } from "react";
import Ad from "./Ad";
import "./AdDesigner.css";

const AdDesigner = () => {
  const [flavor, setFlavor] = useState("Strawberry");
  const [darkMode, setDarkMode] = useState(true);
  const [fontSize, setFontSize] = useState(40);

  const adStyles: any = {
    fontSize: `${fontSize}px`,
  };

  const increaseFontSize = (): void => {
    if (fontSize <= 95) {
      setFontSize((prev) => prev + 5);
    }
  };

  const decreaseFontSize = (): void => {
    if (fontSize >= 5) {
      setFontSize((prev) => prev - 5);
    }
  };

  return (
    <section className="AdDesigner">
      <h2>Ad Designer</h2>
      <Ad flavor={flavor} fontSize={fontSize} darkMode={darkMode} />
      <h3>What to Support</h3>
      <div>
        <button
          onClick={() => setFlavor("Chocolate")}
          disabled={flavor === "Chocolate"}
        >
          Chocolate
        </button>
        <button
          onClick={() => setFlavor("Vanilla")}
          disabled={flavor === "Vanilla"}
        >
          Vanilla
        </button>
        <button
          onClick={() => setFlavor("Strawberry")}
          disabled={flavor === "Strawberry"}
        >
          Strawberry
        </button>
      </div>
      <h3>Color Theme</h3>
      <div>
        <button
          disabled={darkMode === false}
          onClick={() => setDarkMode(false)}
        >
          Light
        </button>
        <button onClick={() => setDarkMode(true)} disabled={darkMode}>
          Dark
        </button>
      </div>
      <h3>Font Size</h3>
      <div>
        <button onClick={increaseFontSize} disabled={fontSize === 100}>
          Up
        </button>
        <p>{fontSize}</p>
        <button onClick={decreaseFontSize} disabled={fontSize === 5}>
          Down
        </button>
      </div>
    </section>
  );
};

export default AdDesigner;
