import React from 'react';
import './profile.css';
import propTypes from 'prop-types';

export const Profile = ({ avatar='./components/images/user-icon.jpg', username, tag, location, stats }) =>{
    return (
        <div className='profile'>

            <div className='description'>
                <img className='avatar'
                    src={avatar}
                    alt="User avatar"
                />
                <p className='name'>{username}</p>
                <p className='tag'>{tag}</p>
                <p className='location'>{location}</p>
            </div>

            <ul className='statslist'>

                <li className='statslist-item'>
                    <span className='label'>Followers</span>
                    <span className="quantity">{stats.followers}</span>
                </li>

                <li className='statslist-item'>
                    <span className='label'>Views</span>
                    <span className="quantity">{stats.views}</span>
                </li>

                <li className='statslist-item'>
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