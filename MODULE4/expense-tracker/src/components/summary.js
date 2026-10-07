function Summary({ balance, income, expense }) {
    const formatAmount = (amount) =>
        Math.abs(amount).toLocaleString('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });

    return (
        <div>
            <div className="balance-section">
                <h4>YOUR BALANCE</h4>

                <h2>
                    {balance < 0 ? '-$' : '$'}
                    {formatAmount(balance)}
                </h2>
            </div>

            <div className="income-expense-container">
                <div className="income">
                    <h4>INCOME</h4>
                    <p>${formatAmount(income)}</p>
                </div>

                <div className="vertical-line"></div>

                <div className="expense">
                    <h4>EXPENSE</h4>
                    <p>${formatAmount(expense)}</p>
                </div>
            </div>
        </div>
    );
}

export default Summary;