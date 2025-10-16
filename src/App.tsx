import './App.css'

function App() {
  let playerone = '';
  let playertwo = 'pedra';

  function userChoice(choice: string) {
    playerone = choice
    console.log(playerone)
    console.log(determineWinner())
  }

  function determineWinner(): string{
    return playerone === 'tesoura' && playertwo === 'papel' ? 'win' :
    playerone === 'papel' && playertwo === 'pedra' ? 'lose' : 
    playerone === 'tesoura' && playertwo === 'pedra' ? 'lose' : 'lose'
  }

  return (
    <>
      <div className='score'>
        <p>Score</p>
      </div>
      <div className='play-area'>
        <button onClick={() => userChoice('pedra')}>Pedra</button>
        <button onClick={() => userChoice('papel')}>Papel</button>
        <button onClick={() => userChoice('tesoura')}>Tesoura</button>
      </div>
    </>
  )
}

export default App
