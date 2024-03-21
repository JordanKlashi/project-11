

function BankAccount() {

    const bank = [
        {
            compte : "Belge",
            argent : "3 000 €",
        },
        {
            compte : "Suisse",
            argent : "2 000 €",
        },
        {
            compte : "Américain",
            argent : "1 234 €"
        }

    ]


    return(
        <div className="BankAccount">
            {bank.map((account,i) => (
                <div key={i} className="BankAccount-account">
                    <div className="BankAccount-account-wrapper">
                    <h3 className="BankAccount-account_title">{account.compte}</h3>
                    <p className="BankAccount-account_amount">{account.argent}</p>
                    <p className="BankAccount-account_amount-description">Available Balance</p>
                    </div>
                    <div className="BankAccount-account-wrapper cta"></div>
                        <button className="BankAccount-account_details">View transactions</button>
                    </div>
            ))}
        </div>
    )
}

export default BankAccount