import React from "react";
export default function Pet({ name, animal, breed, location }) {
  return (
    <div>
      <h1>{name}</h1>
      <h2>Animal: {animal}</h2>
      <h2>Breed: {breed}</h2>
      <h2>Location: {location}</h2>
      <hr />
    </div>
  );
}
