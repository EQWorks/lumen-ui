import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import MUIButton from '@material-ui/core/Button'
import clsx from 'clsx'
import Test from './theme/overrides/Test'

const useStyles = color => {
  const selectStyle = makeStyles((theme) => {
    const customColor = Test(color)

    return {
      contained: customColor.contained,
      containedPrimary: customColor.containedPrimary,
      outlinedPrimary: customColor.outlinedPrimary,
      textPrimary: customColor.textPrimary,
      label: {
        color: 'rgba(0, 0, 0, 0.0) !important',
      },
      noSpacing: {
        padding: theme.spacing(0),
      },
    }
  })

  return selectStyle()
}

const Button = ({ children, isLoading, noSpacing, type, color, ...props }) => {
  const classes = useStyles(color)

  const styleProps = {
    color: 'primary',
    type,
  }

  if (type === 'tertiary') {
    props.variant = 'text'
  } else if (type === 'secondary') {
    props.variant = 'outlined'
  } else {
    props.variant = 'contained'
  }

  return (
    <div>
      <MUIButton className={clsx({
        [classes.label]: isLoading,
        [classes.noSpacing]: noSpacing,
        [classes.contained]: true,
        [classes.containedPrimary]: true,
      })} data-testid='button' {...styleProps} {...props} >
        {children}
      </MUIButton>
    </div>

  )
}

Button.propTypes = {
  /**
    * The content of the button.
  */
  children: PropTypes.string,
  /**
    * Toggle loading style of component.
  */
  isLoading: PropTypes.bool,
  /**
    * If `true`, margin/padding property of the button will be set to 0. Recommended for tertiary buttons. 
   */
  noSpacing: PropTypes.bool,
  /**
    * The size of the button.small is equivalent to the dense button styling.
  */
  size: PropTypes.oneOf(['small', 'medium', 'large']).isRequired,
  /**
    * The variant to use.
  */
  type: PropTypes.oneOf(['primary', 'secondary', 'tertiary']).isRequired,
  /**
    * The color to use.
  */
  color: PropTypes.oneOf(['primary', 'secondary', 'green']).isRequired,
}

Button.defaultProps = {
  isLoading: false,
  noSpacing: false,
  size: 'medium',
  type: 'primary',
  color: 'primary',
}

export default Button
