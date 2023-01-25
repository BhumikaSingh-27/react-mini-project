import "./styles.css";
import { useState } from "react";

// var username = prompt("enter your name");
var color = "red";
var bgColor = "pink";

export default function App() {
  var [addItem, setItem] = useState(0);
  function clickHandler(sym) {
    if (sym === "+") {
      addItem = addItem + 1;
      setItem(addItem);
    } else {
      if (addItem === 0) {
        setItem(0);
      } else {
        addItem = addItem - 1;
        setItem(addItem);
      }
    }
  }

  function changeHandler() {}

  return (
    <div className="App">
      <h1 style={{ backgroundColor: bgColor }}>
        Welcome to <span style={{ color: color }}> e-cafe </span>
      </h1>
      <h2>Start ordering and see the magic in taste!</h2>
      <h3>
        {" "}
        Search <input onChange={changeHandler} />
      </h3>

      <div>
        <img
          alt=""
          src="https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        />{" "}
        <br />
        <button onClick={() => clickHandler("+")}> + </button>
        <span style={{ fontSize: "1rem" }}>{addItem}</span>
        <button onClick={() => clickHandler("-")}> - </button>
      </div>

      <p>You have added: {addItem} items</p>
    </div>
  );
}
