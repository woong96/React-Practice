import React, { useState } from 'react';
import './Expenses.css';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
  const [filteredYear, setFilterYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expensesContent = <p>No expenses found.</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {expensesContent};
      </Card>
    </div>
  );
};

export default Expenses;

// {
//   /* <ExpenseItem
//   title={props.items[0].title}
//   amount={props.items[0].amount}
//   date={props.items[0].date}
// />
// <ExpenseItem
//   title={props.items[1].title}
//   amount={props.items[1].amount}
//   date={props.items[1].date}
// />
// <ExpenseItem
//   title={props.items[2].title}
//   amount={props.items[2].amount}
//   date={props.items[2].date}
// />
// <ExpenseItem
//   title={props.items[3].title}
//   amount={props.items[3].amount}
//   date={props.items[3].date}
// /> */
// }
