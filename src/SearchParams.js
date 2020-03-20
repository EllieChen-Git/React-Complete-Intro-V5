import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown";

const SearchParams = () => {
  // !!!Order of 'useState' is crutical!!!
  // Initial render
  const [location, setLocation] = useState("Seattle, WA");
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  // const [animal, setAnimal] = useState("dog");
  // "Animal"(label), "dog"(defaultState), ANIMALS(options)
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);
  // const [breed, setBreed] = useState("");

  // After the intial render, we call the side effects here
  useEffect(() => {
    setBreeds([]); // When we change animal, the breeds arr will be set as an empty arr
    setBreed(""); // and the breed we selected will be changed to empty string

    pet.breeds(animal).then(({ breeds: apiBreeds }) => {
      const breedStrings = apiBreeds.map(({ name }) => name); // Destructure name from the breeds object
      setBreeds(breedStrings);
    }, console.error);
  }, [animal, setBreed, setBreeds]); // dependencies, if any of these changed, then re-render

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Please enter location"
            onChange={event => setLocation(event.target.value)}
          />
        </label>

        <AnimalDropdown />
        <BreedDropdown />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
