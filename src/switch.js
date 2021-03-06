import React, { forwardRef } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Switch from '@material-ui/core/Switch'

const useStyles = makeStyles((theme) => {
  const borderRadius = 3
  const thumbHeight = 15
  const thumbWidth = 7
  const inputPadding = 4

  return {
    checked: {},
    root: {
      backgroundColor: theme.palette.common.white,
      border: props => (props.checked && !props.disabled) ? `1px solid ${theme.palette.primary.main}` : `1px solid ${theme.palette.grey[400]}`,
      borderRadius: `${borderRadius}px`,
      height: `calc(2px + ${thumbHeight}px + ${inputPadding * 2}px)`,
      margin: '0 10px',
      padding: 0,
      transition: `all 150ms ${theme.transitions.easing.easeInOut}`,
      width: `calc(29px + ${inputPadding * 2}px)`,
      '&:hover': {
        backgroundColor: theme.palette.common.white,
        border: `1px solid ${theme.palette.primary.main}`,
        '& $switchBase': {
          backgroundColor: 'transparent',
          padding: `${inputPadding}px`,
        },
        '& $thumb': {
          color: props => props.checked ? theme.palette.common.white : theme.palette.primary.main,
        },
      },
    },
    switchBase: {
      margin: 0,
      padding: `${inputPadding}px`,
      '&$checked': {
        '& + $track': {
          backgroundColor: theme.palette.primary.main,
          opacity: 1,
        },
      },
    },
    thumb: {
      borderRadius: `${borderRadius}px`,
      color: props => props.checked ? theme.palette.common.white : theme.palette.grey[400],
      height: `${thumbHeight}px`,
      margin: 0,
      padding: 0,
      transition: `all 150ms ${theme.transitions.easing.easeInOut}`,
      width: `${thumbWidth}px`,
    },
    track: {
      backgroundColor: theme.palette.common.white,
      borderRadius: 0,
      margin: 0,
      padding: 0,
    },
    disabled: {
      '&$checked': {
        '& + $track': {
          opacity: 0.5,
        },
        '& $thumb': {
          opacity: 0.5,
        },
      },
    },
  }
})

const StyledSwitch = forwardRef((props,ref) => {
  const classes = useStyles(props)
  return <Switch ref={ref} classes={classes} data-testid='switch' disableRipple {...props} />
})

StyledSwitch.defaultProps = {
  checked: false,
  disabled: false,
}

StyledSwitch.displayName = 'Switch'

export default StyledSwitch
