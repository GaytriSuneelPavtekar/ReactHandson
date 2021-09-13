function ExpenseDate(props) {
    const month = props.date;
    console.log('props', props.date);
    return (<p>Date from date Component: {month}</p>)
}
export default ExpenseDate;