import React from "react";
import { useState, useEffect } from "react";

const Tracker = ({ transactions }) => {
  const [total, setTotal] = useState(0);

  const updateTotal = () => {
    let sum = 0;
    for (let i = 0; i < transactions.length; i++) {
      sum += Number(transactions[i].amount);
    }
    setTotal(sum);
  };

  useEffect(() => {
    updateTotal();
  }, [total, transactions]);

  return (
  <div className="Tracker">
    Total Amount: ${total}
    </div>
  );
};

export default Tracker;
