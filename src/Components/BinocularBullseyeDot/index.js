import BULLSEYE from '../../assets/Binocular/bullseye.png'
import { bullseyeOpacity } from '../../consts'

const BinocularBullseyeDot = ({ width = 100, opacity = bullseyeOpacity }) => {
  return (
    <img
      src={BULLSEYE}
      alt="BULLSEYE"
      style={{
        width: `${width}px`,
        opacity: `${opacity}%`,
      }}
    />
  )
}
export default BinocularBullseyeDot
