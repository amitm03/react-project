import ExpenseItem from "./ExpenseItem";
const ExpenseRendering = ()=>{
    const expenses=[ 
        {id:'e1',title:'Car Insurance',amount:294.67,date:new Date(2023,2,31) },
        {id:'e2',title:'Car Insurance',amount:291.67,date: new Date(2023,2,31) }
    ]; 
    return(
        <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}/>,
        <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}/>
    );
}

export default ExpenseRendering;