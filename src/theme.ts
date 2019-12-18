import { createMuiTheme, Theme as ThemeMuiDefault } from '@material-ui/core/styles'
import colors from './colors'

export const baseTheme = { colors }

export const muiThemeOptions = {
    palette: {
        primary: {
            main: colors.primary
        },
        secondary: {
            main: colors.secondary
        },
        error: {
            main: colors.feedback.danger
        },
        background: {
            default: colors.app.background.main
        }
    }
}

// Material ui theme extended
export const muiThemeExtended = {
    colors,
    ...createMuiTheme(muiThemeOptions)
}

// Material UI Interface theme extesion
export interface ThemeMui extends ThemeMuiDefault {
    palette: ThemeMuiDefault['palette']
    colors: Colors
}

// Util interface to use ThemeMui in styled-components
export interface StyledThemeMui {
    theme: ThemeMui
}

export type WithThemeMui<Props extends object> = Props & StyledThemeMui

// Raw colors
export type Colors = typeof colors

export interface Theme {
    theme: {
        colors: Colors
    }
}

// Util interface to extend (Props + Theme)
export type WithTheme<Props extends object> = Props & Theme
