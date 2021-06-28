import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
const ExpenseItem = (props) => {
  
  const title = props.title;
  const price = props.price;

  return (
    <div className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
      </div>
      <div className="expense-item__price"> $ {price}</div>
    </div>
  );
};
export default ExpenseItem;
