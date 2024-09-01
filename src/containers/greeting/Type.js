import React from "react";
import Typewriter from "typewriter-effect";
import "./Greeting.css";

function Type({ theme, string }) {
  return (
    <div
      style={{
        color: theme.color,
        font: "Google Sans Medium",
        fontSize: 20,
        fontWeight: "bold",
      }}
    >
      <Typewriter
        options={{
          strings: string,
          autoStart: true,
          loop: true,
          deleteSpeed: 10,
          delay: 10,
        }}
      />
    </div>
  );
}

export default Type;
