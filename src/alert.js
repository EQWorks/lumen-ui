import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import MUIAlert from '@material-ui/lab/Alert'
import AlertTitle from '@material-ui/lab/AlertTitle'

const Alert = forwardRef(({ severity, message, header, width, ...props }, ref) => {
  const dimensions = { height: 'auto', width }

  return (
    <div data-testid='alert' style={dimensions}>
      {header ? (
        <MUIAlert ref={ref} severity={severity} {...props}>
          <AlertTitle>
            <strong>{header}</strong>
          </AlertTitle>
          {message}
        </MUIAlert>
      ) : (
        <MUIAlert severity={severity} {...props}>
          {message}
        </MUIAlert>
      )}
    </div>
  )
})

Alert.propTypes = {
  /**
    * The header of the component.
  */
  header: PropTypes.string,
  /**
    * The message of the component.
  */
  message: PropTypes.string.isRequired,
  /**
    * The severity of the alert. This defines the color and icon used.
  */
  severity: PropTypes.oneOf(['error', 'warning', 'info', 'success']).isRequired,
  /**
    * The variant to use.
  */
  variant: PropTypes.oneOf(['standard', 'outlined', 'filled']).isRequired,
  /**
    * The width of the component.
  */
  width: PropTypes.string,
}

Alert.defaultProps = {
  variant: 'standard',
  width: '100%',
}

Alert.displayName = 'Alert'

export default Alert
