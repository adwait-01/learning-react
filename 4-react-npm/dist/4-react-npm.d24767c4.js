const heading = React.createElement("h1", {
    id: "heading",
    xyz: "abc"
}, "Hello World from React!");
const root = ReactDOM.createRoot(document.getElementById("root"));
const parent = React.createElement("div", {
    id: "parent"
}, React.createElement("div", {
    id: "child"
}, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am an h2 tag")
]));
const parent1 = React.createElement("div", {
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
const head = React.createElement("h1", {
    id: "head"
}, "Adwait was here too!");
const something = ReactDOM.createRoot(document.getElementById("something"));
something.render(head);

//# sourceMappingURL=4-react-npm.d24767c4.js.map
