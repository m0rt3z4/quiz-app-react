import STIMULUS_0 from '../../assets/STIMULUS_0.png'
import STIMULUS_1 from '../../assets/STIMULUS_1.png'
import STIMULUS_2 from '../../assets/STIMULUS_2.png'
import STIMULUS_3 from '../../assets/STIMULUS_3.png'
import STIMULUS_4 from '../../assets/STIMULUS_4.png'
import STIMULUS_5 from '../../assets/STIMULUS_5.png'
import STIMULUS_6 from '../../assets/STIMULUS_6.png'
import STIMULUS_7 from '../../assets/STIMULUS_7.png'

import STIMULUS_0_DARK from '../../assets/STIMULUS_0_DARK.png'
import STIMULUS_1_DARK from '../../assets/STIMULUS_1_DARK.png'
import STIMULUS_2_DARK from '../../assets/STIMULUS_2_DARK.png'
import STIMULUS_3_DARK from '../../assets/STIMULUS_3_DARK.png'
import STIMULUS_4_DARK from '../../assets/STIMULUS_4_DARK.png'
import STIMULUS_5_DARK from '../../assets/STIMULUS_5_DARK.png'
import STIMULUS_6_DARK from '../../assets/STIMULUS_6_DARK.png'
import STIMULUS_7_DARK from '../../assets/STIMULUS_7_DARK.png'

export const iconLoader = (iconType = '', isLight) => {
  switch (iconType) {
    case 'STIMULUS_0':
      return isLight ? STIMULUS_0 : STIMULUS_0_DARK
    case 'STIMULUS_1':
      return isLight ? STIMULUS_1 : STIMULUS_1_DARK
    case 'STIMULUS_2':
      return isLight ? STIMULUS_2 : STIMULUS_2_DARK
    case 'STIMULUS_3':
      return isLight ? STIMULUS_3 : STIMULUS_3_DARK
    case 'STIMULUS_4':
      return isLight ? STIMULUS_4 : STIMULUS_4_DARK
    case 'STIMULUS_5':
      return isLight ? STIMULUS_5 : STIMULUS_5_DARK
    case 'STIMULUS_6':
      return isLight ? STIMULUS_6 : STIMULUS_6_DARK
    case 'STIMULUS_7':
      return isLight ? STIMULUS_7 : STIMULUS_7_DARK
    default:
      break
  }
}
