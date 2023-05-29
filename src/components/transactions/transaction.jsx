import React from 'react';
import css from './transactions.module.css';
import propTypes from 'prop-types';

export const Transaction = ({item}) =>{
    return (
        <tr className={css.transaction_tr}>
            <td className={css.transaction_td}>{item.type}</td>
            <td className={css.transaction_td}>{item.amount}</td>
            <td className={css.transaction_td}>{item.currency}</td>
        </tr>
    )
};

Transaction.propTypes = {
    id: propTypes.number,
    type: propTypes.string,
    amount: propTypes.number,
    currency: propTypes.string,
};