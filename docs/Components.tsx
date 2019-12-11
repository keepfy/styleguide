import React from 'react'
import styled from 'styled-components'
import SnackbarContent from '@material-ui/core/SnackbarContent'
import { TWithTheme, ITheme } from '../src'

interface IProps {
    kind: 'critical' | 'medium' | 'high' | 'minimal' | 'low'
    tag?: string
    children: React.ReactNode
}

const CardStyled = styled('div')<TWithTheme<IProps>>(
    (p: TWithTheme<IProps>) => ({
        padding: '0.5rem',
        borderLeft: `4px solid ${ p.theme.colors.priority[p.kind]}`,
        backgroundColor: p.theme.colors.priority[p.kind + '_light'],
        width: '144px',
        height: '80px',
        margin: '0 1rem 1rem 0',
        borderRadius: '4px'
    })
)

const CardTagStyled = styled('div')<TWithTheme<IProps>>(
    (p: TWithTheme<IProps>) => ({
        padding: '0.5rem',
        borderLeft: `4px solid ${p.theme.colors.priority[p.kind]}`,
        backgroundColor: 'white',
        width: '216px',
        height: '80px',
        margin: '0 1rem 1rem 0',
        boxShadow: '0 3px 10px #8888',
        borderRadius: '4px'
    })
)

const Bold = styled('div')((p: ITheme) => ({
    color: p.theme.colors.main.primary,
    fontWeight: 600
}))

const Desc = styled('div')((p: ITheme) => ({
    color: p.theme.colors.main.primary,
    fontSize: '0.75rem'
}))

const Card = (props: IProps) =>
    <CardStyled kind={ props.kind }>
        <Bold>{ props.tag }</Bold>
        <Desc>{ `A ${props.kind} situation` }</Desc>
    </CardStyled>

export const Box = styled('div')`
    display: flex;
    flex-wrap: wrap;
`

export const SpaceBetween = styled.div`
    display: flex;
    justify-content: space-between;
`

const Tag = styled('span')<TWithTheme<IProps>>(p => ({
    color: p.theme.colors.neutral.white,
    backgroundColor: p.theme.colors.priority[p.kind],
    fontSize: '0.65rem',
    padding: '0.125rem 0.25rem',
    borderRadius: '4px'
}))

const tagFromKind = (kind: IProps['kind']) => {
    return kind.charAt(0).toUpperCase() + kind.slice(1)
}

interface IFeedback {
    kind: 'error' | 'info' | 'success' | 'warning'
    children?: React.ReactNode
}

const SnackbarStyled = styled(SnackbarContent)<TWithTheme<IFeedback>>(
    (p: TWithTheme<IFeedback>) => ({
        backgroundColor: p.theme.colors.feedback[p.kind],
        borderRadius: '4px',
        color: 'white'
    })
)

export const Snackbar = (props: IFeedback) =>
    <div style={ { margin: '0 0 2rem 0' } }>
        <h4>{ props.kind }</h4>
        <SnackbarStyled kind={props.kind} message={
            <span>{ props.children }</span>
        }/>
    </div>

export const CardTag = (props: IProps) =>
    <CardTagStyled kind={ props.kind }>
        <SpaceBetween>
            <Bold>{ props.tag }</Bold> <Tag kind={ props.kind }>{ tagFromKind(props.kind) }</Tag>
        </SpaceBetween>
        <Desc>{ `A ${props.kind} situation` }</Desc>
    </CardTagStyled>

export default Card
