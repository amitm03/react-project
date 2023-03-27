import logo from './logo.svg';
import React from 'react';
import './App.css';
import ExpenseItem from './component/Expenses/ExpenseItem';
import ExpenseRendering from './component/Expenses/ExpenseRendering';

function App() {
  const expenses=[ 
    {id:'e1',title:'Car Insurance',amount:294.67,date:new Date(2023,2,31) },
    {id:'e2',title:'Car Insurance',amount:291.67,date: new Date(2023,2,31) }
]; 
  return (
    <div className="App">
     <h1>Let's get started</h1>
     <p>
      This is also visible
     </p>
     <ExpenseRendering item={expenses}/>
    </div>
  );

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement( 'h2' , {} , "Let's get started"),
  //   React.createElement( ExpenseItem,{ items:expenses })
  // );
}

export default App;
