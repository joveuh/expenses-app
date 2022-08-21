import './ItemExpense.css';
import ExpenseDate from './ExpenseDate';

function ItemExpense(props) {
  // const date = new Date(2022, 8, 18);
  // let expense = "Groceries";
  // const price = "$37.35";
  return (
    <div className='expense-item'>
      <div>
        <ExpenseDate date={props.date}></ExpenseDate>
      </div>
      <h3 className='expense-item__description'>{props.title}</h3>
      <div className='expense-item__price'>${props.amount}</div>
    </div>
  );
}

export default ItemExpense;
