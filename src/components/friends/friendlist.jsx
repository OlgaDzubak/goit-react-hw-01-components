import React from 'react';
import css from './friendlist.module.css';
import {FriendListItem} from './friendlist_item'
import propTypes from 'prop-types';

export const FriendList = ({friends}) => {
    return (
        <ul className={css.friendlist}>
        {
            friends.map((friend) => < FriendListItem friend={friend} key={friend.id} /> )
        }
        </ul>
    );
}

FriendList.propTypes = {
    id: propTypes.number,
    name: propTypes.string,
    avatar: propTypes.string,
    isOnline: propTypes.bool,
};