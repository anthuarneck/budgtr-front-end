import React from "react";
import { Link } from "react-router-dom";

const Transaction = ({ transaction, index }) => {
  return (
    <tr>
      <td>{transaction.id}</td>
      <td>{transaction.item_name}</td>
      <td>{transaction.amount}</td>
      <td>
        <Link to={`/transactions/${index}`}>click</Link>
      </td>
    </tr>
  );
};

export default Transaction;
