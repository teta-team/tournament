import { useEffect } from "react";
import Transaction from "../../components/transaction";

function Transactions() {
  useEffect(() => {
    const items = document.querySelectorAll(
      ".transactions-page ul .transactions"
    );

    items.forEach((item, index) => {
      item.style.opacity = "0"
      setTimeout(() => {
        item.style.animation = "fadedown .5s ease";
        item.style.opacity = "1";
      }, 100 * index);
    });
  }, []);

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
