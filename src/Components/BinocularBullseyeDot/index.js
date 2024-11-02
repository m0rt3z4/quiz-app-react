import BULLSEYE from '../../assets/Binocular/bullseye.png'
import { bullseyeOpacity } from '../../consts'

const BinocularBullseyeDot = ({ width = 100, opacity = bullseyeOpacity }) => {
  return (
    <img
      src={BULLSEYE}
      alt="BULLSEYE"
      style={{
        width: `${width}%`,
        opacity: `${opacity}%`,
      }}
    />
  )
}
export default BinocularBullseyeDot
