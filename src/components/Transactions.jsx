import React from "react";
import { useState, useEffect } from "react";
import Transaction from "./Transaction";
const API = import.meta.env.VITE_BASE_API;

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    fetch(`${API}/transactions`)
      .then((response) => response.json())
      .then((transactions) => setTransactions(transactions))
      .catch((error) => console.log(error));
  }, []);

  return (
  <div className="transactions">
    <section>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Item Name</th>
                    <th>Amount</th>
                    <th>Details</th>
                </tr>
            </thead>
            <tbody>
                {transactions.map((transaction, index) => {
                    return <Transaction key={index} transaction={transaction} index={index} />
                })}
            </tbody>
        </table>
    </section>
  </div>
  );
};

export default Transactions;
