import { useEffect, useState } from 'react'
import Player from '../player/Player'
import './choosingarea.css'
import rock from '../../assets/rock.svg'
import paper from '../../assets/paper.svg'
import scissor from '../../assets/scissor.svg'
import randomMove from '../../services/randomMove'
import determineWinner from '../../services/determineWinner'
import type { ChoosingAreaProps } from '../interfaces/ChoosingArea.interface'
import type { FeedbackType, Move } from '../interfaces/Feedback.interface'
import { DRAW, LOSER, MACHINE_THINKING, WINNER } from '../constants/feedback.mock'
import { BLUE_COLOR, GREEN_COLOR, TIMEOUT_CHOISING, YELLOW_COLOR } from '../constants/config.mock'

const iconMap = {
  'rock': { icon: rock, color: GREEN_COLOR },
  'paper': { icon: paper, color: YELLOW_COLOR },
  'scissors': { icon: scissor, color: BLUE_COLOR }
}


export default function ChoosingArea({
  playerIcon = scissor,
  playerColor = BLUE_COLOR,
  onRoundEnd,
  onPlayAgain,
  playerChoice
}: ChoosingAreaProps) {
  const [showMachineChoice, setShowMachineChoice] = useState(false)
  const [machineMove, setMachineMove] = useState<Move | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [result, setResult] = useState<FeedbackType>(null)
  const [hasPlayedRound, setHasPlayedRound] = useState(false)

  useEffect(() => {
    if (!playerChoice || hasPlayedRound) return;

    const aleatoryMovement = randomMove();
    let isMounted = true;

    setMachineMove(aleatoryMovement);
    const showChoiceTimer = setTimeout(() => {
      if (!isMounted) return;

      setShowMachineChoice(true);
      const roundResult = determineWinner(playerChoice, aleatoryMovement);
      setResult(roundResult)
      setShowResult(true);
      setHasPlayedRound(true);
      onRoundEnd?.(aleatoryMovement);
    }, TIMEOUT_CHOISING);

    return () => {
      isMounted = false;
      clearTimeout(showChoiceTimer);
    };
  }, [playerChoice]);

  return (
    <div className="choosing-wrap">
      <div className="choosing-row">
        <div className="left"><Player icon={playerIcon} color={playerColor} size={112} /></div>
        <div className="right">
          {showMachineChoice && machineMove ? (
            <Player icon={iconMap[machineMove].icon} color={iconMap[machineMove].color} size={112} />
          ) : (
            <div className="empty"></div>
          )}
        </div>
      </div>
      <div className="choosing-text">
        {!showMachineChoice ? MACHINE_THINKING : (
          <div className="result-container">
            <div className="result-text">
              {result === 'DRAW' ? DRAW : result === 'LOSE' ? LOSER : result === 'WIN' ? WINNER : ''}
            </div>
            {showResult && (
              <button className="play-again" onClick={onPlayAgain}>
                PLAY AGAIN
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
