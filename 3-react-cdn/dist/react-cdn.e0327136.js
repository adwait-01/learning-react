// const heading = React.createElement("h1", {}, "Hello World from React!");
// 2nd argument is {}, which is the object, which is the place where we will give attribute to our tags.
// 3rd argument is "Hello World from React!", which is the children of "h1".
// 'props' contains object + children.
const heading = React.createElement("h1", {
    id: "heading",
    xyz: "abc"
}, "Hello World from React!"); // React creates a Javascript object called 'heading'
// For creating a single children, no [] is required, but creating multiple children requires us to pass the children in the form of an array/list i.e inside [].
// console.log(heading); React element is nothing but a normal Javascript object.
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading); // This render() takes the 'heading' react element, converts it into h1 tag and gives it to 'root' of HTML to inject into the browser DOM.
// React helps us to manipulate the DOM using Javascript (React at the end of the day is just Javascript).
/* How to create this type of nested structure in React:

<div id="parent">
  <div id="child">
    <h1>I am h1 tag</h1>
    <h2>I am an h2 tag</h2>
  </div>
</div>

*/ const parent = React.createElement("div", {
    id: "parent"
}, React.createElement("div", {
    id: "child"
}, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am an h2 tag")
]));
// console.log(parent); // to check what is 'parent'
// root.render(parent);
// So React element at the end of the day is a Javascript Object and this React element or object becomes HTML that the browser understands.
// So React.createElement() does not create an HTML element. While it is rendering onto the DOM, render() converts the object into HTML and puts it up into the DOM.
// If we want to create siblings inside an element (i.e. multiple children) instead of just one children, then we need to use an array as the 3rd argument inside createElement(). So we need to pass an array of children as the 3rd argument.
/* To create something like this:
<div id="parent">
  <div id="child">
    <h1>I am h1 tag</h1>
    <h2>I am an h2 tag</h2>
  </div>
  <div id="child2">
    <h1>I am h1 tag</h1>
    <h2>I am an h2 tag</h2>
  </div>
</div>
*/ const parent1 = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child"
    }, [
        React.createElement("h1", {}, "I am h1 tag"),
        React.createElement("h2", {}, "I am an h2 tag")
    ]),
    React.createElement("div", {
        id: "child2"
    }, [
        React.createElement("h1", {}, "I am h1 tag"),
        React.createElement("h2", {}, "I am an h2 tag")
    ])
]);
root.render(parent1);
// This way of writing makes React even clumsier than HTML.
// So we have something called JSX. But JSX is not the only way to write React. Core React is what we have written above actually.
// JSX will make our life easy when we have to create tags. So this is the last time we are using React.createElement().
const head = React.createElement("h1", {
    id: "head"
}, "Adwait was here too!");
const something = ReactDOM.createRoot(document.getElementById("something"));
something.render(head);

//# sourceMappingURL=react-cdn.e0327136.js.map
