import styled from 'styled-components/macro'

import {BaseButtonGrey} from '../buttons'
import {device} from '../devices'
import {InputTitle} from '../titles'
import {ProfileEditButtonBar} from './profile'

export const InputLabelCoverletter = styled(InputTitle)`
    margin-top: ${(props) => props.theme.spaceS};
`

export const DrawSignaturePad = styled.div`
    width: 100%;

    canvas {
        width: 100%;
        height: 150px;
        border: 1px solid ${(props) => props.theme.greyLightest};
        color: ${(props) => props.theme.blackLight};
        border-radius: ${(props) => props.theme.borderRadius};
        padding: ${(props) => props.theme.spaceXXS} 6px;
        transition: ${(props) => props.theme.transitionDefault};
        outline: none;
        margin-top: ${(props) => props.theme.spaceXXS};
    }
`

export const SignatureButtonBar = styled(ProfileEditButtonBar)`
    display: flex;
    justify-content: flex-end;
    margin-top: ${(props) => props.theme.spaceXXS};
`

export const SignatureButtons = styled(BaseButtonGrey)`
    :first-of-type {
        background: none;
        color: ${(props) => props.theme.accentColorLight};
    }
    :last-of-type {
        background: ${(props) => props.theme.greyLightest};
        :hover {
            background: ${(props) => props.theme.greyLighter};
        }
    }
`

export const TabToggleContainer = styled.div`
    margin: ${(props) => props.theme.spaceXXS} 0
        ${(props) => props.theme.spaceS};
    box-sizing: border-box;
    font-size: 0;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: stretch;
    input {
        width: 0;
        height: 0;
        position: absolute;
        left: -9999px;
    }
    input + label {
        margin: 0;
        cursor: pointer;
        padding: ${(props) => props.theme.spaceXS};
        position: relative;
        display: inline-block;
        border: solid 1px ${(props) => props.theme.greyLightest};
        background-color: ${(props) => props.theme.white};
        text-align: center;
        transition: border-color ${(props) => props.theme.transitionDefault}
                ease-out,
            color ${(props) => props.theme.transitionDefault} ease-out,
            background-color ${(props) => props.theme.transitionDefault}
                ease-out;

        /* ADD THESE PROPERTIES TO SWITCH FROM AUTO WIDTH TO FULL WIDTH */
        flex: 0 0 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        /* ----- */

        &:first-of-type {
            border-radius: ${(props) => props.theme.borderRadius} 0 0
                ${(props) => props.theme.borderRadius};
            border-right: none;
        }
        &:last-of-type {
            border-radius: 0 ${(props) => props.theme.borderRadius}
                ${(props) => props.theme.borderRadius} 0;
            border-left: none;
        }
    }
    input:hover + label {
        background-color: ${(props) => props.theme.greyLightest};
        border-color: ${(props) => props.theme.primaryBlueSuperLight};
    }
    input:checked + label {
        background-color: ${(props) =>
        props.theme.primaryBlueSuperLight} !important;
        color: ${(props) => props.theme.white} !important;
        border-color: ${(props) =>
        props.theme.primaryBlueSuperLight} !important;
        z-index: 1 !important;
    }
    input:focus + label {
        background-color: ${(props) => props.theme.primaryBlueSuperLight};
        color: ${(props) => props.theme.white};
        border-color: ${(props) => props.theme.primaryBlueSuperLight};
        z-index: 1;
    }
    input:not(:focus) + label {
        background-color: ${(props) => props.theme.white};
        color: ${(props) => props.theme.blackLight};
    }
    input:not(:checked) + label {
        background-color: ${(props) => props.theme.white};
        color: ${(props) => props.theme.blackLight};
    }
`

export const SignatureUploadZone = styled.div`
    border: 1px dashed ${(props) => props.theme.greyLightest};
    padding: ${(props) => props.theme.spaceXS};
    width: 100%;
    font-size: ${(props) => props.theme.textSizeS};
    color: ${(props) => props.theme.greyLighter};
    text-align: center;
    cursor: pointer;

    :hover {
        border: 1px solid ${(props) => props.theme.greyLighter};
    }

    @media ${device.mobileL} {
        justify-self: center;
    }
`

export const SignatureUpload = styled.img`
    object-fit: contain;
    width: 100%;
    height: 200px;
    flex-shrink: 0;
    object-position: center center;
    border: 1px solid ${(props) => props.theme.greyLightest};

`
