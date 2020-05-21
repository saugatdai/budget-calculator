import React, {useState} from 'react';
import {v4 as uuid} from 'uuid';
import './App.css';
import {ExpenseList} from './components/ExpenseList';
import {ExpenseForm} from './components/ExpenseForm';
import {Alert} from './components/Alert';

const initialExpenses = [
  {id:uuid(),charge: 'rent',amount: 1600},
  {id:uuid(),charge: 'car payment',amount: 400},
  {id:uuid(),charge: 'credit card bill',amount: 1600}
];

console.log(initialExpenses);

function App() {
  return (
    <>
      <Alert />
      <ExpenseForm/>
      <ExpenseList />
    </>
  );
}

export default App;
