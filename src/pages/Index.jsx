import React from 'react';
import { useState } from 'react';
import Transactions from '../components/Transactions';

const Index = ({ transactions, setTransactions }) => {
    return (
        <div className='Index'>
            <Transactions transactions={transactions} setTransactions={setTransactions}/>
        </div>
    );
}

export default Index;
