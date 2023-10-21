import React from 'react';
import NewForm from '../components/NewForm';

const New = ({ transactions, setTransactions}) => {
    return (
        <div className='New'>
            <h2>New Transaction</h2>
            <NewForm transactions={transactions} setTransactions={setTransactions}/>
        </div>
    );
}

export default New;
