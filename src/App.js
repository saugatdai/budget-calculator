import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import { ExpenseList } from './components/ExpenseList';
import { ExpenseForm } from './components/ExpenseForm';
import { Alert } from './components/Alert';

const initialExpenses = [
  { id: uuid(), charge: 'rent', amount: 1600 },
  { id: uuid(), charge: 'car payment', amount: 400 },
  { id: uuid(), charge: 'credit card bill', amount: 1200 }
];


function App() {
  // ****************** State Values ****************************
  // all expenses, add expense 
  const [expenses, setExpenses] = useState(initialExpenses);
  // single expense
  const [charge, setCharge] = useState('');
  // single amount
  const [amount, setAmount] = useState('');
  // alert
  const [alert, setAlert] = useState({ show: false });
  // edit
  const [edit, setEdit] = useState(false);
  // edit item
  const [id, setId] = useState(0);
  // ****************** Functionality ****************************
  const handleCharge = e => {
    setCharge(e.target.value);
  }
  const handleAmount = e => {
    setAmount(e.target.value);
  }
  // handle alert
  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ show: false });
    }, 3000);
  }
  const handleSubmit = e => {
    e.preventDefault();
    if (charge !== '' && amount > 0) {
      if(edit){
        let tempExpenses = expenses.map(item => {
          return item.id === id ?{...item, charge,amount}:item;
        });
        setExpenses(tempExpenses);
        setEdit(false);
        handleAlert({ type: 'success', text: 'item edited' });

      }else{
        setExpenses([...expenses, { id: uuid(), amount, charge }]);
        handleAlert({ type: 'success', text: 'item added' });
      }
      setCharge('');
      setAmount('');
    } else {
      // handle alert
      handleAlert({ type: 'danger', text: `charge can't be empty value and amount value has to be bigger than zero` });
    }
  }
  // clear all items
  const clearItems = () => {
    setExpenses([]);
    handleAlert({ type: 'danger', text: 'all items deleted' });

  }
  // handle delete
  const handleDelete = (id) => {
    let tempExpenses = expenses.filter(expense => expense.id !== id);
    setExpenses([...tempExpenses]);
    handleAlert({ type: 'danger', text: 'item deleted' });
  }
  // handle delete
  const handleEdit = (id) => {
    let expense = expenses.find(item => item.id === id);
    let {charge, amount} = expense;
    setCharge(charge);
    setAmount(amount);
    setEdit(true);
    setId(id);
  }
  return (
    <>
      {alert.show && <Alert type={alert.type} text={alert.text} />}
      <h1>budget calculator</h1>
      <main className="app">
        <ExpenseForm
          charge={charge}
          amount={amount}
          handleAmount={handleAmount}
          handleCharge={handleCharge}
          handleSubmit={handleSubmit} 
          edit={edit}/>
        <ExpenseList expenses={expenses} handleDelete={handleDelete} handleEdit={handleEdit} clearItems={clearItems} />
      </main>
      <h1>
        Total Spending : <span className="total">
          $ {expenses.reduce((acc, curr) => {
        return acc += parseInt(curr.amount);
      }, 0)}
        </span>
      </h1>
    </>
  );
}

export default App;
