import React, { useState } from "react";
import { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown";

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  // const [animal, setAnimal] = useState("dog");
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  // "Animal"(label), "dog"(defaultState), ANIMALS(options)

  // const [breed, setBreed] = useState("");
  const [breed, BreedDropdown] = useDropdown("Breed", "", breeds);
  const [breeds, setBreeds] = useState([]);

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
        {/* <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={event => setAnimal(event.target.value)}
            onBlur={event => setAnimal(event.target.value)}
          >
            <option>All</option>
            {ANIMALS.map(animal => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            id="breed"
            value={breed}
            onChange={event => setBreed(event.target.value)}
            onBlur={event => setBreed(event.target.value)}
            disabled={breeds.length === 0}
          >
            <option>All</option>
            {breeds.map(breed => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label> */}

        <AnimalDropdown />
        <BreedDropdown />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
