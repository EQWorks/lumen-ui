import palette from '../palette'

const MuiButton = (color, textColor) => {
  console.log('textColor: ', textColor)
  return {
    contained: {
      boxShadow: 'none',
      '&:disabled': {
        backgroundColor: palette[color].main,
        color: palette.common[textColor],
        opacity: 0.5,
      },
      '&:hover': {
        boxShadow: 'none',
      },
    },
    containedPrimary: {
      backgroundColor: palette[color].main,
      color: palette.common[textColor],
      '&:disabled': {
        backgroundColor: palette[color].main,
        color: palette.common[textColor],
        opacity: 0.5,
      },
      '&:hover': {
        backgroundColor: palette[color][800],
      },
    },
    outlinedPrimary: {
      color: palette[color].main,
      border: `1px solid ${palette[color].main}`,
      '&:disabled': {
        border: `1px solid ${palette[color].main}`,
        color: palette[color].main,
        opacity: 0.5,
      },
      '&:hover': {
        backgroundColor: palette[color][50],
        borderColor: palette[color].main,
      },
    },
    textPrimary: {
      padding: '6px 16px',
      color: palette[color].main,
      '&:disabled': {
        color: palette[color].main,
        opacity: 0.5,
      },
      '&:hover': {
        backgroundColor: palette[color][50],
      },
    },
    textSizeSmall: {
      padding: '4px 10px',
    },
    textSizeLarge: {
      padding: '8px 22px',
    },
  }
}

export default MuiButton
