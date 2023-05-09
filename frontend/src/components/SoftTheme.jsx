import React, { useState } from "react";
import "./softTheme.scss";

export default function SoftThemeButton() {
  const [isSoftTheme, setIsSoftTheme] = useState(false);

  const handleButtonClick = () => {
    setIsSoftTheme(!isSoftTheme);

    if (!isSoftTheme) {
      document.body.classList.add("softTheme");
    } else {
      document.body.classList.remove("softTheme");
    }
  };

  return (
    <div className="check">
      <input id="check" type="checkbox" />
      <label htmlFor="check" onClick={handleButtonClick}>
        {" "}
      </label>
    </div>
  );
}
