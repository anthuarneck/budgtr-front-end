import React from "react";
import { useState, useEffect } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import "bootstrap/dist/css/bootstrap.min.css";

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
      <p>Bank Total Amount: ${total}</p>
      <div className="ProgressBar">
        <ProgressBar now={total} min={-50} />
      </div>
    </div>
  );
};

export default Tracker;
