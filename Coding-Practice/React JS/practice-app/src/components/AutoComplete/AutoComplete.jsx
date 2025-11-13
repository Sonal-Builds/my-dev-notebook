import React, { useState } from "react";

const InlineAutoComplete = () => {
  const data = [
    "react",
    "redux",
    "nextjs",
    "nodejs",
    "typescript",
    "tailwind",
    "react-query",
  ];

  const [value, setValue] = useState("");
  const [suggestion, setSuggestion] = useState("");

  const handleChange = (e) => {
    const input = e.target.value.toLowerCase();
    setValue(input);

    if (!input) {
      setSuggestion("");
      return;
    }

    // Find the first match that starts with the input
    const match = data.find((item) => item.startsWith(input));
    if (match && match !== input) {
      setSuggestion(match);
    } else {
      setSuggestion("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Tab" && suggestion) {
      e.preventDefault();
      setValue(suggestion);
      setSuggestion("");
    }
  };

  return (
    <div className="relative w-72 mx-auto mt-10">
      {/* Overlay container */}
      <div className="relative">
        {/* Ghost suggestion behind actual text */}
        <input
          type="text"
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          className="border w-full px-3 py-2 rounded bg-transparent text-black relative z-10 caret-black"
          placeholder="Type something..."
          autoComplete="off"
          spellCheck="false"
          style={{
            position: "absolute",
            background: "transparent",
          }}
        />
        {/* Ghost text (visible inside same input visually) */}
        <input
          type="text"
          value={suggestion || ""}
          readOnly
          className="border w-full px-3 py-2 rounded text-gray-400"
          style={{
            color: "rgba(0,0,0,0.3)",
          }}
        />
      </div>
    </div>
  );
};

export default InlineAutoComplete;
