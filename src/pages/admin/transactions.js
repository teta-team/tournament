import Transaction from "../../components/transaction";

function Transactions() {
  return (
    <div className="transactions-page">
      <ul>
        <Transaction status={0} />
        <Transaction status={1} />
        <Transaction status={2} />
        <Transaction status={3} />
      </ul>
    </div>
  );
}

export default Transactions;
