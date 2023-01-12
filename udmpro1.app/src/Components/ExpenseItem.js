import React from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
const ExpenseItem = (props) => {
  //here not access of date keyword so here we use datetime keyword.
  // const  month=props.datetime.toLocaleString(`en-US`,{month: 'long'});
  // const  day=props.datetime.toLocaleString(`en-US`,{day: '2-digit'});
  // const  year=props.datetime.getFullYear();
    

  return (
    <div className="expense-item">   
    <ExpenseDate/>
    {/* <div>
      <div>{month}</div>
      <div>{year}</div>
      <div>{day}</div>
    </div> */}
      {/* <div>{props.dtaetime.toISOString()}</div> */}
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
