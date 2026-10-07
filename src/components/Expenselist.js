function ExpenseList({ expenses, deleteExpense }) {
    return (
        <div className="history-section">
            <h3>History</h3>
            <hr />

            <ul className="transaction-list">
                {expenses.map((expense) => (
                    <li
                        key={expense.id}
                        className={expense.type}
                    >
                        <span>{expense.title}</span>

                        <span>
                            {expense.type === 'income' ? '+' : '-'}
                            {expense.amount.toLocaleString('en-US', {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2
                            })}
                        </span>

                        <button
                            type="button"
                            className="delete-btn"
                            onClick={() => deleteExpense(expense.id)}
                            aria-label={`Delete ${expense.title}`}
                            title="Delete transaction"
                        >
                            ×
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ExpenseList;