import logo from './logo.svg';
import './App.css';
import Card from './components/Card'
import ExpenseItem from './components/ExpenseItem';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  const expenses = [
    {name: 'Car Investment One', amount: '20000', date:'25-02-2021' },
    {name: 'Car Investment Two', amount: '30000', date:'25-02-2021' },
    {name: 'Car Investment Three', amount: '40000', date:'25-02-2021' }
  ];
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Card className='red'/>
          <ExpenseItem name={expenses[0].name} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItem>
          <ExpenseItem name={expenses[1].name} amount={expenses[1].amount} date={expenses[1].date}></ExpenseItem>
          <ExpenseItem name={expenses[2].name} amount={expenses[2].amount} date={expenses[2].date}></ExpenseItem>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
{/* Parent to child using props */}
        <NewExpense/>
      </div>
    </div>
  );
}

export default App;
