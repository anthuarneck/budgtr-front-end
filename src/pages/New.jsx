import React from 'react';
import NewForm from '../components/NewForm';

const New = ({ transactions, setTransactions}) => {
    return (
        <div className='New'>
            <NewForm transactions={transactions} setTransactions={setTransactions}/>
        </div>
    );
}

export default New;
