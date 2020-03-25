# React-Refresher & React-Hooks

- React pratice following Brian Holt's course 'COMPLETE INTRO TO REACT V5'

---

- Course at Frontend Master: https://frontendmasters.com/courses/complete-react-v5/
  (If you are a student, you can use [GitHub student pack]to get a free 6-month subscription to Frontend master. The GitHub student pack provides lots of amazing resources! Feel free to check it out [here](https://education.github.com/pack))

- Written Material: https://btholt.github.io/complete-intro-to-react-v5/

- GitHub: https://github.com/btholt/complete-intro-to-react-v5

---

## Dependancies

New npm packages I learned to use in this repo:

- Parcel: https://www.npmjs.com/package/parcel

- Reach Router: https://www.npmjs.com/package/@reach/router

Docs: https://reach.tech/router

---

## Setup

##### You can use React with CDN in your html file with script tag:

(Of course you can also install React & React-Dom as npm packages)

```html
<script src="https://unpkg.com/react@16.8.4/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@16.8.4/umd/react-dom.development.js"></script>
```

##### How to set up Parcel

1. npm install -D parcel-bundler

2. write script in package.json '"dev": "parcel src/index.html"'

3. Parcel will install npm packages for you.

For example, type in the following line in your .js file. If you check your terminal, you will see that Parcel is installing this packege for you.

```javascript
import { Router } from "@reach/router";
```

##### How to set up Eslint (.eslintrc.json)

```javascript
{
  "extends": [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier",
    "prettier/react"
  ],
  "rules": {
    "react/prop-types": 0
  },
  "plugins": ["react", "import", "jsx-a11y"],
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "es6": true,
    "browser": true,
    "node": true
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}
```

##### How to enable experimental syntax 'classProperties' (Configure Babel for Parcel)

1. Install npm packages

```
npm install -D babel-eslint @babel/core @babel/preset-env @babel/plugin-proposal-class-properties @babel/preset-react
```

2. Configure .babelrc

```javascript
{
  "presets": ["@babel/preset-react", "@babel/preset-env"],
  "plugins": ["@babel/plugin-proposal-class-properties"]
}
```

3. Configure .eslintrc.json

4) After that you can use 'classProperties' syntax in src\Details.js

```javascript
class Details extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       loading: true
  //     };
  //   }

  state = { loading: true };
```

---

## Props

##### React.createElement arguments

```javascript
const App = () => {
  return React.createElement(
    "div", // 1st - HTML tags
    {}, // 2nd - { class: "this-is-a-class" }: attribute that you wanna give to the component
    React.createElement(
      // 3rd - children that you wanna pass into the element
      "h1",
      {},
      "Adopt Me!"
    )
  );
};
```

##### Passing props

```javascript
const Pet = (props) => {  // Props are variables that a parent (App) passes to its children (the instances of Pet.)
    return React.createElement(
        "div", {}, [
        React.createElement("h1", {}, props.name),
        React.createElement("h2", {}, props.animal),
        React.createElement("h2", {}, props.breed)
    ]
    )
}

const App = () => {  // Parent
//...
            React.createElement(Pet, { name: "Hunter", animal: "dog", breed: "husky" }), // Children
            React.createElement(Pet, { name: "Bruno", animal: "cat", breed: "mixed" }),
            React.createElement(Pet, { name: "Naggy", animal: "bird", breed: "cockatoo" }),
        ]
    )
}
```

##### Destructuring props

```javascript
const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed)
  ]);
};
```

##### Passing props in JSX (with destructuring)

```javascript
// app.js
return (
  <div>
    <h1>Adopt Me!</h1>
    <Pet name="Hunter" animal="dog" breed="husky" />
    <Pet name="Burno" animal="cat" breed="mixed" />
    <Pet name="Naggy" animal="bird" breed="cockatoo" />
  </div>
);

// pet.js
export default function Pet({ name, animal, breed }) {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{animal}</h2>
      <h2>{breed}</h2>
    </div>
  );
}
```

##### A way to see props that were passed into your router in DOM

src\Details.js

```javascript
const Details = props => {
  return (
    <pre>
      <code>{JSON.stringify(props, null, 4)}</code>
    </pre>
  );
};
```

If you enter 'http://localhost:1234/details/2' in browser, you will see:

```
{
    "path": "/details/:id",
    "id": "2",
    "uri": "/details/2",
    "location": {
        "pathname": "/details/2",
        "search": "",
        "hash": "",
        "href": "http://localhost:1234/details/2",
        "origin": "http://localhost:1234",
        "protocol": "http:",
        "host": "localhost:1234",
        "hostname": "localhost",
        "port": "1234",
        "state": null,
        "key": "initial"
    }
}
```

---

## React Hooks

- Can only be used with functional components (i.e. You cannot use it with class components)

- **useState**: https://reactjs.org/docs/hooks-reference.html#usestate
  const [state, setState] = useState(initialState);
- !!!Hooks rely on this strict ordering!!!: Don't use hooks inside any loops, if/else statement

```javascript
import React, { useState } from "react";

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  // location is the current state (of location)
  // setLocation is a function that update a piece of the state
  // "Seattle, WA" is the initial state
  // useState creates the React Hook

  return (
    // ...
    <input
      id="location"
      value={location}
      placeholder="Please enter location"
      onChange={event => setLocation(event.target.value)}
    />
    // ...
  );
};
```

- **useEffect**: https://reactjs.org/docs/hooks-effect.html
  If you’re familiar with React class lifecycle methods, you can think of useEffect Hook as componentDidMount, componentDidUpdate, and componentWillUnmount combined.

src\SearchParams.js

```javascript

import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown";

const SearchParams = () => {
  // !!!Order of 'useState' is crutical!!!

  // [[[[Initial render]]]]
  const [location, setLocation] = useState("Seattle, WA");
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  // const [animal, setAnimal] = useState("dog");
  // "Animal"(label), "dog"(defaultState), ANIMALS(options)
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);
  // const [breed, setBreed] = useState("");

  // [[[[After the intial render, we call the side effects here]]]]
  useEffect(() => {
    setBreeds([]); // When we change animal, the breeds arr will be set as an empty arr
    setBreed(""); // and the breed we selected will be changed to empty string

    pet.breeds(animal).then(({ breeds: apiBreeds }) => {
      const breedStrings = apiBreeds.map(({ name }) => name); // Destructure name from the breeds object
      setBreeds(breedStrings);
    }, console.error);
  }, [animal, setBreed, setBreeds]); // dependencies, if any of these changed, then re-render

//...
```

---

## One-way Data Flow

src\app.js

```javascript
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams />
    </div>
  );
};
```

src\SearchParams.js

```javascript
import Results from "./Results";

<Results pets={pets} />;
```

src\Results.js

```javascript
import Pet from "./Pet";

const Results = ({ pets }) => {
  return (
    <div className="search">
      {pets.length === 0 ? (
        <h1>No Pets Found</h1>
      ) : (
        pets.map(pet => (
          <Pet
            animal={pet.type}
            key={pet.id}
            name={pet.name}
            breed={pet.breeds.primary}
            media={pet.photos}
            location={`${pet.contact.address.city}, ${pet.contact.address.state}`}
            id={pet.id}
          />
        ))
      )}
    </div>
  );
};
```

src\Pet.js

```javascript
export default function Pet({ name, animal, breed, location }) {
  return (
    <div>
      <h1>{name}</h1>
      <h2>Animal: {animal}</h2>
      <h2>Breed: {breed}</h2>
      <h2>Location: {location}</h2>
    </div>
  );
}
```

---

## Reach Router

Difference bwtween 'React-Router' and 'Reach-Router':

1. 'React-Router' will render everything that matches, while 'Reach-Router' will only render the thing that 'matches the most'.

2. In 'Reach-Router', order doesn't really matter, as 'Reach-Router' is rendered by a 'scoring system.

3. In 'Reach-Router', you can have multiple routes on the same page.

src\app.js

```javascript
<Router>
  <SearchParams path="/" />
  <AnotherRoute path="/details/1" />
  <Details path="/details/id" />
</Router>

// 'React-Router' will render both <AnotherRoute> & <Details>
// while 'Reach-Router' will only render <AnotherRoute> as it's more specific
```

---

## Class Components

- componentDidMount is a function that's called after the first rendering is completed. This pretty similar to a useEffect call that only calls the first time. This is typically where you want to do data fetching.

```javascript
```

```javascript
```

```javascript
```

```javascript
```

```javascript
```

```javascript
```

```javascript
```

```javascript
```
