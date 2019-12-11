import { createMuiTheme, Theme as ThemeMui } from '@material-ui/core/styles'
import colors from './colors'

export const themeBase = colors

// Material ui theme extended
export const theme = Object.assign({}, createMuiTheme({
    palette: {
        primary: {
            main: colors.main.primary
        },
        secondary: {
            main: colors.main.secondary
        },
        error: {
            main: colors.feedback.error
        },
        background: {
            default: colors.app.background
        }
    }
}), { colors })

type Colors = typeof colors

// Material UI Interface theme extesion
export interface Theme extends ThemeMui {
    palette: ThemeMui['palette']
    colors: Colors
}

// Util interface to use in styled-component
export interface ITheme {
    theme: Theme
}

// Raw colors
export interface ThemeBasic extends Colors{}

// Util interface to extend (Props + ITheme)
export type TWithTheme<Props extends object> = Props & ITheme