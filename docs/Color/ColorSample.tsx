import React, { CSSProperties } from 'react'
import { themeBase as colors } from "../../src"

interface IProps {
    token: string,
    size: 'small' | 'medium' | 'large'
}

const wrapperStyle: CSSProperties = {
    margin: '0 2rem 2rem 0',
    boxSizing: 'border-box',
    display: 'inline-block',
    fontFamily: 'Roboto, sans-serif',
    color: colors.app.text_light,
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
    color: colors.app.text,
    fontWeight: 600,
    fontSize: '0.75rem',
    marginBottom: '0.25rem'
}

const colorBy = (token: string) => {
    for(const key in colors) {
        const obj = colors[key]
        if (typeof obj === 'string') return obj
        if (token in obj) {
            return obj[token]
        }
    }

    return '#000000'
}

const ColorSample = ({ token, size }: IProps) => {
    const value = colorBy(token)

    return (
        <div style={ wrapperStyle }>
            <div style={ colorStyle(value, size) }></div>
            <div style={ descStyle }>
                <div style={ tagStyle }>{ token }</div>
                <div>{ value }</div>
            </div>
        </div>
    )
}

export default ColorSample
