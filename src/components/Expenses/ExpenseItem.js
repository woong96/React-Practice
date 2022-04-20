import React, { useState } from 'react'; // 리액트의 useState특정 라이브러리를 호출
// 이걸 사용함으로써 우리가 클릭을 했을 때 title이 변경되는 것을 보여줄 수 있음
// 리액트는 jsx에서 실행이 다 완료되면 다시는 작동하지 않기 때문에, useState를 사용해서 인터페이스에 변화를 표시해줘야함
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  //   const expenseDate = new Date(2021, 2, 28);
  //   const expenseTitle = 'Car Insurance';
  //   const expenseAmount = 294.67;
  const [title, setTitle] = useState(props.title);
  // 따라서 이 함수 이 위치에 이것을 선언해야함.
  // State는 항상 두개의 변수를 가짐 첫번째는 현재상태값(title), 두번째는 이 값을 불러오는 함수이름(setTitle)

  const clickHandler = () => {
    setTitle('Updated!');
    console.log('Clicked!!!!');
  };

  return (
    <Card className="expense-item">
      {/* <div>{props.date.toISOString()}</div> */}
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
