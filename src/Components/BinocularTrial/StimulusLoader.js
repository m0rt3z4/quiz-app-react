import GREEN from '../../assets/Binocular/green.png'
import RED from '../../assets/Binocular/red.png'
import MIXED_HORIZENTAL from '../../assets/Binocular/mixed_horizental.png'
import MIXED_VERTICAL from '../../assets/Binocular/mixed_vertical.png'
import { imaginationCueTypes } from './consts'

export const picLoader = (img) => {
  switch (img) {
    case imaginationCueTypes.GREEN: {
      return GREEN
    }
    case imaginationCueTypes.RED: {
      return RED
    }
    case imaginationCueTypes.MIXED_HORIZENTAL: {
      return MIXED_HORIZENTAL
    }
    case imaginationCueTypes.MIXED_VERTICAL: {
      return MIXED_VERTICAL
    }
    default:
      break
  }
}
