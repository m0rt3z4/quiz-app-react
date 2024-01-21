import React from 'react'
import STIMULUS_0 from '../../assets/STIMULUS_0.png'
import STIMULUS_1 from '../../assets/STIMULUS_1.png'
import STIMULUS_2 from '../../assets/STIMULUS_2.png'
import STIMULUS_3 from '../../assets/STIMULUS_3.png'
import STIMULUS_4 from '../../assets/STIMULUS_4.png'
import STIMULUS_5 from '../../assets/STIMULUS_5.png'
import STIMULUS_6 from '../../assets/STIMULUS_6.png'
import STIMULUS_7 from '../../assets/STIMULUS_7.png'

export const iconLoader = (iconType = '') => {
  switch (iconType) {
    case 'STIMULUS_0':
      return STIMULUS_0
    case 'STIMULUS_1':
      return STIMULUS_1
    case 'STIMULUS_2':
      return STIMULUS_2
    case 'STIMULUS_3':
      return STIMULUS_3
    case 'STIMULUS_4':
      return STIMULUS_4
    case 'STIMULUS_5':
      return STIMULUS_5
    case 'STIMULUS_6':
      return STIMULUS_6
    case 'STIMULUS_7':
      return STIMULUS_7
    default:
      break
  }
}
