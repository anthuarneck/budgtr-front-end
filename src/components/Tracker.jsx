import React from "react";
import { useState, useEffect } from "react";

const Tracker = ({ transactions }) => {
  const [total, setTotal] = useState(0);
  const [trackerColor, setTrackerColor] = useState("");

  const updateTotal = () => {
    let sum = 0;
    for (let i = 0; i < transactions.length; i++) {
      sum += Number(transactions[i].amount);
    }
    setTotal(sum);
  };

  const updateTrackerColor = () => {
    if (total < 0) {
      setTrackerColor("red");
    } else if (total >= 0 && total <= 100) {
      setTrackerColor("darkorange");
    } else {
      setTrackerColor("green");
    }
  };

  useEffect(() => {
    updateTotal();
    updateTrackerColor();
  }, [total, transactions]);

  return (
    <div className="Tracker" style={{ background: trackerColor }}>
      Total Amount: ${total}
    </div>
  );
};

export default Tracker;
