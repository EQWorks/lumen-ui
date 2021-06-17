import withRef from './with-ref'
import TabPanels from './tab-panels'

const TabPanelsWithRef = withRef(TabPanels)
TabPanelsWithRef.displayName = 'TabPanelsWithRef'

// untouched material-ui
export { default as FormControl } from '@material-ui/core/FormControl'
export { default as FormControlLabel } from '@material-ui/core/FormControlLabel'
export { default as FormGroup } from '@material-ui/core/FormGroup'
export { default as FormLabel } from '@material-ui/core/FormLabel'
export { default as RadioGroup } from '@material-ui/core/RadioGroup'

// theme
export { DefaultTheme, ThemeProvider } from './theme'

// components
export { default as Alert } from './alert'
export { default as Button } from './button'
export { default as Checkbox } from './checkbox'
export { default as Chip } from './chip'
export { default as List } from './list'
export { default as Loader } from './loader'
export { default as Radio } from './radio'
export { default as Switch } from './switch'
export { default as TabPanels } from './tab-panels'
export { default as TextField } from './text-field'
export { default as Typography } from './typography'
export { default as withRef } from './with-ref'
export { default as Modal } from './modal'
export { default as ModalContainer } from './modal-container'
export { default as StyledCardContainer } from './styled-card-container'
export { TabPanelsWithRef }
