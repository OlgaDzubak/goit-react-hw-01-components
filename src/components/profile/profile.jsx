import React from 'react';
import css from './profile.module.css';
import propTypes from 'prop-types';

export const Profile = ({ avatar='./components/images/user-icon.jpg', username, tag, location, stats }) =>{
    return (
        <div className={css.profile}>

            <div className={css.description}>
                <img className={css.avatar}
                    src={avatar}
                    alt="User avatar"
                />
                <p className={css.name}>{username}</p>
                <p className={css.tag}>{tag}</p>
                <p className={css.location}>{location}</p>
            </div>

            <ul className={css.statslist}>

                <li className={css.statslist_item}>
                    <span className='label'>Followers</span>
                    <span className="quantity">{stats.followers}</span>
                </li>

                <li className={css.statslist_item}>
                    <span className='label'>Views</span>
                    <span className="quantity">{stats.views}</span>
                </li>

                <li className={css.statslist_item}>
                    <span className='label'>Likes</span>
                    <span className="quantity">{stats.likes}</span>
                </li>

            </ul>

        </div>    
    );
}

Profile.propTypes = {
    username: propTypes.string.isRequired,
    tag: propTypes.string.isRequired,
    location: propTypes.string,
    avatar: propTypes.string,
    stats: propTypes.object,
}