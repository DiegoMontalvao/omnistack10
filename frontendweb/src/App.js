import React from 'react';

import './global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'

function App() {
  return (
    <div id='app'>
      <aside>
        <strong>Cadastrar</strong>
        <form>

          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username" required />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required />
          </div>

          <div className="input-group">

            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required />
            </div>
          </div>
          <button type="submit">Salvar</button>
        </form>          
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/59020856?s=460&v=4" alt="Diego Montalvao" />
              <div className="user-info">
                <strong>Diego Montalvão</strong>
                <span>ReactJS, React Native, NodeJS</span>
              </div>
            </header>
            <p>Rockie in this beautiful world of web development</p>
            <a href="https://github.com/DiegoMontalvao">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/59020856?s=460&v=4" alt="Diego Montalvao" />
              <div className="user-info">
                <strong>Diego Montalvão</strong>
                <span>ReactJS, React Native, NodeJS</span>
              </div>
            </header>
            <p>Rockie in this beautiful world of web development</p>
            <a href="https://github.com/DiegoMontalvao">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/59020856?s=460&v=4" alt="Diego Montalvao" />
              <div className="user-info">
                <strong>Diego Montalvão</strong>
                <span>ReactJS, React Native, NodeJS</span>
              </div>
            </header>
            <p>Rockie in this beautiful world of web development</p>
            <a href="https://github.com/DiegoMontalvao">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/59020856?s=460&v=4" alt="Diego Montalvao" />
              <div className="user-info">
                <strong>Diego Montalvão</strong>
                <span>ReactJS, React Native, NodeJS</span>
              </div>
            </header>
            <p>Rockie in this beautiful world of web development</p>
            <a href="https://github.com/DiegoMontalvao">Acessar perfil no Github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
