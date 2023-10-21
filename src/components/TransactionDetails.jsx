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
      <h2>{transaction.item_name}</h2>
      <p>ID: {transaction.id}</p>
      <p>Amount: ${transaction.amount}</p>
      {transaction.date ? <p>Date: {transaction.date}</p> : null}
      {transaction.from ? <p>From: {transaction.from}</p> : null}
      {transaction.category ? <p>Category: {transaction.category}</p> : null}
      <div className="Buttons">
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
