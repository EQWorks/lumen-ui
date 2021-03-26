import palette from '../palette'

const MuiButton = (color) => {
  const customColor = (color || 'primary')

  return {
    contained: {
      boxShadow: 'none',
      '&:disabled': {
        backgroundColor: palette[customColor].main,
        color: palette.common.white,
        opacity: 0.5,
      },
      '&:hover': {
        boxShadow: 'none',
      },
    },
    containedPrimary: {
      backgroundColor: palette[customColor].main,
      '&:hover': {
        backgroundColor: palette[customColor][800],
      },
    },
    outlinedPrimary: {
      border: `1px solid ${palette[customColor].main}`,
      '&:disabled': {
        border: `1px solid ${palette[customColor].main}`,
        color: palette[customColor].main,
        opacity: 0.5,
      },
      '&:hover': {
        backgroundColor: palette[customColor][50],
      },
    },
    textPrimary: {
      padding: '6px 16px',
      '&:disabled': {
        color: palette[customColor].main,
        opacity: 0.5,
      },
      '&:hover': {
        backgroundColor: palette[customColor][50],
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
