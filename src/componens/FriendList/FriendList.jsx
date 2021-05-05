import React from 'react';
import css from './FriendList.module.css';

export const FriendList = ({friends}) => (
        <ul className={css.friendList}>{friends.map((element) => (
            <FriendListItem key={element.id} avatar={element.avatar} name = {element.name} isOnline = {element.isOnline}/>
        ))} 
        </ul>
  );
        
  const FriendListItem = ({avatar, name, isOnline}) => (
    <li className={css.item}>
    <span className={isOnline ? css.status : css.isActive}></span>
    <img className={css.avatar} src={avatar} alt="" width="48" />
    <p className={css.name}>{name}</p>
  </li>
  )
    
export default FriendList;

