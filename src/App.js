import "./styles.css";
import { useState } from "react";

// var username = prompt("enter your name");
var color = "red";
var bgColor = "pink";

var foodItemList = {
  pizza: " 1. large 2.medium 3.small",
  coffee: "1. black coffee 2. strong coffee"
};
const { pizza, coffee } = foodItemList;
export default function App() {
  var [addItem, setItem] = useState(0);
  var [displaySearch, setSearch] = useState("");
  var [foodItem, setFoodItem] = useState("");
  var [colorp, setColor] = useState("transparent");

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

  function searchchangeHandler(event) {
    setSearch(event.target.value);
  }

  function changeHandler(event) {
    var foodItemInput = event.target.value;
    var item = foodItemList[foodItemInput];
    // console.log(foodItemInput);
    setFoodItem(item);
    // console.log(foodItemList[foodItemInput]);
  }
  function changeColor() {
    if (colorp === "transparent" ? setColor("red") : setColor("transparent"));
  }
  return (
    <div className="App">
      <h1 style={{ backgroundColor: bgColor }}>
        Welcome to <span style={{ color: color }}> e-cafe </span>
      </h1>
      <h2>Start ordering and see the magic in taste!</h2>
      <h3>
        {" "}
        Search <input onChange={searchchangeHandler} />
        {/* <div> {displaySearch}</div> */}
      </h3>
      <h3>You searched for: {displaySearch}</h3>
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

      <div>
        <p> Enter food Item: pizza or coffee </p>
        <input onChange={changeHandler} />

        <p>
          Suggestions: <br /> {foodItem}
        </p>

        <p style={{ backgroundColor: colorp }}>I'm a powerful girl </p>
        <button onClick={changeColor}> toggle</button>
      </div>
    </div>
  );
}
