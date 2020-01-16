import React from 'react';

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
                <a href={`https://github.com/${dev.github_username}`}>Acessar perfil no Github</a>
                <button type="button" onClick={handleDelete}>excluir</button>
            </div>
        </li>
    );
}

export default DevItem;