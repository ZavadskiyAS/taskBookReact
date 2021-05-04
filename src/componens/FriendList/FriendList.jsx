import React from 'react';
import css from './FriendList.module.css';

function FriendList({friends}) {
    return(
        <ul className={css.friendList}>
            {friends.map(friend => {
                return(
                    <li class="item">
                        <span class="status">{friend.isOnline}</span>
                        <img class="avatar" src={friend.avatar} alt="avatar" width="48" />
                        <p class="name">{friend.name}</p>
                    </li>
        
                )
            })}
 
        </ul>
    )
}

export default FriendList;