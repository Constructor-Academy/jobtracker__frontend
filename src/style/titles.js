import styled from 'styled-components/macro'

import {device as devices, device} from './devices'

export const BaseTitleStyled = styled.h1`
    font-size: 30px;
    color: ${(props) => props.theme.blackLight};
    align-self: center;

    @media ${device.mobileL} {
        font-size: 22px;
    }
`

export const InputTitle = styled.label`
    color: ${(props) => props.theme.greyLighter};
    font-size: ${(props) => props.theme.textSizeS};
    font-weight: 500;
    padding-bottom: ${(props) => (props.marginBottom ? '4px' : '0')};
    padding-top: ${(props) => (props.marginTop ? '8px' : '0')};
    display: block;
`

export const AdminTitle = styled.h1`
    color: ${(props) => props.theme.accentColor};
    font-size: 20px;
    font-weight: normal;
    align-self: flex-start;
    margin-left: 10px;
`

export const ReportCardTitle = styled.h3`
    color: ${(props) => props.theme.primaryBlue};
    font-size: ${(props) => props.theme.textSizeM};
    font-weight: ${(props) => props.theme.textWeightMedium};

    @media ${devices.mobileL} {
    }
`

export const ChartTitle = styled.h2`
    color: ${(props) => props.theme.primaryBlue};
    font-size: ${(props) => props.theme.textSizeM};
    font-weight: ${(props) => props.theme.textWeightMedium};

    @media ${devices.mobileL} {
    }
`

export const LineTitle = styled.h2`
    color: ${(props) => props.theme.accentColor};
    font-size: 26px;
    font-weight: normal;

    @media ${devices.mobileL} {
        font-size: 22px;
    }
`

export const ReportTitle = styled.h1`
    color: ${(props) => props.theme.accentColor};
    font-size: 30px;
    font-weight: normal;

    @media ${devices.mobileL} {
        font-size: 20px;
        margin-left: 4px;
    }
`

export const SelectDateTitle = styled.h2`
    color: black;
    font-size: 15px;
    font-weight: bold;
    margin-right: 2%;

    @media ${devices.mobileL} {
        display: none;
    }
`

export const JobDescriptionTitle = styled.h2`
    color: ${(props) => props.theme.accentColor};
    font-size: 16px;
    font-weight: normal;
    padding-top: 20px;
`

export const AdministratorsTitle = styled.h1`
    color: ${(props) => props.theme.accentColor};
    font-size: 20px;
    font-weight: normal;
    align-self: flex-start;
    margin-left: 10px;
`

export const PageTitle = styled.h1`
    font-size: ${(props) => props.theme.textSizeXXL};
    margin-right: ${(props) => props.theme.spaceS};
    font-weight: ${(props) => props.theme.textWeightMedium};
`

export const LogoTitle = styled.h1`
    color: #ffffff;
    font-size: ${(props) => (props.noAuth ? '20px' : '27px')};
    font-family: "Khand", sans-serif;
    position: ${(props) => (props.noAuth ? 'static' : 'absolute')};
    align-self: ${(props) => (props.noAuth ? 'center' : 'flex-end')};
    font-weight: normal;
    cursor: pointer;

    @media ${devices.mobileL} {
        font-size: 20px;
        position: static;
        maring: 0;
        padding: 0;
        align-self: center;
    }
`

export const WorkingTitle = styled.span`
    font-size: 16px;
    font-style: normal;
    color: ${(props) =>
        props.working ? 'rgba(0,183,0,0.85)' : 'rgba(32,32,32,0.73)'};
    font-weight: bold;
`

export const LabelTitle = styled(InputTitle)`
    height: 25%;
    margin-bottom: 10px;
    p {
        color: #1d1d1d;
        font-size: 16px;
        margin-bottom: 5px;
    }
    a {
        font-size: 15px;
        display: flex;
        align-items: center;
        color: ${(props) => props.theme.accentColor};
        text-decoration: none;
        :hover {
            font-weight: bold;
            text-decoration: underline;
        }
    }

    @media ${devices.mobileL} {
        height: 25%;
        margin-bottom: 6px;
        font-size: 10px;
        p {
            color: #1d1d1d;
            font-size: 12px;
            margin-bottom: 5px;
        }
        a {
            font-size: 15px;
            display: flex;
            align-items: center;
            color: ${(props) => props.theme.accentColor};
            text-decoration: none;
            :hover {
                font-weight: bold;
                text-decoration: underline;
            }
        }
    }
`

export const JobCardDetailsTitle = styled.h1`
    font-size: 38px;

    @media ${devices.mobileL} {
        font-size: 20px;
    }
`

export const CompanyTitle = styled.h2`
    color: #626262;
    font-size: 20px;
    font-weight: bold;
`

export const LegendChartBottom = styled.h2`
    color: ${(props) => props.theme.accentColor};
    font-size: 26px;
    font-weight: normal;
    align-self: center;
    margin-top: -10px;

    @media ${devices.mobileL} {
        font-size: 22px;
    }
`
