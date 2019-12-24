import { configure, addParameters, addDecorator } from '@storybook/react'
import { create } from '@storybook/theming/create'
import { muiThemeOptions, theme } from '../src'
import { ThemeProvider } from 'flipper-ui'
import { StylesProvider } from '@material-ui/core/styles'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import CssBaseline from '@material-ui/core/CssBaseline'
import React from 'react'

const customTheme = create({
  base: 'light',

  colorPrimary: 'hotpink',
  colorSecondary: 'deepskyblue',

  brandTitle: 'Keepfy Styles',
  brandUrl: 'https://github.com/keepfy/styleguide',
  brandImage: require('./assets/logo.png')
})

addParameters({
  options: {
    theme: customTheme,
    storySort: (a, b) => a[1].id.localeCompare(b[1].id)
  }
})

addDecorator(
  storyFn =>
  <StylesProvider injectFirst>
    <StyledThemeProvider theme={ theme }>
      <ThemeProvider options={ muiThemeOptions }>
        <CssBaseline />
        { storyFn() }
      </ThemeProvider>
    </StyledThemeProvider>
  </StylesProvider>
)

configure(require.context('../docs', true, /\.stories\.(mdx|tsx?)$/), module)
