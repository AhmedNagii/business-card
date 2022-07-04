import React from "react";
import About from "./components/about";
import Footer from "./components/footer";
import Info from "./components/info";
import Interests from "./components/interests";

export default function App() {
  return (
    <div className="conatiner">
      <Info />
      <About />
      <Interests />
      <Footer />
    </div>
  );
}
