import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import MUIButton from '@material-ui/core/Button'
import clsx from 'clsx'

const useStyles = color => {
  const selectStyle = makeStyles((theme) => {
    const customColor = theme.overrides.MuiButton(color)

    return {
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

const Button = ({ children, isLoading, noSpacing, variant, color, ...props }) => {
  const classes = useStyles(color)

  if (variant !== 'contained' || 'outlined' || 'text') {
    variant = 'contained'
  }

  const styleProps = {
    color: 'primary',
    variant,
  }

  return (
    <div>
      <MUIButton className={clsx({
        [classes.label]: isLoading,
        [classes.noSpacing]: noSpacing,
        [classes[`${variant}Primary`]]: true,
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
  variant: PropTypes.oneOf(['contained', 'outlined', 'text']).isRequired,
  /**
    * The color to use.
  */
  color: PropTypes.oneOf(['primary', 'secondary', 'red', 'green', 'teal', 'orange', 'yellow', 'purple', 'pink', 'brown']).isRequired,
}

Button.defaultProps = {
  isLoading: false,
  noSpacing: false,
  size: 'medium',
  variant: 'contained',
  color: 'primary',
}

export default Button
