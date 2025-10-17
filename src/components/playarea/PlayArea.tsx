import Player from '../player/Player'
import rock from '../../assets/rock.svg'
import paper from '../../assets/paper.svg'
import scissor from '../../assets/scissor.svg'
import { Move } from '../interfaces/Feedback.interface'
import { BLUE_COLOR, GREEN_COLOR, YELLOW_COLOR } from '../constants/config.mock'

export default function PlayArea({ eventDecision }: { eventDecision?: (m: Move) => void }) {
  return (
    <div className="play-area-full">
      <div className="triangle">
        <div className="tl"><Player icon={scissor} color={`${BLUE_COLOR}`} onClick={() => eventDecision?.('scissors')} /></div>
        <div className="tr"><Player icon={rock} color={`${GREEN_COLOR}`} onClick={() => eventDecision?.('rock')} /></div>
        <div className="bc"><Player icon={paper} color={`${YELLOW_COLOR}`} onClick={() => eventDecision?.('paper')} /></div>
      </div>
    </div>
  )
}
