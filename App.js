import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => Object => When we render this element into our DOM, it becomes an HTML element.

// Creating React element using React:
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Namaste React 🚀"
);
// console.log(heading);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// JSX - A JAVASCRIPT SYNTAX which makes it easier to create React elements.

// JSX is "NOT a part of React". We can write ONLY React to build any big application without JSX. But JSX makes our developers' lives easy. That is why we use JSX.
// JSX is a convention where we merge HTML and JS together.
// Myth - JSX is HTML inside JavaScript. => No, JSX is an HTML-like syntax or more closer to an XML-like syntax. JSX IS DIFFERENT, HTML IS DIFFERENT, REACT IS DIFFERENT.

// Creating React element using JSX syntax:
const jsxHeading = <h1 id="heading">Namaste React using JSX 🚀</h1>;
// This 'jsxHeading' is a React element.
// console.log(jsxHeading); // so 'jsxHeading' & 'heading' are exactly same.
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);

// Only Pure Javascript is understood by JS Engine. "JSX is not pure JS". It is not understood by JS engine. JS engine understands ECMAScript or ES6 (and all other versions of ECMAScript) which is pure Javascript. So obviously browsers don't understand JSX (will give a syntax error if run inside browser console).
// So 'parcel' is doing the job behind the scenes. Even before this whole code goes into the browser (JS engine), it is "transpiled" (converted into code that browsers can understand) and then JS engine receives the code that browsers can understand.

// Is PARCEL doing the transpiling itself? => NO, it gives that responsibility to a package called 'babel'. 'parcel' is like a manager. When we installed 'parcel', it installed 'babel' and a whole lot other packages that it needs along with itself.
// As soon as we write our code and save it, 'babel' converts the code to a code that React will understand.
// babel is a javascript compiler or a transpiler. It takes our JSX and converts it.

// React.createElement => React Element - JS object => HTML Element (rendered)
// JSX => React.createElement => React Element - JS object => HTML Element (rendered)
// This extra part, i.e. conversion of JSX to React.createElement is done by 'babel'.
