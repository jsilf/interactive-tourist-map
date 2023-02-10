import { useState } from "react";
import { Navbar } from "./Nav/Navbar";

export const Header = () => {
  const [bgChange, setBgChange] = useState(false);

  const changeHeaderColor = () => {
    if (window.scrollY >= 80) {
      setBgChange(true);
    } else {
      setBgChange(false);
    }
  };
  window.addEventListener("scroll", changeHeaderColor);

  return (
    <header className={!bgChange ? "header-transparent" : "header-background"}>
      <Navbar />
      <h1>Gullholmen on the Go</h1>
    </header>
  );
};
