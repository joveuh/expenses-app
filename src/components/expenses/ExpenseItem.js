import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../ui/Card";
import "./ExpenseItem.css";


function ExpenseItem(props) {
  useState();
  const [title, setTitle] = useState(props.title);
  const [a, setA] = useState(false);
  const clickHandler = () => {
    if (a) {
      setTitle('new Title!');
      setA(false);
    }
    if (!a) {
      setTitle(props.title);
      setA(true);
    }
  }

  // const date = new Date(2022, 8, 18);
  // let expense = "Groceries";
  // const price = "$37.35";
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item">
      <h3 className="expense-item__description">{title}</h3>
      <div className="expense-item__price">${props.amount}</div>
      <button onClick={clickHandler}>Change title!</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
