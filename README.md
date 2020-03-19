# React Refresher - COMPLETE INTRO TO REACT V5 by Brian Holt

---

- Written Material: https://btholt.github.io/complete-intro-to-react-v5/

- GitHub: https://github.com/btholt/complete-intro-to-react-v5

---

## Setup

##### You can use React with CDN in your html file with script tag:

```html
<script src="https://unpkg.com/react@16.8.4/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@16.8.4/umd/react-dom.development.js"></script>
```

##### How to set up Parcel

1. npm install -D parcel-bundler

2. write script in package.json '"dev": "parcel src/index.html"'

##### .eslintrc.json

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

---

## React Hooks

- **useState**: https://reactjs.org/docs/hooks-reference.html#usestate
  const [state, setState] = useState(initialState);

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

```javascript
```

```javascript
```

```javascript
```

```javascript
```
