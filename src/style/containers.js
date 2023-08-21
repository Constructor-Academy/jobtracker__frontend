import {Link} from 'react-router-dom'
import styled from 'styled-components/macro'

import {device, device as devices} from './devices'
import {CredentialsWrapper, FormWrapper} from './wrappers'

export const AppContainer = styled.div`
    display: flex;
    align-items: center;
    height: 100vh;
    width: 100vw;
    position: relative;
    overflow: hidden;
`

export const BasePageContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    width: 100vw;
    height: 100vh;
    color: white;
    padding-left: 200px;
    background-color: ${(props) =>
        props.isWhite ? 'white' : props.theme.pageBackground};

    @media ${devices.mobileL} {
        padding-left: 0;
        padding-top: 50px;
        padding-bottom: 60px;
    }
`

export const AuthPageContainerStyled = styled.div`
    width: 100vw;
    height: 100vh;
    padding-left: 148px;
    display: flex;
    flex-direction: column;
    overflow: scroll;

    @media ${devices.mobileL} {
        padding-left: 0;
        padding-top: 50px;
    }
`

export const AuthPageContents = styled.div`
    width: 100%;
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    @media ${devices.mobileL} {
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }
`

export const LoaderContainer = styled.div`
    position: absolute;
    z-index: 999;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.43);
    border-radius: 8px;
    @media ${device.laptop} {
        left: ${props => props.avoidSidebar ? '200px' : 0};
        border-radius: ${props => props.avoidSidebar ? 0 : '8px'};
    }
`

export const ModalBackground = styled.div`
    position: absolute;
    z-index: 999;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    padding: ${props => props.theme.spaceXS};
    background: rgba(0, 0, 0, 0.43);
    @media ${device.laptop} {
        width: 100%;
        align-items: center;
    }
`

export const ModalBackgroundWithSidebar = styled(ModalBackground)`
    @media ${device.laptop} {
        width: calc(100% - 200px);
        margin-left: 200px;
    }
`

export const PageContentsContainerDefault = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    padding: ${(props) => props.theme.spaceL};

    @media ${devices.mobileL} {
        padding: ${(props) => props.theme.spaceS};
    }
`

export const ColumnsContainer = styled.div`
    height: 100%;
    display: flex;
    overflow-x: scroll;
    padding: ${(props) => props.theme.spaceL};
    margin: -${(props) => props.theme.spaceL};
    margin-right: 0;

    @media ${devices.mobileL} {
        min-height: 240px;
    }
`

export const CardContainer = styled.div`
    min-height: 120px;
    min-width: 225px;
    border-radius: ${(props) => props.theme.borderRadius};
    background: white;
    box-shadow: ${(props) => props.theme.boxShadowTiles};
    display: flex;
    padding: ${(props) => props.theme.spaceS};
    margin: ${(props) => props.theme.spaceXS};
    width: 20%;

    div {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        flex-grow: 1;
        font-size: ${(props) => props.theme.textSizeMedium};

        label {
            color: ${(props) => props.theme.primaryBlue};
            font-weight: ${(props) => props.theme.textWeightMedium};
            margin-bottom: ${(props) => props.theme.spaceXS};
            min-height: 40px; // Long german title...
        }
        span {
            flex-grow: 1;
            font-size: ${(props) =>
        props.favoriteIndustry
            ? '22px'
            : props.totalJobs
                ? '30px'
                : '26px'};
            color: ${(props) =>
        props.favoriteIndustry
            ? props.theme.accentColor
            : props.totalJobs
                ? '#167edf'
                : 'rgba(66,66,66,0.91)'};
            font-weight: bold;
        }
        p {
            display: flex;
            align-items: flex-end;
            width: 100%;
            min-width: 155px;
            color: #2b2b2b;

            img {
                width: 20px;
                min-width: 20px;
                height: 20px;
                margin-right: 4px;
            }
            b {
                color: #00ab00;
                margin-right: 8px;
            }
        }
    }

    img {
        width: 48px;
        height: 48px;
        align-self: center;
    }

    @media ${devices.mobileL} {
        min-width: 225px;
        margin-bottom: ${(props) => props.theme.spaceS};
        height: 120px;
        padding: 12px;

        img {
            width: 52px;
            height: 52px;
        }
        div {
            font-size: 12px;
            label {
                font-size: 16px;
                color: #262626;
                min-width: 100px;
            }
            span {
                font-size: 20px;
            }
        }
    }

    //
    //:last-child {
    //    margin-right: 0;
    //}
`

export const ChartContainer = styled.div`
    height: 40vh;
    min-height: 400px;
    background: ${(props) => props.theme.white};
    border-radius: ${(props) => props.theme.borderRadius};
    box-shadow: ${(props) => props.theme.boxShadowTiles};
    padding: ${(props) => props.theme.spaceM};
    padding-bottom: ${(props) => props.theme.spaceXL};
    margin-bottom: ${(props) => props.theme.spaceL};
    display: flex;
    flex-direction: column;

    @keyframes show {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    p {
        align-self: center;
        margin-top: 20px;
        color: #2a2a2a;
    }

    @media ${devices.mobileL} {
        min-height: 500px;
        position: static;
    }
`

export const Page404Container = styled.div`
    background-image: url("https://cdn.pixabay.com/photo/2018/08/16/19/47/landscape-3611227_1280.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.8;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-left: 100px;

    p {
        font-size: 100px;
        font-family: Helvetica, serif;
        opacity: 1;
        color: white;
    }

    span {
        font-size: 40px;
        font-family: Helvetica, serif;
        opacity: 1;
        color: white;
        margin-bottom: 10%;
    }
`

export const SideBarNoAuthContainer = styled.div`
    padding: 20px;
    height: 100%;
    width: 100px;
    background: ${(props) => props.theme.primaryBlue};
    display: ${(props) => (props.isLanding ? 'none' : 'flex')};
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    position: fixed;
    z-index: 1;
    @keyframes shrink {
        from {
            width: 200px;
        }
        to {
            width: 100px;
        }
    }
    img {
        width: 36px;
        cursor: pointer;
        margin-bottom: 6px;
        animation: opacityLogo 2s;
        @keyframes opacityLogo {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }
    }

    @media ${devices.mobileL} {
        height: 50px;
        width: 100%;
        position: absolute;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        top: 0;
        img {
            width: 28px;
            margin-right: 10px;
        }
    }
`

export const SideBarContainer = styled.div`
    height: 100vh;
    background: ${(props) => props.theme.primaryBlue};
    width: 200px;
    display: ${(props) => (props.isLanding ? 'none' : 'flex')};
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    position: fixed;
    z-index: 99;
    margin: 0;
    box-shadow: ${(props) => props.theme.boxShadowNav};

    @media ${devices.mobileL} {
        animation: none;
        height: 50px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        top: 0;
        flex-direction: row;
    }
`

export const AdminBoardContainer = styled.div`
    width: 100vw;
    height: 100%;
    left: 200px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`

export const AdminBoardInternalContainer = styled.div`
    box-shadow: -5px 6px 15px -5px rgba(0, 0, 0, 0.49);
    border-radius: 5px;
    width: 60%;
    display: flex;
    padding: 20px;
    flex-direction: column;
    margin-left: 200px;
    justify-content: flex-start;
    align-items: center;
    background: rgba(255, 255, 255, 0.71);
    position: relative;
    margin-top: 40px;
    overflow-y: scroll;

    @media ${devices.mobileL} {
        margin: 50px 0 0 10px;
        padding: 10px 0 0 0;
        box-shadow: none;
        border-radius: none;
        background: none;
        height: 82%;
        width: 100%;
        overflow: scroll;
        justify-content: flex-start;
    }
`

export const AdministeredUserContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    grid-gap: ${(props) => props.theme.spaceM};
    justify-content: flex-start;

    @media ${devices.mobileL} {
        justify-items: center;
        overflow-x: scroll;
    }
`

export const ResetPasswordContainer = styled(FormWrapper)`
    position: absolute;
    background: white;
    height: 100%;
    border-radius: 10px;
    padding: 45px 20px 20px 20px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`

export const ReportsContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media ${devices.mobileL} {
        height: calc(100vh - 16px);
        justify-content: flex-start;
    }
`

export const DatePickerContainer = styled.div`
    position: relative;
    z-index: 3;
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: flex-end;

    @media ${devices.mobileL} {
        height: 100%;
        padding: 0;
        margin: 0;
    }
`

export const HeaderSectionContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: auto 1fr auto;
    margin-bottom: ${(props) => props.theme.spaceM};

    @media ${devices.mobileL} {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-bottom: ${(props) => props.theme.spaceS};
    }
`

export const ReportHeaderSectionContainer = styled(HeaderSectionContainer)`
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media ${devices.mobileL} {
        padding: 0 5px;
    }
`

export const SettingsContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    @media ${devices.mobileL} {
        align-items: flex-start;
    }
`

export const AdministratorsContainer = styled.div`
    width: 100vw;
    height: 100%;
    left: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;

    @media ${devices.mobileL} {
        justify-content: center;
        align-items: flex-start;
    }
`

export const AdministratorsInternalContainer = styled.div`
    box-shadow: -5px 6px 15px -5px rgba(0, 0, 0, 0.49);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    margin-left: 200px;
    padding: 20px;
    width: 50%;
    margin-top: 5%;
    justify-content: space-between;
    align-items: center;
    background: rgba(255, 255, 255, 0.78);
    position: relative;

    p {
        color: #4d4d4d;
        font-style: italic;
    }

    @media ${devices.mobileL} {
        margin: 0 0 20px 0;
        overflow-y: scroll;
        padding: 0;
        justify-content: flex-start;
        width: 100%;
        height: 83%;
        align-items: center;
        background: none;
        box-shadow: none;
    }
`

export const NavigationContainer = styled.div`
    width: 100%;
    height: 100%;
    min-height: 280px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media ${devices.mobileL} {
        position: absolute;
        top: calc(100vh - 60px);
        width: 100%;
        height: 60px;
        display: flex;
        max-height: 61px;
        min-height: 60px;
        flex-direction: row;
        align-items: center;
        background: ${(props) => props.theme.primaryBlue};
        box-shadow: ${(props) => props.theme.boxShadowNav};
    }
`

export const LogoContainer = styled(Link)`
    text-decoration: none;
    min-height: 100px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: ${(props) => props.theme.spaceM};
    padding-right: ${(props) => props.theme.spaceL};
    position: relative;

    img {
        width: 40px;
        position: absolute;
        align-self: flex-start;
    }

    span {
        font-size: 10px;
        color: rgba(255, 255, 255, 0.4);
        display: flex;
        margin-top: 30px;
        align-self: flex-end;
        font-weight: bold;
        margin-right: 5px;
    }

    @media ${devices.mobileL} {
        min-height: 48px;
        height: 100%;
        flex-direction: row;
        justify-content: space-between;
        width: 134px;
        align-items: center;
        padding: 8px 0 8px 12px;
        margin: 0;

        img {
            width: 26px;
            position: static;
            margin: 0;
            align-self: center;
        }

        span {
            font-size: 8px;
            position: absolute;
            bottom: 9px;
            right: 12px;
            margin: 0;
        }
    }
`

export const UserProfileContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: -5px 6px 15px -5px rgba(0, 0, 0, 0.64);
`

export const UserDetailsContainer = styled.div`
    box-shadow: -5px 6px 15px -5px rgba(0, 0, 0, 0.49);
    border-radius: 5px;
    width: 50%;
    height: 70%;
    min-height: 260px;
    min-width: 360px;
    display: flex;
    margin-left: 200px;
    justify-content: center;
    align-items: center;
    padding: 2%;
    background: rgba(255, 255, 255, 0.71);

    @media ${devices.mobileL} {
        width: 80%;
        height: 60%;
        box-shadow: none;
        border-radius: none;
        min-height: 0;
        min-width: 0;
        margin: 0;
        justify-content: flex-start;
        align-items: flex-start;
        padding: 0;
        background: none;
    }
`

export const AdministeredUserCardContainer = styled.div`
    box-shadow: ${(props) => props.theme.boxShadowTiles};
    ${(props) => {
        if (props.selected) {
            return `
            border: ${props.theme.accentColor} solid 2px;
            `
        }
    }};

    height: 320px;
    border-radius: ${(props) => props.theme.borderRadius};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: ${(props) => props.theme.spaceM};
    background: ${(props) => props.theme.white};

    img {
        object-fit: cover;
        border: solid rgba(211, 211, 211, 0.86) 1px;
        width: 86px;
        height: 86px;
        border-radius: 100%;
    }

    p {
        font-size: 20px;
        color: #8f8f8f;
        font-weight: bold;
    }

    @media ${devices.mobileL} {
        height: 320px;
        min-height: 280px;
    }
`

export const EditUserContainerExternal = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.68);
`

export const EditUserContainerInternal = styled.div`
    width: 40%;
    height: 60%;
    background: white;
    border-radius: 4px;
    display: flex;
    padding: 0 0 0 0;
    margin-left: 200px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    animation: open 0.4s;
    @keyframes open {
        from {
            width: 0;
            opacity: 0;
        }
        to {
            width: 35%;
            opacity: 1;
        }
    }

    @media ${devices.mobileL} {
        width: 90%;
        height: 75%;
        margin: 0;
        padding: 0;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        overflow-y: scroll;
        animation: open 0.4s;
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

export const JobCardDetailsExternalContainer = styled.div`
    position: absolute;
    top: 0;
    margin-left: 200px;
    right: 0;
    bottom: 0;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.57);

    @media ${devices.mobileL} {
        margin: 0;
    }
`

export const JobCardDetailsInternalContainer = styled.div`
    width: 50%;
    height: 85%;
    margin-left: 200px;
    background: rgb(255, 255, 255);
    position: relative;
    padding: 15px 38px 30px 30px;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    animation: open 0.5s;
    @keyframes open {
        from {
            width: 0;
            opacity: 0;
        }
        to {
            width: 50%;
            opacity: 1;
        }
    }

    @media ${devices.mobileL} {
        width: 90%;
        height: 70%;
        margin: 0;
        overflow-y: scroll;
        padding: 8px 4px 0 0;
        animation: open 0.5s;
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

export const EditJobContainer = styled.div`
    background: rgb(255, 255, 255);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: absolute;
    padding: 3% 7%;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    z-index: 5;
`

export const CurrentlyViewingContainer = styled.div`
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.82);
    border: ${(props) => props.theme.accentColor} 1px solid;
    color: ${(props) => props.theme.accentColor};
    opacity: 0.85;
    height: 44px;
    font-size: 16px;
    padding: 12px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    min-height: 44px;
    margin-bottom: 8px;

    span {
        font-size: 16px;
        font-style: normal;
        font-weight: bold;
        margin: 0 8px;
    }

    @media ${devices.mobileL} {
        font-size: 13px;
        padding: 0 6px;
        margin: ${(props) => props.theme.spaceS} 0;
        height: 100%;
        min-height: 36px;
        max-height: 38px;
        background: rgba(255, 255, 255, 0.54);

        span {
            font-size: 13px;
            font-weight: bold;
            margin: 0 8px;
        }
    }
`

export const NewJobContainerExternal = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.68);

    @media ${devices.mobileL} {
        justify-content: flex-start;
    }
`

export const NewJobContainerInternal = styled.div`
    width: 48%;
    height: 82%;
    background: white;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 3%;
    border-radius: 6px;
    margin-left: 200px;

    @media ${devices.mobileL} {
        width: 95%;
        height: 75%;
        justify-content: flex-start;
        overflow-y: scroll;
        padding: 14px 0;
        margin: 0;
    }
`

export const ValidationContainer = styled(CredentialsWrapper)`
    width: 450px;
    background: white;
    height: 600px;
    @media ${devices.mobileL} {
        height: 100%;
        margin-top: 0;
    }
`

export const AdministratorListContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    grid-gap: ${(props) => props.theme.spaceM};
    justify-content: flex-start;

    @media ${devices.mobileL} {
        justify-items: center;
        overflow-x: scroll;
    }
`
