import { configure, addParameters, addDecorator } from '@storybook/react'
import { create } from '@storybook/theming/create'
import { theme, ThemeProvider } from '../src'
import React from 'react'
import { SpaceBetween } from '../docs/Components'

const customTheme = create({
  base: 'light',

  colorPrimary: 'hotpink',
  colorSecondary: 'deepskyblue',

  brandTitle: 'Keepfy Styles',
  brandUrl: 'https://github.com/keepfy',
  brandImage: require('./assets/logo.png')
})

addParameters({
  options: {
    theme: customTheme
  }
})

addDecorator(
  storyFn =>
    <ThemeProvider theme={ theme }>
        { storyFn() }
    </ThemeProvider>
)

configure(require.context('../docs', true, /\.stories\.(mdx|tsx?)$/), module)
