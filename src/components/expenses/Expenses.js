import "./Expenses.css";
import React, { useState } from "react";
import Card from "../ui/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";

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
        <ExpensesChart expenses={filteredItems} />
        <ExpenseList items={filteredItems} />
      </Card>
    </div>
  );
}

export default Expenses;
