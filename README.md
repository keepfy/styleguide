<div align="center">
    <img
        src="https://raw.githubusercontent.com/keepfy/styleguide/master/.storybook/assets/logo.png"
        width="200"
        alt="KEEPFY"
	/>
    <h2 style='font-family: sans-serif;'> STYLEGUIDE </h2>
</div>

A repository to center and document, initially, the colors of the Keepfy App.

## :package: `Install` 

> The package still in `alpha`

```sh
$ npm i @keepfy/styleguide
```
or

```sh
$ yarn add @keepfy/styleguide
```

## :books: `Usage`

The `work in progress` of the colors documentation is [here](https://keepfy-styleguide.now.sh/)

#### styled-components + typescript

Using the ThemeProvider of styled-components, the theme property will be injected into all styled-components below of it.

```tsx
import { theme } from '@keepfy/styleguide'
import styled, { ThemeProvider as StyledThemeProvider } from 'styled-components'

type Kind = 'critical' | 'medium' | 'high' | 'minimal' | 'low' | 'neutral'

interface IProps {
    kind: Kind
    children?: React.ReactNode
}

const CardStyled = styled('div')<IProps>(
    ({ theme, kind }) => ({
        padding: '0.5rem',
        borderLeft: `4px solid ${ theme.colors.priority[kind].main}`,
        backgroundColor: theme.colors.priority[kind].light,
        width: '144px',
        height: '80px',
        margin: '0 1rem 1rem 0',
        borderRadius: '4px',
        position: 'relative'
    })
)

const App = () => (
    <StyledThemeProvider theme={ theme }>
        <CardStyled kind="critical" />
    </StyledThemeProvider>
)
```

For auto-types of the `theme` inside of styled components:

Extend the keepfy theme in the default theme of `styled-components`

> [issue](https://github.com/styled-components/styled-components-website/issues/447)

```typescript
// eg.: src/types/styled.ts

import { theme } from '@keepfy/styleguide'

type Theme = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
```

Don't forget to add it to the `typeRoots` in `tsconfig.json`

Eg.: in `tsconfig.json`

```diff
{
    "compilerOptions": {
	...,
+	"typeRoots": ["./node_modules/@types/", "./src/types/styled.ts", ...]
    },
    ...
}

