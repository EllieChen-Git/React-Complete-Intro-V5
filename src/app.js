import React from "react";
import { render } from "react-dom";

const Pet = ({ name, animal, breed }) => {
  // Props are variables that a parent (App) passes to its children (the instances of Pet.)
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed)
  ]);
};

const App = () => {
  // Parent
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, { name: "Hunter", animal: "dog", breed: "husky" }), // Children
    React.createElement(Pet, { name: "Bruno", animal: "cat", breed: "mixed" }),
    React.createElement(Pet, {
      name: "Naggy",
      animal: "bird",
      breed: "cockatoo"
    })
  ]);
};

render(React.createElement(App), document.getElementById("root"));
