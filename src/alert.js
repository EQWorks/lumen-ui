import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

import MUIAlert from '@material-ui/lab/Alert'
import AlertTitle from '@material-ui/lab/AlertTitle'

const Alert = forwardRef(({ message, header, ...props }, ref) => (
  <div data-testid='alert'>
    <MUIAlert ref={ref} {...props}>
      {header && (
        <AlertTitle>
          <strong>{header}</strong>
        </AlertTitle>
      )}
      {message}
    </MUIAlert>
  </div>
))

Alert.propTypes = {
  /**
    * The header of the component.
  */
  header: PropTypes.string,
  /**
    * The message of the component.
  */
  message: PropTypes.string.isRequired,
}

Alert.defaultProps = { header: null }

Alert.displayName = 'Alert'

export default Alert
