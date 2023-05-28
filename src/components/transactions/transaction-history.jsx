import React from 'react';
import css from './transactions.module.css';
import propTypes from 'prop-types';

export const TransactionHistory = ({items}) => {
    return (
        <table className={css.transactions_table}>

            <thead>
                <tr className={css.transactions_thead}>
                    <th className={css.transactions_th}>Type</th>
                    <th className={css.transactions_th}>Amount</th>
                    <th className={css.transactions_th}>Currency</th>
                </tr>
            </thead>

            <tbody className={css.transactions_tbody}>
                { items.map((item) => < Transaction item={item} key={item.id}/> ) }
            </tbody>

        </table>
    );
};

const Transaction = ({item}) =>{
    return (
        <tr className={css.transaction_tr}>
            <td className={css.transaction_td}>{item.type}</td>
            <td className={css.transaction_td}>{item.amount}</td>
            <td className={css.transaction_td}>{item.currency}</td>
        </tr>
    )
};


TransactionHistory.propTypes = {
    id: propTypes.number,
    type: propTypes.string,
    amount: propTypes.number,
    currency: propTypes.string,
};