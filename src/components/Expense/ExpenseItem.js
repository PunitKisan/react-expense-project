import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
// import { useState } from "react";

const ExpenseItem = (expenseData) => {
  // const expenseDate = new Date(2022, 2, 25);
  // const expenseTitle = "Car Insurance";
  // const expenseAmount = 280.8;

  // const [title, setTitle] = useState(expenseData.title);

  // const clickHandler = () => {
  //   setTitle('Updated');
  // }

  return (
    <Card className="expense-item">
      <ExpenseDate date={expenseData.date} />
      <div className="expense-item__description">
        <h2>{expenseData.title}</h2>
        <div className="expense-item__price">${expenseData.amount}</div>
      </div>
      {/* <button onClick={clickHandler}>Change Title</button> */}
    </Card>
  );
};

export default ExpenseItem;
