import { Priority, Feedback, Criticality } from './presets'

const primary = '#152849'
const secondary = '#118D16'

const neutrals = {
    black: '#000',
    white: '#FFF',
    transparent: 'rgba(0, 0, 0, 0)'
}

const grays = {
    g1: '#212121',
    g2: '#3d3d3d',
    g3: '#5b5b5b',
    g4: '#797979',
    g5: '#979797',
    g6: '#b5b5b5',
    g7: '#D4D4D4',
    g8: '#F2F2F2'
}

// Actions
const action = {
    confirm: '#118D16',
    cancel: '#D84315',
    neutral: primary
}

const feedback: Record<Feedback, string> = {
    danger: '#D84315',
    warning: '#FFA000',
    success: '#0E9043',
    info: '#2F80ED'
}

const priority: Record<Priority, { main: string, light: string }> = {
    critical: {
        main: '#D84315',
        light: '#FFCDBE'
    },
    high: {
        main: '#FF9900',
        light: '#FFE1B4',
    },
    medium: {
        main: '#E7BF11',
        light: '#FFF7D5'
    },
    low: {
        main: '#8BC34A',
        light: '#E9F4DD'
    },
    minimal: {
        main: '#56CCF2',
        light: '#DAF2FD'
    }
}

const criticality: Record<Criticality, string> = {
    high: '#FF9900',
    medium: '#E7BF11',
    low: '#8BC34A'
}

const app = {
    border: grays.g7,
    background: {
        main: '#F6F7FF',
        lighter: grays.g8,
    },
    text: {
        main: grays.g1,
        light: grays.g4,
        disabled: grays.g5
    }
}

export default {
    primary,
    secondary,
    app,
    priority,
    feedback,
    criticality,
    neutrals,
    grays,
    action
}
