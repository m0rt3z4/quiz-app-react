import BULLSEYE from '../../assets/Binocular/bullseye.png'

const BinocularBullseyeDot = ({ width = 100, opacity = 100 }) => {
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
