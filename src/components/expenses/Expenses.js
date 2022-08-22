import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../ui/Card";

function Expenses(props) {
  return (
    <Card>
      <ExpenseItem
        className="expenses"
        title={props.items.title}
        amount={props.items.amount}
        date={props.items.date}
      ></ExpenseItem>
    </Card>
  );
}

export default Expenses;
