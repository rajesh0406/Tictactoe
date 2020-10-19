import React, { useState } from 'react';
import './CreateGame.css';
const CreateGame = ({ onFormSubmit }) => {
  const [name, setName] = useState('');

  return (
    <div>
      <h4>Create new game</h4>
      <div className="form-group row">
        <div className="row-1">
          <input
            type="text"
            className="create_game_input"
            placeholder="Enter your name"
            className="form-control"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="row-2">
          <button className="create_game_button" onClick={() => onFormSubmit(name)} className="btn btn-info">
            Create Game
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateGame;