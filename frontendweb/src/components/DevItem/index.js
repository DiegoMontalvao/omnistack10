import React from 'react';

import gitlogo from '../../assets/github-logo.png'

import './styles.css';

function DevItem({ dev, handleDestroyDev }){
    async function handleDelete() {
        await handleDestroyDev(dev._id);
    }
    
    return (
        <li className="dev-item">
            <header>
                <img src={dev.avatar_url} alt={dev.name} />
                <div className="user-info">
                    <strong>{dev.name}</strong>
                    <span>{dev.techs.join(', ')}</span>
                </div>
            </header>
            <p>{dev.bio}</p>
            <div className="user-links">
                <a href={`https://github.com/${dev.github_username}`}><img src={gitlogo} alt="gitlogo" /> </a>
                <button className="delete-button"><img src="https://img.icons8.com/color/48/000000/trash.png" alt="delete" onClick={handleDelete} /></button>
            </div>
        </li>
    );
}

export default DevItem;
