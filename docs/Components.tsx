import React from 'react'
import styled from 'styled-components'
import SnackbarContent from '@material-ui/core/SnackbarContent'
import { WithTheme, Theme } from '../src'

interface IProps {
    kind: 'critical' | 'medium' | 'high' | 'minimal' | 'low'
    tag?: string
    children: React.ReactNode
}

const CardStyled = styled('div')<WithTheme<IProps>>(
    ({ theme, kind }: WithTheme<IProps>) => ({
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

const CardTagStyled = styled('div')<WithTheme<IProps>>(
    ({ theme, kind }: WithTheme<IProps>) => ({
        padding: '0.5rem',
        borderLeft: `4px solid ${theme.colors.priority[kind].main}`,
        backgroundColor: 'white',
        width: '216px',
        height: '80px',
        margin: '0 1rem 1rem 0',
        boxShadow: '0 3px 10px #8888',
        borderRadius: '4px'
    })
)

const CardTagStyledPattern = styled(CardStyled)`
    & > * {
        z-index: 1;
        position: relative;
    }
    ::before {
        z-index: 0;
        content: '';
        opacity: 0.5;
        display: block;
        position: absolute;
        background-image: url("${require('./pattern.png')}");
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
    }
`

const Bold = styled('div')((p: Theme) => ({
    color: p.theme.colors.primary.main,
    fontWeight: 600
}))

const Desc = styled('div')((p: Theme) => ({
    color: p.theme.colors.primary.main,
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

const Tag = styled('span')<WithTheme<IProps>>(p => ({
    color: p.theme.colors.neutral.white,
    backgroundColor: p.theme.colors.priority[p.kind].main,
    fontSize: '0.65rem',
    padding: '0.125rem 0.25rem',
    borderRadius: '5px'
}))

const tagFromKind = (kind: IProps['kind']) => {
    return kind.charAt(0).toUpperCase() + kind.slice(1)
}

interface IFeedback {
    kind: 'error' | 'info' | 'success' | 'warning'
    children?: React.ReactNode
}

const SnackbarStyled = styled(SnackbarContent)<WithTheme<IFeedback>>(
    (p: WithTheme<IFeedback>) => ({
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

export const CardR = (props: IProps) =>
    <CardTagStyledPattern kind={ props.kind }>
        <Bold>{ props.tag }</Bold>
        <Desc>{ `A ${props.kind} situation` }</Desc>
    </CardTagStyledPattern>


export default Card
