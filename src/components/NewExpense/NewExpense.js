import React from 'react';
import ExpenseForm from './ExpenseForm';
const NewExpense = () => {

    const onSaveExpenseDataHandler = (enteredExpenseData) =>{
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        console.log(expenseData);
    };
    
    return <div>
        <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler}/>
    </div>
}

export default NewExpense;