import {PDFDownloadLink} from '@react-pdf/renderer'
import {MdCreate, MdArrowDownward, MdArrowUpward, MdClose} from 'react-icons/md'
import styled from 'styled-components/macro'

import {device as devices} from './devices'

export const BaseButton = styled.button`
    width: ${(props) => (props.fullWidth ? '100%' : '120px')};
    height: ${(props) => props.theme.controlHeight};
    background: ${(props) => props.theme.accentColor};
    margin-right: ${(props) => (props.marginRight ? '16px' : '0')};
    color: ${(props) => props.theme.white};
    border: none;
    outline: none;
    border-radius: ${(props) => props.theme.borderRadius};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    :hover {
        background: ${(props) => props.theme.accentColorDark};
    }
    :active {
        transform: translateY(1px);
    }
    :disabled {
        opacity: 0.4;
        cursor: not-allowed;
    }
`

export const BaseButtonInverted = styled(BaseButton)`
    background: none;
    border: solid 2px ${(props) => props.theme.accentColor};
    color: ${(props) => props.theme.accentColor};

    :hover {
        background: ${(props) => props.theme.accentColor};
        color: white;
        border: none;
    }
`

export const BaseButtonInvertedWhite = styled(BaseButton)`
    background: none;
    border: solid 2px ${(props) => props.theme.white};
    color: ${(props) => props.theme.white};

    :hover {
        background: ${(props) => props.theme.white};
        color: ${(props) => props.theme.accentColor};
        border: none;
    }
`

export const BaseButtonGrey = styled(BaseButton)`
    background: ${(props) => props.theme.greyLightest};
    color: ${(props) => props.theme.blackLight};

    :hover {
        background: ${(props) => props.theme.greyLighter};
    }
`

export const BaseButtonFlexEnd = styled(BaseButton)`
    align-self: flex-end;
`

export const RegistrationDisableButtonStyled = styled(BaseButton)`
    align-self: flex-end;
    background: ${(props) => props.theme.greyLighter};
    color: ${(props) => props.theme.white};

    :hover {
        background: ${(props) => props.theme.greyLighter};
        color: white;
        border: none;
        cursor: not-allowed;
    }
`

export const CloseButton = styled.button`
    width: 30px;
    height: 30px;
    color: #242424;
    cursor: pointer;
    border: none;
    background: none;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;

    :hover {
        border: solid #989898 1.5px;
        border-radius: 50%;
    }
    :active {
        transform: translateY(4px);
    }
`

export const EditButton = styled.button`
    width: 50px;
    height: 28px;
    background: ${(props) => props.theme.accentColor};
    color: white;
    border: none;
    border-radius: ${(props) => props.theme.borderRadius};
    cursor: pointer;
    font-size: 14px;

    :hover {
        background: #eb8f10;
    }
    :active {
        transform: translateY(4px);
    }
`

export const DeleteButton = styled.button`
    width: auto;
    height: 28px;
    background: ${(props) => props.theme.accentColor};
    color: white;
    border: none;
    border-radius: ${(props) => props.theme.borderRadius};
    cursor: pointer;
    padding: 5px;

    :hover {
        background: #eb3f3f;
    }

    :active {
        transform: translateY(4px);
    }
`

export const SignUpLogInButton = styled(BaseButtonInverted)`
    @media ${devices.mobileL} {
        margin-left: 8px;
    }
`

export const EditUserProfileButton = styled(EditButton)`
    align-self: flex-end;

    @media ${devices.mobileL} {
        margin-right: 8px;
    }
`

export const UserProfileCardButton = styled.button`
    border: 1px solid ${(props) => props.theme.accentColor};
    height: 32px;
    width: 100px;
    border-radius: 25px;
    background: white;
    font-size: 14px;
    color: ${(props) => props.theme.accentColor};
    cursor: pointer;

    a {
        font-size: 14px;
        color: ${(props) => props.theme.accentColor};
        text-decoration: none;
    }

    ${(props) => {
        if (props.dashboard) {
            return `
        background: ${props.theme.accentColor};
        color: white;
      `
        }
    }};
`

export const EditProfileCloseButton = styled(CloseButton)`
    align-self: flex-end;
    margin-right: 30px;
`

export const UpdateJobButton = styled(EditButton)`
    width: 65px;
    margin-top: 4px;
    min-height: 30px;
    margin-right: 10px;
    align-self: flex-end;
`

export const SubmitJobButton = styled(BaseButton)`
    cursor: pointer;
    width: 130px;
    min-height: 40px;
    min-width: 100px;
    margin-top: 8px;

    @media ${devices.mobileL} {
        margin-bottom: 10px;
    }
`

export const NewJobCloseButton = styled(CloseButton)`
    align-self: flex-end;
    margin-right: 30px;
`

export const AddAdminButton = styled(BaseButton)`
    width: 40px;
    height: 40px;
    min-height: 40px;
    border-radius: 50%;
    border: solid ${(props) => props.theme.accentColor} 1.5px;
    background: ${(props) => props.theme.accentColor};
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 6%;
    font-size: 21px;
    transition: 0.3s;
    align-self: flex-end;

    :hover {
        background: none;
        color: ${(props) => props.theme.accentColor};
        transition: 0.3s;
    }
`

export const CloseButtonInvitation = styled(CloseButton)`
    align-self: flex-end;
`

export const NotifyAdminsFoundJob = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 200px;
    min-height: 100px;
    padding: 10px;
    border-radius: 5%;
    margin-top: 5%;
    margin-left: 200px;
    border: solid ${(props) => props.theme.accentColor} 1.5px;
    background: ${(props) => props.theme.accentColor};
    color: white;
    transition: 0.3s;
    font-size: 24px;
    cursor: pointer;

    p {
        font-size: 12px;
    }

    :hover {
        background: none;
        color: ${(props) => props.theme.accentColor};
        transition: 0.3s;
    }

    @media ${devices.mobileL} {
        margin: 0;
        position: absolute;
        bottom: 70px;
        left: 10px;
        height: 60px;
        width: 140px;
        padding: 8px;
        font-size: 14px;
        font-weight: bold;
        opacity: 0.9;
        p {
            font-size: 10px;
            font-weight: normal;
        }
    }
`

export const DownloadButton = styled(PDFDownloadLink)`
    width: ${(props) => (props.fullWidth ? '100%' : '120px')};
    height: ${(props) => props.theme.controlHeight};
    background: ${(props) => props.theme.accentColor};
    color: ${(props) => props.theme.white};
    border: none;
    outline: none;
    border-radius: ${(props) => props.theme.borderRadius};
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    cursor: pointer;
    :hover {
        background: ${(props) => props.theme.accentColorDark};
    }
    :active {
        transform: translateY(1px);
    }
`


export const ProfileEditIconButton = styled(MdCreate)`
    width: ${(props) => props.theme.controlHeightMini};
    height: ${(props) => props.theme.controlHeightMini};
    border-radius: ${(props) => props.theme.borderRadius};
    padding: ${(props) => props.theme.spaceXXS};
    fill: ${(props) => props.theme.primaryBlue};
    cursor: pointer;
    transition: ${(props) => props.theme.defaultTransition};
    flex-shrink: 0;
    margin: -2px;

    :hover {
        background: ${(props) => props.theme.greyLightest};
    }
`

export const ArrowDownButton = styled(MdArrowDownward)`
    width: ${(props) => props.theme.controlHeightMini};
    height: ${(props) => props.theme.controlHeightMini};
    border-radius: ${(props) => props.theme.borderRadius};
    padding: ${(props) => props.theme.spaceXXS};
    fill: ${(props) => props.theme.primaryBlue};
    cursor: pointer;
    transition: ${(props) => props.theme.defaultTransition};
    flex-shrink: 0;
    margin: -2px;

    :hover {
        background: ${(props) => props.theme.greyLightest};
    }
`

export const ArrowUpButton = styled(MdArrowUpward)`
    width: ${(props) => props.theme.controlHeightMini};
    height: ${(props) => props.theme.controlHeightMini};
    border-radius: ${(props) => props.theme.borderRadius};
    padding: ${(props) => props.theme.spaceXXS};
    fill: ${(props) => props.theme.primaryBlue};
    cursor: pointer;
    transition: ${(props) => props.theme.defaultTransition};
    flex-shrink: 0;
    margin: -2px;

    :hover {
        background: ${(props) => props.theme.greyLightest};
    }
`

export const CloseIconButton = styled(MdClose)`
    width: ${(props) => props.theme.controlHeightMini};
    height: ${(props) => props.theme.controlHeightMini};
    border-radius: ${(props) => props.theme.borderRadius};
    padding: ${(props) => props.theme.spaceXXS};
    fill: ${(props) => props.theme.primaryBlue};
    cursor: pointer;
    transition: ${(props) => props.theme.defaultTransition};
    flex-shrink: 0;
    margin: -2px;

    :hover {
        background: ${(props) => props.theme.greyLightest};
    }
`
