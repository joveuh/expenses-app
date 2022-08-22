import './components/expenses/ExpenseItem.css';
import Expenses from './components/expenses/Expenses';
import NewExpense from './components/newexpenses/NewExpense';

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", 
      title: "New TV", 
      amount: 799.49, 
      date: new Date(2021, 2, 12) 
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  
  return (<div className='expenses'>
    <NewExpense></NewExpense>
    <Expenses items={expenses[0]}></Expenses>
    <Expenses items={expenses[1]}></Expenses>
    <Expenses items={expenses[2]}></Expenses>
    <Expenses items={expenses[3]}></Expenses>     
  </div>);
}

export default App;
