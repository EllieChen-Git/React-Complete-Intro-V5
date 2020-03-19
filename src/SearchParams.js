import React, { useState } from "react";

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  // const [state, setState] = useState(initialState);
  // https://reactjs.org/docs/hooks-reference.html#usestate
  // location is the current state (of location)
  // setLocation is a function that update a piece of the state
  // "Seattle, WA" is the initial state
  // useState creates the React Hook

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
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
