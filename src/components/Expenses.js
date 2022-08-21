import "./Expenses.css";
import ItemExpense from "./ItemExpense";

function Expenses(props) {
  return (
    <div>
      <ItemExpense
        className="expenses"
        title={props.items.title}
        amount={props.items.amount}
        date={props.items.date}
      ></ItemExpense>
    </div>
  );
}

export default Expenses;
