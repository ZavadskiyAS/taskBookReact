import React from 'react';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import css from './App.module.css'
import statisticalData from './Statistics/statistical-data.json';
import FriendList from './FriendList/FriendList';
import friends from './FriendList/friends.json'

export default function App() {
    return (
        <>
            <Profile/>
            <Statistics title="Upload stats" stats={statisticalData}/>
            <FriendList friends={friends}/>
        </>
    )
}