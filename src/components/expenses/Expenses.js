import "./Expenses.css";
import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../ui/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";

function Expenses(props) {
  const [dropDownFilterValue, setDropDownFilterValue] = useState("2020");

  const dropDownFilterHandler = (selectedYear) => {
    setDropDownFilterValue(selectedYear);
  };

  const filteredItems = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === dropDownFilterValue;
  });


  return (
    <div>
      <Card>
        <ExpenseFilter
          onSelectMenu={dropDownFilterHandler}
          onChangeFilter={dropDownFilterValue}
        />
        <ExpenseList items={filteredItems} />
      </Card>
    </div>
  );
}

export default Expenses;
