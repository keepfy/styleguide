import React from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { MuiThemeProvider, StylesProvider } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'

interface IProps {
    theme: object
    children: React.ReactNode
}

export default ({ theme, children }: IProps) => (
  <StylesProvider injectFirst>
    <CssBaseline />
    <StyledThemeProvider theme={ theme }>
      <MuiThemeProvider theme={ theme }>
        { children }
      </MuiThemeProvider>
    </StyledThemeProvider>
  </StylesProvider>
)
