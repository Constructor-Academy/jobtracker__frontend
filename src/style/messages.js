import styled from 'styled-components/macro'

export const ErrorMessage = styled.span``

export const ErrorMessageContainer = styled.p`
    width: 100%;
    background-color: ${(props) => props.theme.statusYellow};
    margin-top: ${(props) => props.theme.spaceXS};
    color: ${(props) => props.theme.black};
    padding: ${(props) => props.theme.spaceS};
    border-radius: ${(props) => props.theme.borderRadius};
    font-size: ${(props) => props.theme.textSizeS};
    white-space: pre-wrap;
`
