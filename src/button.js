import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import MUIButton from '@material-ui/core/Button'
import clsx from 'clsx'
import { determineTextColor } from './util/basic-functions'

const colorPalette = ['primary', 'secondary', 'red', 'green', 'teal', 'orange', 'yellow', 'purple', 'pink', 'brown']

const useStyles = (color) => makeStyles((theme) => {
  const selectColor = colorPalette.includes(color) ? color : 'primary'

  const textColor = determineTextColor(theme.palette[selectColor].main)

  const customColor = theme.overrides.MuiButton(selectColor, textColor)

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

const Button = ({ children, isLoading, noSpacing, type, color, ...props }) => {
  const classes = useStyles(color)()

  const styleProps = {
    color: 'primary',
    type,
  }

  const variantType = type === 'secondary' ? 'outlined' : type === 'tertiary' ? 'text' : 'contained'

  return (
    <div>
      <MUIButton className={clsx({
        [classes.label]: isLoading,
        [classes.noSpacing]: noSpacing,
        [classes[`${variantType}Primary`]]: true,
      })} data-testid='button' variant={variantType} {...styleProps} {...props} >
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
  color: PropTypes.oneOf(colorPalette).isRequired,
}

Button.defaultProps = {
  isLoading: false,
  noSpacing: false,
  size: 'medium',
  type: 'primary',
  color: 'primary',
}

export default Button
