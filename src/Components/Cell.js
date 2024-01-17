import React from 'react'

const Cell = ({ showStimulus, iconType, backgroundColor }) => {
  // const backgroundColor = isLightBackground ? 'white' : 'lightgray'
  const Icon = (iconType) => {
    if (iconType === 'SURPRIZE') {
      return '*'
    } else {
      return '🌟'
    }
  }
  const content = showStimulus ? <span>{Icon(iconType)}</span> : null
  return (
    <div
      style={{
        backgroundColor,
        display: 'flex',
        width: '100%',
        height: '100%',
        border: '2px solid black',
        minHeight: '70px',
        minWidth: '70px',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {content}
    </div>
  )
}

export default Cell
