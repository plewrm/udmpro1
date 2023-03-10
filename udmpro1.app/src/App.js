import ExpenseItem from "./Components/ExpenseItem";
function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Cotton Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 4500.33,
      date: new Date(2021, 5, 12),
    },
  ];
  return (
    <div>
      <h1>Let's Get Started</h1>
      <ExpenseItem 
      title={expenses[0].title}
      amount={expenses[0].amount}
      datetimef={expenses[0].date}
      />
      <ExpenseItem
      title={expenses[1].title}
      amount={expenses[1].amount}
      datetimef={expenses[1].date}
      />
      <ExpenseItem
      title={expenses[2].title}
      amount={expenses[2].amount}
      datetimef={expenses[2].date}
      />
      <ExpenseItem
      title={expenses[3].title}
      amount={expenses[3].amount}
      datetimef={expenses[3].date}
      />
    </div>
  );
}

export default App;
