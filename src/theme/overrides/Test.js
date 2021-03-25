import palette from '../palette'

const Test = (color) => {
  const temp = (color || 'primary')

  return {
    contained: {
      boxShadow: 'none',
      '&:disabled': {
        backgroundColor: palette[temp].main,
        color: palette.common.white,
        opacity: 0.5,
      },
      '&:hover': {
        boxShadow: 'none',
      },
    },
    containedPrimary: {
      backgroundColor: palette[temp].main,
      '&:hover': {
        backgroundColor: palette[temp][800],
      },
    },
    outlinedPrimary: {
      border: `1px solid ${palette[temp].main}`,
      '&:disabled': {
        border: `1px solid ${palette[temp].main}`,
        color: palette[temp].main,
        opacity: 0.5,
      },
      '&:hover': {
        backgroundColor: palette[temp][50],
      },
    },
    textPrimary: {
      padding: '6px 16px',
      '&:disabled': {
        color: palette[temp].main,
        opacity: 0.5,
      },
      '&:hover': {
        backgroundColor: palette[temp][50],
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

export default Test
