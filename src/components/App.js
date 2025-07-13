import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import user from "../data/user"; 

function App() {
  const { name, color, city, bio, links } = user;

  return (
    <div>
      <NavBar />
      <Home name={name} city={city} color={color} />
      <About bio={bio} github={links.github} linkedin={links.linkedin} />
    </div>
  );
}

export default App;

