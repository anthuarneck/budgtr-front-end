import React from 'react';
import { useState } from 'react';
import Transactions from '../components/Transactions';
import Tracker from '../components/Tracker';

const Index = ({ transactions, setTransactions }) => {
    return (
        <div className='Index'>
            <Tracker transactions={transactions}/>
            <Transactions transactions={transactions} setTransactions={setTransactions}/>
        </div>
    );
}

export default Index;
