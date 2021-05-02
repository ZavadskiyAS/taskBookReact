import React from "react";
import user from "./user.json";

function Profile() {
    return (
    <div class="profile">
        <div class="description">
            <img
                src={user.avatar}
                alt="Аватар пользователя"
                class="avatar"
            />
            <p class="name">{user.name}</p>
            <p class="tag">{user.tag}</p>
            <p class="location">{user.location}</p>
        </div>
    
        <ul class="stats">
            <li>
                <span class="label">{user.stats.followers}</span>
                <span class="quantity">1000</span>
            </li>
            <li>
                <span class="label">{user.stats.views}</span>
                <span class="quantity">2000</span>
            </li>
            <li>
                <span class="label">{user.stats.likes}</span>
                <span class="quantity">3000</span>
            </li>
        </ul>
    </div>
    )

};

export default Profile;
