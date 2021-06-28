import './Expenses.css'
import ExpenseItem from "./ExpenseItem";
const Expense = (props) => {
  return (
    <div className='expenses'>
      <ExpenseItem
        title={props.items[0].title}
        price={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItem
        title={props.items[1].title}
        price={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        price={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseItem
        title={props.items[3].title}
        price={props.items[3].amount}
        date={props.items[3].date}
      />
    </div>
  );
};
export default Expense;
