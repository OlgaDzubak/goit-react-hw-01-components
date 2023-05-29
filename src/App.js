import React from "react";
import './App.css';

import user from './components/profile/user.json';
import { Profile } from "./components/profile/profile";

import data from './components/statistics/data.json';
import { Statistics } from "./components/statistics/statistics";

import friends from './components/friends/friends.json';
import { FriendList } from "./components/friends/friendlist";

import items from './components/transactions/transactions.json';
import { TransactionHistory } from "./components/transactions/transaction-history";

export const App = () =>{
    return (
        <div className='app-div'>
            <Profile 
                avatar={user.avatar} 
                username={user.username}
                tag={user.tag}
                location = {user.location}
                stats = {user.stats}
            />

            < Statistics title="Upload stats" stats={data}/>

            < FriendList friends={friends} />
            
            < TransactionHistory items={items} />
        </div>
    );
}
