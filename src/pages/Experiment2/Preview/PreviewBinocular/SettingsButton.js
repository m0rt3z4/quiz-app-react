import { Button } from '@mui/material'

export const SettingsButton = ({ size = 40, text = '', onClickButton }) => {
  return (
    <Button
      onClick={onClickButton}
      size="large"
      sx={{
        width: `${size}%`,
        backgroundColor: 'lightgray',
        margin: '5px',
      }}
    >
      {text}
    </Button>
  )
}
