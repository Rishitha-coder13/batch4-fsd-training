import { useState } from 'react';

function AddExpense({ addExpense }) {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [type, setType] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        if (
            title.trim() === '' ||
            amount === '' ||
            Number(amount) <= 0 ||
            !type
        ) {
            alert('Please enter all details correctly.');
            return;
        }

        const newExpense = {
            id: Date.now(),
            title: title.trim(),
            amount: Number(amount),
            type: type
        };

        addExpense(newExpense);

        setTitle('');
        setAmount('');
        setType('');
    };

    return (
        <div className="add-transaction-section">
            <h3>Add new transaction</h3>
            <hr />

            <form className="transaction-form" onSubmit={handleSubmit}>
                <label>Title</label>

                <input
                    type="text"
                    placeholder="Enter title..."
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    required
                />

                <label>Amount</label>

                <input
                    type="number"
                    placeholder="Enter amount..."
                    min="0.01"
                    step="0.01"
                    value={amount}
                    onChange={(event) => setAmount(event.target.value)}
                    required
                />

                <div className="radio-group">
                    <label>
                        <input
                            type="radio"
                            name="type"
                            value="income"
                            checked={type === 'income'}
                            onChange={(event) => setType(event.target.value)}
                            required
                        />
                        Income
                    </label>

                    <label>
                        <input
                            type="radio"
                            name="type"
                            value="expense"
                            checked={type === 'expense'}
                            onChange={(event) => setType(event.target.value)}
                        />
                        Expense
                    </label>
                </div>

                <button type="submit" className="add-button">
                    Add transaction
                </button>
            </form>
        </div>
    );
}

export default AddExpense;