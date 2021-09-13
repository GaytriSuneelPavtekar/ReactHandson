import React, {useState} from 'react';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredTitle: ''
    // })
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // console.log('title changed', event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value
        // });
        // setUserInput((prevState)=>{
        //     return {...prevState, enteredTitle: event.target.value};
        // })
    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        console.log('amount changed', event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value
        // })
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        console.log('date changed', event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value
        // })
    }

    const submitHandler = (event) =>{
        event.preventDefault();
        const expenseData = {
           title:  enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredTitle)
        }
        console.log('expenseData', expenseData)
        
        props.onSaveExpenseData(expenseData);
        setEnteredTitle = '';
        setEnteredAmount = '';
        setEnteredDate = '';
    };

    return (
        <form onSubmit={submitHandler}>
            <div>
                <div>
                    <label>Title</label>
                    <input type="text"
                    value={enteredTitle}
                    onChange={titleChangeHandler}/>
                </div>
                <div>
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01"
                    value={enteredAmount}
                    onChange={amountChangeHandler}/>
                </div>
                <div>
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31"
                    value={enteredDate}
                    onChange={dateChangeHandler}/>
                </div>
                <div>
                    <button type="submit">Add Expense</button>
                </div>
            </div>
        </form>)
}

export default ExpenseForm;