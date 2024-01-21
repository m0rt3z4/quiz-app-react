import React, { useState, useEffect } from 'react'

import Cell from './Cell'

const GridTable = ({ props }) => {
  const {
    size = 5,
    darkLightArray,
    isWhiteThemed = true,
    stimulus = {},
  } = props


  const hasCostumBackground = !!darkLightArray
  const renderGrid = () => {
    let rows = []
    rows.includes()
    for (let i = 0; i < size; i++) {
      let cells = []
      for (let j = 0; j < size; j++) {
        const bgColor = hasCostumBackground
          ? isWhiteThemed
            ? !darkLightArray[i][j]
            : darkLightArray[i][j]
          : isWhiteThemed
        let showStimulus =
          !!stimulus && i === stimulus.i && j === stimulus.j ? true : false
        cells.push(
          <td key={`cell-${i}-${j}`}>
            <Cell
              backgroundColor={bgColor ? 'white' : 'lightGray'}
              showStimulus={showStimulus}
              iconType={showStimulus ? stimulus.iconType : null}
            />
          </td>
        )
      }
      rows.push(<tr key={`row-${i}`}>{cells}</tr>)
    }
    return rows
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        // minHeight: '350px',
      }}
    >
      <table
        style={{ width: '100%', height: '100%', borderCollapse: 'collapse' }}
      >
        <tbody>{renderGrid()}</tbody>
      </table>
    </div>
  )
}

export default GridTable
