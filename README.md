
Written Material: https://btholt.github.io/complete-intro-to-react-v5/

GitHub: https://github.com/btholt/complete-intro-to-react-v5


You can use React with CDN in your html file with script tag:

```html
    <script src="https://unpkg.com/react@16.8.4/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@16.8.4/umd/react-dom.development.js"></script>
```

React.createElement arguments

```javascript
const App = () => {
    return React.createElement(
        "div", // 1st: HTML tags
        {},    // 2nd: { class: "this-is-a-class" }: attribute that you wanna give to the component
        React.createElement(  // 3rd: children that you wanna pass into the element
            "h1",
            {},
            "Adopt Me!"
        )
    )
}
```