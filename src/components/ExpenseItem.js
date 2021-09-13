import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import React, { useState } from 'react';

function ExpenseItem(props) {
    const expenseDate = new Date(2021, 2, 28);
    const expenseTitle = 'Car Insurance';
    const expenseAmount = 294.30;

    // let title = props.name;

    
    //set title is function to set titlte later
    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
        console.log('Clicked', title);
        setTitle('Updated this');
    }

    return (
        <div>
            <p>
                Title:{props.name}{expenseTitle}
            </p>
            <p>
                Amount:{expenseAmount}
            </p>
            <p className="expense-item">
                Date:{expenseDate.toISOString()}
            </p>
            <p>
                Nested Component Demonstartion: <ExpenseDate date={props.date} />
            </p>
            <p>{title}</p>
            <button onClick={clickHandler}>Event Handling Demonstration</button>
        </div>
    );
}
export default ExpenseItem;