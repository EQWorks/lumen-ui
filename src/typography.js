import React, { forwardRef } from 'react'
import { Typography as MuiTypography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

const useStyles = makeStyles((theme) => (
  { 
    root: ({ marginBottom, secondary }) => ({ 
      marginBottom: theme.spacing(marginBottom),
      color: theme.palette.secondary[secondary],
    }), 
  }))

const Typography = forwardRef(({ marginBottom, children, secondary, ...rest }, ref) => {
  const classes = useStyles({ marginBottom, secondary })
  return <MuiTypography ref={ref} className={classes.root} {...rest}>{children}</MuiTypography>
})

Typography.propTypes = { 
  marginBottom: PropTypes.number,
  children: PropTypes.node.isRequired,
  secondary: PropTypes.number,
}
Typography.defaultProps = { 
  marginBottom: 0,
  secondary: undefined,
}

Typography.displayName = 'Typography'

export default Typography
