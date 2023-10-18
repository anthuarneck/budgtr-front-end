import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
const API = import.meta.env.VITE_BASE_API;

const TransactionDetails = () => {
  const [transaction, setTransaction] = useState([]);
  let { index } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    fetch(`${API}/transactions/${index}`)
      .then((response) => response.json())
      .then((transaction) => setTransaction(transaction))
      .catch(() => navigate("/not-found"));
  }, [index, navigate]);

  const handleDelete = () => {
    const options = { method: "DELETE" };
    fetch(`${API}/transactions/${index}`, options)
      .then(() => {
        alert("Transaction has been deleted");
        navigate("/transactions");
      })
      .catch((error) => console.error(error));
  };
  return (
    <article className="Details">
      <h1>{transaction.item_name}</h1>
      <h4>ID: {transaction.id}</h4>
      <h4>Amount: ${transaction.amount}</h4>
      {transaction.date ? <h4>Date: {transaction.date}</h4> : null}
      {transaction.from ? <h4>From: {transaction.from}</h4> : null}
      {transaction.category ? <h4>Category: {transaction.category}</h4> : null}
      <div className="Nav">
        <div>
          <Link to={`/transactions`}>
            <button>Back</button>
          </Link>
        </div>
        <div>
          <Link to={`/transactions/${index}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        <div>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </article>
  );
};

export default TransactionDetails;
