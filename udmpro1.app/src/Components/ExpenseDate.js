import React from "react";

const ExpenseDate = (props) => {
  //here not access of date keyword so here we use datetime keyword.
  const month = props.datetime.toLocaleString(`en-US`, { month: "long" });
  const day = props.datetime.toLocaleString(`en-US`, { day: "2-digit" });
  const year = props.datetime.getFullYear();

  return (
    <div>
      <div>{month}</div>
      <div>{year}</div>
      <div>{day}</div>
    </div>
  );
};

export default ExpenseDate;
