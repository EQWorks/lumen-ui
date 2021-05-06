# lumen-ui

Design system MUI based components, graduated from react-labs

A [React](https://reactjs.org/) user interface kit built with [Material-UI](https://material-ui.com/).

## Getting started

Firstly, install `lumen-ui`:

```
npm i @eqworks/lumen-ui
```

Next, install the required peer dependencies:

```
npm i @material-ui/core @material-ui/icons @material-ui/lab react react-dom
```

Once you have installed all the required dependencies, wrap your application in a `<ThemeProvider>`:

```jsx
import { ThemeProvider } from "@eqworks/lumen-ui";

const MyApp = () => <ThemeProvider>Hello world!</ThemeProvider>;
```

Now, you can start using `lumen-ui` components:

```jsx
import { Button, Typography } from "@eqworks/lumen-ui";

const MyComponent = () => (
  <div>
    <Typography variant="h1">Hello world!</Typography>
    <Button type="primary">Click me!</Button>
  </div>
);
```

> **Note:** You can override the `lumen-ui` default theme by passing a `theme` prop to `<ThemeProvider>`.<br />[Click here to find out how to create your own theme using Material UI's `createMuiTheme` method](https://material-ui.com/customization/theming/#api).
