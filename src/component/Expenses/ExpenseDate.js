import './ExpenseDate.css';

const ExpenseDate = (props)=>{
    const month = props.date.toLocaleString('en-UK',{month:'long'});
    const day = props.date.toLocaleString('en-UK',{day:'2-digit'});
    const year = props.date.getFullYear();

    return (
        <div className="expense-date">
        <div class="expsense-date__month">{month}</div>
        <div class="expsense-date__day">{day}</div>
        <div class="expsense-date__year">{year}</div>
    </div>
    );
}

export default ExpenseDate;