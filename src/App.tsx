import './App.css'
import { useState, useEffect } from 'react'
import PlayArea from './components/playarea/PlayArea'
import ChoosingArea from './components/choosing/ChoosingArea'
import { determineWinner } from './services/determineWinner'
import rock from './assets/rock.svg'
import paper from './assets/paper.svg'
import scissor from './assets/scissor.svg'
import type { Move } from './components/interfaces/Feedback.interface'
import { BLUE_COLOR, GREEN_COLOR, STORAGE_KEY, YELLOW_COLOR } from './components/constants/config.mock'

const SCORE_KEY = STORAGE_KEY

export default function App() {
  const [score, setScore] = useState(() => {
    const savedScore = localStorage.getItem(SCORE_KEY)
    return savedScore ? parseInt(savedScore) : 0
  })
  const [isChoosing, setIsChoosing] = useState(false)
  const [playerChoice, setPlayerChoice] = useState<Move | null>(null)

  useEffect(() => {
    localStorage.setItem(SCORE_KEY, score.toString())
  }, [score])
  
  const iconMap = {
    'rock': { icon: rock, color: GREEN_COLOR },
    'paper': { icon: paper, color: YELLOW_COLOR },
    'scissors': { icon: scissor, color: BLUE_COLOR }
  }

  const handlePlayerChoice = (choice: Move) => {
    setPlayerChoice(choice)
    setIsChoosing(true)
  }

  const handleRoundEnd = (machineChoice: Move) => {
    if (playerChoice) {
      const result = determineWinner(playerChoice, machineChoice)
      if (result === 'WIN') {
        setScore(s => s + 1) 
      } else if (result === 'LOSE') {
        setScore(s => s - 1) 
      }
    }

  }

  const handlePlayAgain = () => {
    setIsChoosing(false)
    setPlayerChoice(null)
  }

  return (
    <>
    <div className='screen'>
      <div className='score'>
        <div className="score-label">SCORE</div>
        <div className="score-value" data-testid="score-value">{score}</div>
              <div className='play-area'>
        {isChoosing ? (
          <ChoosingArea 
            playerIcon={playerChoice ? iconMap[playerChoice].icon : undefined}
            playerColor={playerChoice ? iconMap[playerChoice].color : undefined}
            onRoundEnd={handleRoundEnd}
            onPlayAgain={handlePlayAgain}
            playerChoice={playerChoice ?? undefined}
          />
        ) : (
          <PlayArea eventDecision={handlePlayerChoice} />
        )}
      </div>
      </div>
    </div>
    </>
  )
}
