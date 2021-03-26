import { red, green, teal, orange, yellow, purple, pink, brown } from '@material-ui/core/colors'

const palette = {
  common: {
    black: '#000000',
    white: '#ffffff',
  },
  primary: {
    light: '#009AFF',
    main: '#0075FF',
    dark: '#2242CD',
    50: '#E2F3FF',
    100: '#BAE0FF',
    200: '#8BCEFF',
    300: '#53BAFF',
    400: '#14AAFF',
    500: '#009AFF',
    600: '#008BFF',
    700: '#0075FF',
    800: '#1564EC',
    900: '#2242CD',
  },
  secondary: {
    light: '#9E9E9E',
    main: '#616161',
    dark: '#212121',
    50: '#FAFAFA',
    100: '#F5F5F5',
    200: '#EEEEEE',
    300: '#E0E0E0',
    400: '#BDBDBD',
    500: '#9E9E9E',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
  },
  red: {
    light: red[500],
    main: red[700],
    dark: red[900],
    ...red,
  },
  green: {
    light: green[500],
    main: green[700],
    dark: green[900],
    ...green,
  },
  teal: {
    light: teal[500],
    main: teal[700],
    dark: teal[900],
    ...teal,
  },
  orange: {
    light: orange[500],
    main: orange[700],
    dark: orange[900],
    ...orange,
  },
  yellow: {
    light: yellow[500],
    main: yellow[700],
    dark: yellow[900],
    ...yellow,
  },
  purple: {
    light: purple[500],
    main: purple[700],
    dark: purple[900],
    ...purple,
  },
  pink: {
    light: pink[500],
    main: pink[700],
    dark: pink[900],
    ...pink,
  },
  brown: {
    light: brown[500],
    main: brown[700],
    dark: brown[900],
    ...brown,
  },
  error: {
    light: '#ff5533', // selected using MUI's color tool
    main: '#ea0000',
    dark: '#af0000', // selected using MUI's color tool
  },
  warning: {
    light: '#ffe24b', // selected using MUI's color tool
    main: '#f4b000',
    dark: '#bc8100', // selected using MUI's color tool
  },
  info: {
    light: '#ae57ff', // selected using MUI's color tool
    main: '#741fff',
    dark: '#2e00ca', // selected using MUI's color tool
  },
  success: {
    light: '#64ff4f', // selected using MUI's color tool
    main: '#00d308',
    dark: '#00a000', // selected using MUI's color tool
  },
}

export default palette
