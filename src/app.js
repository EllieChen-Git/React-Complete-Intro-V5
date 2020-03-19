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
    return React.createElement(
        "div",
        {},
        [
            React.createElement(
                "h1",
                {},
                "Adopt Me!"
            ),
            React.createElement(Pet, { name: "Hunter", animal: "dog", breed: "husky" }), // Children
            React.createElement(Pet, { name: "Bruno", animal: "cat", breed: "mixed" }),
            React.createElement(Pet, { name: "Naggy", animal: "bird", breed: "cockatoo" }),
        ]

    )
}

ReactDOM.render(
    React.createElement(App),
    document.getElementById("root")
)