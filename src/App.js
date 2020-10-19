import React,{useState} from 'react';
import Chat from '../src/component/Chat';
import CreateGame from '../src/component/CreateGame';
import JoinGame from '../src/component/JoinGame';
import Game from '../src/pages/game';
function App() {
  const [showGame, setShowGame] = useState(false);
  const [name, setName] = useState('');
  const [gameId, setGameId] = useState('');

  const onFormSubmit = (name, gameId = '') => {
    setName(name);
    setGameId(gameId);
    setShowGame(true);
  }
  return (
    <div className="App">    
    <Chat/>  
    <div className="container">
    <h3>Multiplayer X-O</h3>
    {!showGame && (
      <>
        <CreateGame  onFormSubmit={onFormSubmit} />
        <h4>---------- OR ----------</h4>
        <JoinGame onFormSubmit={onFormSubmit} />
      </>
    )}
    {showGame && <Game name={name} gameId={gameId} />}
  </div>
  
  </div>

  );
}

export default App;
