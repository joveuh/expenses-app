import React from "react";
import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";



const ExpenseList = (props) => {

  if (props.items.length === 0) {
    
    return <p className="expenses-no-expense expenses-list__fallback"> No expenses found. </p>
  }
  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        ></ExpenseItem>
      ))}
    </ul>
  );
};

export default ExpenseList;
