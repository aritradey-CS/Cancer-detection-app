import React, { useState } from "react";
import ToDoList from "./ToDoList.jsx";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import "./App.css";

const App = () => {
  const [inputList, setInputList] = useState("Buy apple");
  const [Items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };

  const deleteItems = (id) => {
    console.log("Deleted");

    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div className="main_div">
      <div className="center_div">
        <br />
        <h1>ToDo List</h1>
        <br />
        <input
          type="text"
          placeholder="Add an Item"
          value={inputList}
          onChange={itemEvent}
        />
        <Button className="newBtn" onClick={listOfItems}>
          <AddIcon />
        </Button>
        <br />
        <ol>
          {Items.map((itemval, index) => {
            return (
              <ToDoList
                key={index}
                id={index}
                text={itemval}
                onSelect={deleteItems} // Ensure deleteItems is passed as onSelect prop
              />
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default App;
