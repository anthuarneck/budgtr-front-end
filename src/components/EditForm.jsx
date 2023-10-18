import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
const API = import.meta.env.VITE_BASE_API;

const EditForm = () => {
  let { index } = useParams();
  const [transaction, setTransaction] = useState({
    id: 0,
    item_name: "",
    amount: 0,
    date: "",
    from: "",
    category: "",
  });

  const navigate = useNavigate();
  const handleTextChange = (event) => {
    setTransaction({ ...transaction, [event.target.id]: event.target.value });
  };

  useEffect(() => {
    fetch(`${API}/transactions/${index}`)
      .then((response) => response.json())
      .then((transaction) => {
        setTransaction(transaction);
      });
  }, []);

  const updateTransaction = () => {
    const options = {
      method: "PUT",
      body: JSON.stringify(transaction),
      headers: {
        "Content-type": "application/json",
      },
    };

    fetch(`${API}/transactions/${index}`, options)
      .then(() => {
        alert(`${transaction.item_name} has been updated!`);
        navigate(`/transactions/${index}`);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateTransaction();
  };

  return (
    <div className="Edit">
      <form onSubmit={handleSubmit}>
        <label htmlFor="id">ID:</label>
        <input
          id="id"
          value={transaction.id}
          type="number"
          onChange={handleTextChange}
          placeholder="Unique ID"
          required
        />
        <label htmlFor="item_name">Item Name:</label>
        <input
          id="item_name"
          value={transaction.item_name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name for transaction"
          required
        />
        <label htmlFor="amount">Amount:</label>
        <input
          id="amount"
          value={transaction.amount}
          type="number"
          onChange={handleTextChange}
          placeholder="Enter dollar amount"
          required
        />
        <label htmlFor="date">Date:</label>
        <input
          id="date"
          value={transaction.date}
          type="text"
          onChange={handleTextChange}
          placeholder="Date transaction took place"
        />
        <label htmlFor="from">From:</label>
        <input
          id="from"
          value={transaction.from}
          type="text"
          onChange={handleTextChange}
          placeholder="Who transaction was with"
        />
        <label htmlFor="category">Category:</label>
        <input
          id="category"
          value={transaction.category}
          type="text"
          onChange={handleTextChange}
          placeholder="Which category does transaction fall into"
        />
        <br />
        <input type="submit" />
      </form>
      <Link to={`/transactions/${index}`}>
        <button>Go Back</button>
      </Link>
    </div>
  );
};

export default EditForm;
