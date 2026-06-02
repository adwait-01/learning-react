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
const jsxHeading = (
  <h1 className="head" tabIndex="1">
    Namaste React using JSX 🚀
  </h1>
);
const anotherJsxHeading = <h2 className="idk">I am Adwait</h2>;
// If we write multiple lines in JSX, we wrap it inside () to make babel understand which is the start and end of JSX. Otherwise in case of single line JSX, it is not required to wrap the line inside ().
// This 'jsxHeading' is a React element.
// console.log(jsxHeading); // so 'jsxHeading' & 'heading' are exactly same.
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);

// Only Pure Javascript is understood by JS Engine. "JSX is not pure JS". It is not understood by JS engine. JS engine understands ECMAScript or ES6 (and all other versions of ECMAScript) which is pure Javascript. So obviously browsers don't understand JSX (will give a syntax error if run inside browser console).
// So 'parcel' is doing the job behind the scenes. Even before this whole code goes into the browser (JS engine), it is "transpiled" (converted into code that browsers can understand) and then JS engine receives the code that browsers can understand.

// Is PARCEL doing the transpiling itself? => NO, it gives that responsibility to a package called 'babel'. 'parcel' is like a manager. When we installed 'parcel', it installed 'babel' and a whole lot other packages that it needs along with itself.
// As soon as we write our code and save it, 'babel' converts the code to a code that React will understand.
// babel is a javascript compiler or a transpiler. It takes our JSX and converts it.

// React.createElement => React Element - JS object => HTML Element (rendered)
// JSX => React.createElement => React Element - JS object => HTML Element (rendered)
// This extra part, i.e. conversion of JSX to React.createElement is done by 'babel'.

// React component - everything is a component in React. THE NAME OF THE COMPONENT SHOULD ALWAYS BEGIN WITH A CAPITAL LETTER.
// There are two types of components:
// 1. Class based component - old way of writing code (uses javascript classes)
// 2. Functional component - new way (uses javascript functions)

// React functional component - just a normal javascript function which returns some JSX (i.e. react element eventually). So a function which is returning a React element is a functional component.

// with 'return' keyword:
const Heading = () => {
  return <h1 className="heading">Namaste React Functional Component</h1>;
};

// without 'return' keyword convention:
const Heading2 = () => <h1 className="heading">I am Adwait</h1>;
// If writing in the form of multiple lines, wrap inside (). :
const Heading3 = () => <h1 className="heading">I am Adwait too</h1>;

// Heading, Heading2, Heading3 - all serve the same purpose but are just different ways of writing the same code.

// Nested component:
const HeadingComponent = () => (
  <div id="container">
    <h1 className="heading">Hi!!</h1>
  </div>
);

// Component composition: component inside component.
const Head = () => (
  <div id="container">
    <Heading2 />
    <h1>Another thing</h1>
  </div>
);

// root.render(<Head />);

/**
  We can write the above thing as a normal function too instead of an arrow function. But in that case we must use 'return' keyword:
  const Head = function () {
    return (
      <div id="container">
        <Heading2 />
        <h1>Another thing</h1>
      </div>
    );
  };
*/

// But using arrow functions is convention.

// We can write any javascript expression or code inside {} i.e. curly braces inside our JSX. So JSX is a combination of javascript and HTML.

// Writing javascript inside JSX is a very powerful thing.

const num = 1000;

const Headd = () => (
  <div id="container">
    {num}
    <h2>{num + 100}</h2>
    <h2>{console.log(num)}</h2>
    <Heading2 />
    <h1>Another thing</h1>
  </div>
);

// We cannot render a functional component the same way as a react element. We do that by doing:
root.render(<Headd />);

/**
 * const fn = () => {
 * return true;
 * };
 * is same as const fn = () => true;
 */
