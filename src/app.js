import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  // return React.createElement("div", {}, [
  //   React.createElement("h1", {}, "Adopt Me!"),
  //   React.createElement(Pet, { name: "Hunter", animal: "dog", breed: "husky" }),
  //   React.createElement(Pet, { name: "Bruno", animal: "cat", breed: "mixed" }),
  //   React.createElement(Pet, {
  //     name: "Naggy",
  //     animal: "bird",
  //     breed: "cockatoo"
  //   })
  // ]);

  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Hunter" animal="dog" breed="husky" />
      <Pet name="Burno" animal="cat" breed="mixed" />
      <Pet name="Naggy" animal="bird" breed="cockatoo" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
