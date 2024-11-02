import { Button } from '@mui/material'

export const SettingsButton = ({
  size = 40,
  text = '',
  onClickButton,
  backgroundColor = 'gray',
  color = 'black',
}) => {
  return (
    <Button
      onClick={onClickButton}
      size="large"
      sx={{
        width: `${size}%`,
        backgroundColor,
        color,
        margin: '5px',
      }}
    >
      {text}
    </Button>
  )
}
