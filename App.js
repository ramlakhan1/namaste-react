import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Body from "./Body";

// React.createElement => ReactElement-JS Object => HtmlElelment(root)
// React Element
// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Namste react 🐱‍🏍"
// );
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// JSX : is  a javascript syntax to make creating elemnt in react which make easy for devloper
/**
 * Jsx is combination of html and js
 * it is html like syntax
 * XML like
 * its is not html inside javascript
 * @Babel is doing this conversion which react understand
 * transpile
 * js compiler
 */
// JSX =>Babel transpile it to React.createElement => ReactElement-JS Object => HtmlElelment(root)
// const jsxHeading = (
//   <h1 id="heading" className="roots" tabIndex="1">
//     Namaste React 🐱‍🏍🌹
//   </h1>
// );
// React Component
// Class based Component - OLD
// Functional Component  - NEW
/**
 * Functional Based Components
 * its normal javascript @function
 */
// const Header = () => {
//   return (
//     <div id="header" className="header">Header</div>
//   )
// }
// const HeadingComponent = () => {
//   // which return some peace of JSX or js funtion which return reactElement
//   return <h1 className="heading">Namste React Functional Component🐱‍🏍</h1>;
// };
// const HeadingComponent2 = () => (
//   <div id="container">
//     {/* this is also known as Component composition */}
//     {heading+}
//     <Header />
//     <HeadingComponent/>
//   <h1 className="heading">Namste React Functional Component2🐱‍🏍</h1>
//   </div>
// );
// const RenderImg = () => {
//    return <img className="app-logo" src="https://cdn-icons-png.flaticon.com/512/1046/1046784.png" alt="Logo" />
// };

const AppLayout = () => {
  return (
    <div>
     <Header/>
     <Body/>
     </div>
  )
};

root.render(<AppLayout />);
