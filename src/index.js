import "./styles.css";
var React = require("react");
var ReactDOM = require("react-dom");

//ReactDOM.render(
//<div className="A1">
//<h1>Welcome to react</h1>
//<p>This is para</p>
//</div>,
//document.getElementById("root")
//);

//var myElement = (
//  <div>
//   <h1>Hello World!!</h1>
// <p>....</p>
//</div>
//);

//const x = -1;
//let text = " ";
//if(x<0)
//{
//text="Good mrng";
//}else{
//text="good night";
//}
//const myElement=<h1>{text}</h1>

const myElement = <h1 className="Block1">Hello</h1>;
const myRoot = ReactDOM.createRoot(document.getElementById("root"));
myRoot.render(myElement);
