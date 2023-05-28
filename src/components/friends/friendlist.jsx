import React from 'react';
import clsx from "clsx";
import css from './friendlist.module.css';
import propTypes from "prop-types";

export const FriendList = ({friends}) => {
    return (
        <ul className={css.friendlist}>
        {
            friends.map((friend) => < FriendListItem friend={friend} key={friend.id} /> )
        }
        </ul>
    );
}

const FriendListItem = ({friend}) => {

    return (
        <li className={css.item}>

            <span className={clsx(css.status, {
                              [css.isOnline]: friend.isOnline, 
                              [css.isOffline]: !friend.isOnline,
                            })}></span>
            <img className={css.avatar}
                 src={friend.avatar}
                 alt='User avatar'
                 width="48"
            />
            <p className={css.name}>{friend.name}</p>

        </li>
    )
}

FriendList.propTypes = {
    id: propTypes.number,
    name: propTypes.string,
    avatar: propTypes.string,
    isOnline: propTypes.bool,
};