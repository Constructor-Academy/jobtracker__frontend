import Select from 'react-select'
import styled from 'styled-components/macro'

import {InputTitle} from './titles'

export const BaseInputStyled = styled.input`
    background: transparent;
    border: none;
    outline: none;
    border-bottom: 1px solid ${(props) => props.theme.greyLightest};
    height: 28px;
    width: 100%;
    color: ${(props) => props.theme.blackLight};
    transition: ${(props) => props.theme.transitionDefault};

    :hover {
        border-bottom-color: ${(props) => props.theme.greyLighter};
    }
    :focus {
        border-bottom-color: ${(props) => props.theme.accentColor};
    }
    ::placeholder {
        color: ${(props) => props.theme.greyLighter};
    }
    :disabled {
        color: ${(props) => props.theme.greyLighter};
    }
    :-webkit-autofill {
        -webkit-box-shadow: 0 0 0 50px transparent inset;
    }
`

export const TransparentInput = styled.input`
    background: none;
    border: none;
    outline: none;
    height: 100%;
    width: 100%;
    color: ${(props) => props.theme.blackLight};

    ::placeholder {
        color: ${(props) => props.theme.greyLighter};
    }
    :-webkit-autofill {
        -webkit-box-shadow: 0 0 0 50px white inset;
    }
`

export const InputTextArea = styled.textarea`
    background: none;
    border: 1px solid ${(props) => props.theme.greyLightest};
    color: ${(props) => props.theme.blackLight};
    border-radius: ${(props) => props.theme.borderRadius};
    padding: ${(props) => props.theme.spaceXXS} 6px;
    height: ${(props) => (props.fullHeight ? '100%' : '80px')};
    min-height: 80px;
    width: 100%;
    overflow-y: auto;
    transition: ${(props) => props.theme.transitionDefault};
    outline: none;
    margin-top: ${(props) => props.theme.spaceXXS};

    :hover {
        border-color: ${(props) => props.theme.greyLighter};
    }
    :focus {
        border-color: ${(props) => props.theme.accentColor};
    }
    ::placeholder {
        color: ${(props) => props.theme.greyLighter};
    }
`

export const SelectorStyled = styled(Select)`
    height: ${(props) => props.theme.controlHeight};

    :hover {
        border-color: ${(props) => props.theme.greyLighter};
    }
    :focus {
        border-color: ${(props) => props.theme.accentColor};
    }
`

export const BaseSelect = styled.select`
    background: none;
    border: #d1d1d1 solid 2px;
    color: #292929;
    border-radius: 5px;
    padding: 4px 8px;
    height: 38px;
    width: 95%;
    font-size: 15px;
`

export const ResetPasswordInput = styled(BaseInputStyled)`
    width: 75%;
    :hover,
    :active,
    :focus {
        width: 78%;
    }
`

export const ResetPasswordValidationInput = styled(BaseInputStyled)`
    width: 75%;
    :hover,
    :active,
    :focus {
        width: 78%;
    }
`

export const InfoLabel = styled(InputTitle)`
    font-size: 16px;
    color: rgba(0, 0, 0, 0.71);
`

export const ProfileInputTitle = styled(InputTitle)`
    width: 80%;
`

export const BaseSelectEdit = styled(BaseSelect)`
    width: 100%;
`

export const NewJobInputTitle = styled(InputTitle)`
    width: 100%;
    display: flex;
    flex-direction: column;
`

export const NewJobBaseInput = styled(BaseInputStyled)`
    width: 95%;
    :focus {
        width: 100%;
    }
`

export const NewJobInputTextArea = styled(InputTextArea)`
    width: 95%;
    :focus {
        width: 100%;
    }
`

export const ValidationInput = styled(BaseInputStyled)`
    width: 75%;
    :hover,
    :active,
    :focus {
        width: 78%;
    }
`
