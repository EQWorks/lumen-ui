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

const Button = ({ children, isLoading, noSpacing, type, color, ...props }) => {
  const classes = useStyles(color)

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
  color: PropTypes.oneOf(['primary', 'secondary', 'red', 'green', 'teal', 'orange', 'yellow', 'purple', 'pink', 'brown']).isRequired,
}

Button.defaultProps = {
  isLoading: false,
  noSpacing: false,
  size: 'medium',
  type: 'primary',
  color: 'primary',
}

export default Button
