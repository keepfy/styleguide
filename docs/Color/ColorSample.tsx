import React, { CSSProperties } from 'react'
import { theme } from "../../src"

const colors = theme.colors

interface IProps {
    set: string,
    token: string,
    size: 'small' | 'medium' | 'large'
}

const wrapperStyle: CSSProperties = {
    margin: '0 2rem 2rem 0',
    boxSizing: 'border-box',
    display: 'inline-block',
    fontFamily: 'Roboto, sans-serif',
    color: colors.app.text.light,
    fontWeight: 500,
    boxShadow: '0px 2px 6px 1px #9995',
    borderRadius: '4px'
}

const getSize = {
    small: '72px',
    medium: '100px',
    large: '140px'
}

const colorStyle = (color: string, size: IProps['size'] = 'medium') => ({
    borderRadius: '4px',
    backgroundColor: color,
    width: getSize[size],
    height: getSize[size]
})

const descStyle = {
    padding: '0.5rem'
}

const tagStyle = {
    color: colors.app.text.main,
    fontWeight: 600,
    fontSize: '0.75rem',
    marginBottom: '0.25rem'
}

type Pair<T> = [T, T]

const colorBy = ([set, token]: Pair<string | undefined>): string => {
    if(set in colors) {
        const obj = colors[set]
        if (typeof obj === 'string') return obj
        const tokens = token.split('.')
        return tokens.reduce((acc: object, cur: string) => {
            if (cur in acc) {
                return acc[cur]
            }

            return acc
        }, obj)
    }

    return '#000000'
}

const ColorSample = ({ set, token, size }: IProps) => {
    const value = colorBy([set, token])

    return (
        <div style={ wrapperStyle }>
            <div style={ colorStyle(value, size) }></div>
            <div style={ descStyle }>
                <div style={ tagStyle }>{ token ? token : set }</div>
                <div>{ value }</div>
            </div>
        </div>
    )
}

export default ColorSample
