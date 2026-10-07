import './App.css';
import { useState } from 'react';

import ExpenseList from './components/Expenselist';
import AddExpense from './components/Addexpense';
import Summary from "./components/summary";

function App() {
    const [expenses, setExpenses] = useState([
        { id: 1, title: 'Groceries', amount: 50, type: 'expense' },
        { id: 2, title: 'Salary', amount: 2300, type: 'income' },
        { id: 3, title: 'Phone', amount: 1000, type: 'expense' }
    ]);

    const addExpense = (newExpense) => {
        setExpenses([...expenses, newExpense]);
    };

    const deleteExpense = (id) => {
        const updatedExpenses = expenses.filter(
            (expense) => expense.id !== id
        );

        setExpenses(updatedExpenses);
    };

    const income = expenses
        .filter((expense) => expense.type === 'income')
        .reduce((total, expense) => total + expense.amount, 0);

    const expenseTotal = expenses
        .filter((expense) => expense.type === 'expense')
        .reduce((total, expense) => total + expense.amount, 0);

    const balance = income - expenseTotal;

    return (
        <div className="app-container">
            <div className="expense-container">
                <h1 className="app-title">Expense Tracker</h1>

                <Summary
                    balance={balance}
                    income={income}
                    expense={expenseTotal}
                />

                <ExpenseList
                    expenses={expenses}
                    deleteExpense={deleteExpense}
                />

                <AddExpense addExpense={addExpense} />
            </div>
        </div>
    );
}

export default App;
