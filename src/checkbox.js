import React, { forwardRef, useState } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import MUICheckbox from '@material-ui/core/Checkbox'

const checkSVG = `
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'>
    <path 
      fill-rule='evenodd'
      clip-rule='evenodd'
      d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z'
      fill='#fff'
    />
  </svg>
`
const CHECKMARK = `url("data:image/svg+xml;charset=utf-8,${encodeURIComponent(checkSVG)}")`

const useStyles = makeStyles((theme) => {
  return {
    root: {
      margin: theme.spacing(0.5),
      '&&:hover': {
        backgroundColor: 'transparent',
      },
    },
    icon: {
      backgroundColor: theme.palette.grey[50],
      border: `1px solid ${theme.palette.grey[400]}`,
      borderRadius: 3,
      height: 16,
      width: 16,
      'input:disabled ~ &': {
        opacity: 0.5,
        pointerEvents: 'none',
      },
      'input:focus ~ &': {
        outline: `1px solid ${theme.palette.primary.main}`,
      },
      'input:hover ~ &': {
        backgroundColor: theme.palette.action.hover,
        border: `1px solid ${theme.palette.primary[100]}`,
        color: theme.palette.action.hover,
        transition: 'all .2s',
      },
    },
    checkedIcon: {
      backgroundColor: theme.palette.primary.main,
      backgroundImage: CHECKMARK,
      border: '1px solid rgba(0,0,0,0)',
      borderRadius: 3,
      height: 16,
      width: 16,
      'input:disabled ~ &': {
        opacity: 0.5,
      },
      'input:hover ~ &': {
        backgroundColor: theme.palette.primary[800],
        border: `1px solid ${theme.palette.primary[800]}`,
        transition: 'all .2s',
      },
    },
  }
})

const Checkbox = forwardRef(({ checked, ...props }, ref) => {
  const classes = useStyles()
  const [checkedState, setCheckedState] = useState(checked)
  const checkOnChange = (e) => {
    setCheckedState(e.target.checked)
  }
  return (
    <MUICheckbox
      ref={ref}
      data-testid="checkbox"
      disableRipple
      checked={checkedState}
      checkedIcon={
        <span className={checked ? classes.checkedIcon : classes.icon} />
      }
      className={classes.root}
      icon={<span className={classes.icon} />}
      onChange={checkOnChange}
      {...props}
    />
  )
})

Checkbox.propTypes = {
  /**
   * If `true`, the component is checked.
   */
  checked: PropTypes.bool,
}

Checkbox.defaultProps = {
  checked: false,
  disabled: false,
}

Checkbox.displayName = 'Checkbox'

export default Checkbox
