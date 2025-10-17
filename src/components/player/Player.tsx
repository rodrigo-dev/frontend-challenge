import type { IPlayer } from '../interfaces/Player.interface'
import './player.css'

export default function Player({ icon, color, size = 140, onClick }: IPlayer) {
  return (
    <button className="player play-button" onClick={onClick} style={{ ['--size' as any]: `${size}px`, ['--ring' as any]: color }}>
      <div className="inner">
        <img src={icon} alt={'move'} />
      </div>
    </button>
  )
}
