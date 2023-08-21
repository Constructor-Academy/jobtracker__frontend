import styled from 'styled-components/macro'

import {device as devices} from './devices'

export const InputWrapperStyled = styled.div`
    height: 36px;
    width: 100%;
    display: flex;
    align-items: center;
    border-bottom: ${(props) => props.theme.greyLighter} solid 1px;
    color: ${(props) => props.theme.greyLighter};
    margin-bottom: ${(props) => props.theme.spaceS};

    :hover,
    :focus-within {
        border-bottom: ${(props) => props.theme.accentColor} solid 1px;
        transition: 0.5s;
    }

    img {
        min-height: 20px;
        min-width: 20px;
        cursor: pointer;
        margin: 0 8px;
    }
`

export const CheckboxLabelWrapperProfile = styled.label`
    display: flex;
    align-items: center;
    position: relative;
    margin-top: ${(props) => props.theme.spaceXXS};
    margin-bottom: ${(props) => props.theme.spaceXS};

    :last-child {
        margin-bottom: 0;
    }

    p {
        margin-left: 12px;
    }

    input[type="checkbox"] {
        height: 24px;
        width: 20px;
    }

    input[type="checkbox"]::before {
        display: flex;
        width: 20px;
        height: 20px;
        border-radius: 1px;
        border: 1px solid ${(props) => props.theme.greyLightest};
        background-color: ${(props) => props.theme.white};
        content: "";
        cursor: pointer;

        :hover {
            border-color: ${(props) => props.theme.accentColor};
        }
    }

    input[type="checkbox"]:checked::before {
        box-shadow: inset 0 0 0 3px #fff;
        background-color: ${(props) => props.theme.accentColor};
    }
`

export const CheckboxLabelWrapperStyled = styled.label`
    width: 100%;
    display: flex;
    align-items: center;
    position: relative;
    padding: 0 0 0 10px;
    margin-left: ${(props) => (props.isIndented ? '32px' : 0)};

    p {
        font-size: 12px;
        color: ${(props) => props.theme.greyLighter};
        margin-left: 23px;
    }

    //input[type="checkbox"] {
    //    //border-radius: 50%;
    //    height: 50%;
    //    width: 1%;
    //}

    input[type="checkbox"]::before {
        display: flex;
        width: 16px;
        height: 16px;
        border-radius: 2px;
        border: 1.5px solid ${(props) => props.theme.accentColor};
        background-color: ${(props) => props.theme.white};
        content: "";
    }

    input[type="checkbox"]:checked::before {
        box-shadow: inset 0 0 0 2px #fff;
        background-color: ${(props) => props.theme.accentColor};
    }

    span {
        font-size: 13px;
        color: ${(props) => props.theme.accentColor};
        cursor: pointer;
        :hover {
            text-decoration: underline;
            color: ${(props) => props.theme.accentColor};
        }
    }
`

export const FormWrapper = styled.form`
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    color: black;
`

export const SuccessWrapper = styled.div`
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    border-radius: 10px;
    position: absolute;
    background: rgba(0, 0, 0, 0.82);
    color: ${(props) => props.theme.colorSuccess};
    font-size: 25px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    padding: 60px 40px;
    text-align: center;
    z-index: 1;

    @media ${devices.mobileL} {
    }
`

export const ShowPasswordWrapper = styled.div`
    width: 50%;
    height: 30px;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media ${devices.mobileL} {
        justify-content: center;
        input {
            margin-right: ${(props) => (props.validation ? '5px' : '7px')};
        }
    }
`

export const CredentialsWrapper = styled.div`
    width: 400px;
    height: 400px;
    background: rgba(255, 255, 255, 0.66);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    //box-shadow: -6px 8px 21px -4px rgba(142,142,142,0.73);
    position: relative;

    @media ${devices.mobileL} {
        width: 80vw;
        height: 55vh;
        margin-top: 65px;
    }
`

export const EditorWrapper = styled.div`
    height: 300px;
    overflow-y: scroll;
    border: #d1d1d1 solid 2px;
    color: #212121;
    border-radius: 5px;
    width: 80%;
    padding: 4px 8px;
    font-size: 15px;

    :hover {
        border-bottom: #ff4f26 solid 2px;
        cursor: pointer;
        transition: 0.5s;
    }
`

export const IconWrapper = styled.div`
    opacity: 0;
    animation: appear 1s;
    animation-delay: 1s;
    @keyframes appear {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`

export const PasswordValidationForm = styled(FormWrapper)`
    position: absolute;
    background: white;
    height: 100%;
    border-radius: 10px;
    justify-content: space-around;
    padding: 20px;
    z-index: 2;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`

export const ReportBodyWrapper = styled.div`
    height: 100%;
    width: 100%;
    overflow: visible;

    @media ${devices.mobileL} {
        margin: 0;
        width: 100%;
    }
`

export const CardsWrapper = styled.div`
    min-height: 140px;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: ${(props) => props.theme.spaceM};

    @media ${devices.tablet} {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }

    @media ${devices.mobileL} {
        grid-template-columns: 1fr 1fr;
        align-items: center;
    }
`

export const UserInfoWrapper = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: column;
    justify-content: space-around;

    img {
        height: 60px;
        width: 60px;
        border-radius: 50%;
    }
`

export const CardButtonWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const CardStatisticsWrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, auto);
    align-items: center;
    height: 50px;
`

export const CardUserLocationWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    label {
        color: #606060;
        font-size: 13px;
    }
`

export const UpdateUserFormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    height: 80%;
    margin: 0;
    padding: 0;

    p {
        font-size: 12px;
    }

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        color: #272727;

        img {
            width: 80px;
            height: 80px;
            border-radius: 50%;

            :hover {
                opacity: 0.7;
            }
        }
    }

    @media ${devices.mobileL} {
        height: 90%;
    }
`

export const JobOverviewWrapper = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;

    p {
        a {
            font-size: 13px;
            text-decoration: none;
            color: ${(props) => props.theme.accentColor};
            font-weight: bold;
            line-height: 14px;

            :hover {
                text-decoration: underline;
            }
        }
        b {
            font-size: 11px;
        }
    }
    span {
        font-size: 12.5px;
        color: #6f6f6f;
        font-weight: bold;
        line-height: 14px;
    }

    @media ${devices.mobileL} {
        p {
            font-size: 8px;
            a {
                font-size: 10px;
                text-decoration: none;
                color: ${(props) => props.theme.accentColor};
                font-weight: bold;
                :hover {
                    text-decoration: underline;
                }
            }
            b {
                font-size: 8px;
            }
        }
        span {
            font-size: 10px;
            color: #6f6f6f;
            font-weight: bold;
        }
    }
`

export const JobDetailsWrapper = styled.div`
    height: 100%;
    width: 100%;
    padding: 0 60px 0 40px;
    display: flex;
    flex-direction: column;

    @media ${devices.mobileL} {
        padding: 0 40px 8px 14px;
    }
`

export const NotesWrapper = styled.div`
    height: 70%;
    overflow-y: auto;
    color: #0a0a0a;
    margin-bottom: 7px;
    margin-top: 4px;
    border: solid #e5e5e5 2px;
    border-radius: 5px;
    padding: 0 10px;
`

export const DescriptionWrapper = styled.div`
    height: 90%;
    max-height: 150px;
    width: 100%;
    color: #171717;
    margin-top: 4px;
    border: solid #e5e5e5 2px;
    border-radius: 5px;
    padding: 0 10px;
    overflow-y: auto;
    line-height: 18px;
`

export const IndustryWrapper = styled.div`
    width: 40%;
    display: flex;
    align-items: center;
    color: #2c2c2c;
    margin: 7px 0;
    font-size: 16px;
`

export const JobCardButtonsWrapper = styled.div`
    position: absolute;
    bottom: 45px;
    right: 35px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;

    img {
        :hover {
            border: solid rgba(0, 0, 0, 0.31) 1.5px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

    @media ${devices.mobileL} {
        bottom: 20px;
        right: 10px;
        height: 40%;

        img {
            height: 20px;
            width: 20px;
        }
    }
`

export const EditJobFormWrapper = styled.form`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const NoteEditWrapper = styled(EditorWrapper)`
    height: auto;
    max-height: 100px;
    width: 100%;
`

export const DescriptionEditorWrapper = styled(EditorWrapper)`
    height: 200px;
    max-height: 200px;
    line-height: 16px;
    overflow: scroll;
    width: 100%;
`

export const CurrentlyViewingWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;

    @media ${devices.mobileL} {
        /* position: absolute;
        bottom: 80px;
        height: 34px;
        width: 100%;
        margin: 0;
        padding: 0; */
    }
`

export const AddJobButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;

    @media ${devices.mobileL} {
        align-items: center;
    }
`

export const HeaderTitleWrapper = styled.div`
    display: flex;
    align-items: center;
    padding-top: 2px;

    div {
        font-size: ${(props) => props.theme.textSizeS};
        border-radius: 20px;
        padding: 4px 12px;
        color: ${(props) => props.theme.whiteDark};
        font-weight: 500;
        display: flex;
        justify-content: center;
        align-items: center;
        background: ${(props) => props.theme.primaryBlueLight};
    }

    @media ${devices.mobileL} {
        h1 {
            font-size: ${(props) => props.theme.textSizeXL};
            margin-bottom: ${(props) => props.theme.spaceXS};
        }

        div {
            display: none;
            font-size: 8px;
            border-radius: 15px;
            height: 14px;
            min-height: 12px;
            width: 65px;
            min-width: 60px;
        }
    }
`

export const NewJobFormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 100%;
    width: 90%;

    @media ${devices.mobileL} {
        justify-content: flex-start;
    }
`

export const ValidationFormWrapper = styled(FormWrapper)`
    height: 90%;
    width: 90%;
    section {
        display: flex;
        width: 100%;
        height: 100%;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        overflow-y: scroll;
        align-self: center;
    }
    @media ${devices.mobileL} {
        height: 96%;
        overflow-y: scroll;
        section {
            display: flex;
            width: 100%;
            height: 100%;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
            overflow-y: scroll;
            align-self: center;
        }
    }
`

export const InvitationAdminWrapper = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    display: flex;
    top: 0;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background: rgba(255, 255, 255, 0.95);
    border-radius: 5px;
    z-index: 3;
    color: #1d1d1d;
    padding: 20px 120px;
    box-shadow: -5px 6px 15px -5px rgba(0, 0, 0, 0.49);
    p {
        font-size: 18px;
    }

    animation: open 0.6s;
    @keyframes open {
        from {
            width: 0;
            opacity: 0;
        }
        to {
            width: 100%;
            opacity: 1;
        }
    }

    @media ${devices.mobileL} {
        position: fixed;
        height: 70%;
        width: 90%;
        top: 60px;
        background: white;
        border-radius: 5px;
        z-index: 3;
        color: #1d1d1d;
        padding: 0 20px;
        box-shadow: -5px 6px 15px -5px rgba(0, 0, 0, 0.49);
        animation: open 0.6s;
        @keyframes open {
            from {
                width: 0;
                opacity: 0;
            }
            to {
                width: 90%;
                opacity: 1;
            }
        }
    }
`

export const DateRangePickerWrapper = styled.div`
    @media ${devices.mobileL} {
        width: 120%;
        transform: scale(0.7);
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
`
