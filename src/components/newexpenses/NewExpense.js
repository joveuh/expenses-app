import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [editingForm, setEditingForm] = useState(false);

  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const outputdata = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.newExpenseAdded(outputdata);
    setEditingForm(false);
  };

  const startEditingHandler = () => {
    setEditingForm(true);
  };

  const stopEditingHandler = () => {
    setEditingForm(false);
  };

  return (
    <div className="new-expense">
      {!editingForm && (
        <button onClick={startEditingHandler}>
          {" "}
          Click to Create a New Expense.
        </button>
      )}
      {editingForm && (
        <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} 
        onCancel={stopEditingHandler}/>
      )}
    </div>
  );
};

export default NewExpense;
