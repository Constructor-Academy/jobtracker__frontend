import styled from "styled-components/macro";
import { device as devices } from "../devices";
import { BaseLinkStyled } from "../links";

export const JobCardContainer = styled.div`
    height: auto;
    width: 100%;
    padding: 12px 8px 16px;
    transition: ${(props) => props.theme.transitionDefault};
    border: 1px solid transparent;
    border-bottom: 1px solid ${(props) => props.theme.greyLightest};
    background: ${(props) => props.theme.white};

    :hover {
        background: ${(props) => props.theme.greyLightest};
    }
    :active {
        border: 1px solid ${(props) => props.theme.primaryBlue};
        opacity: 0.8;
    }
    :focus:hover {
        border: 1px solid ${(props) => props.theme.primaryBlue};
        opacity: 0.8;
    }

    @media ${devices.mobileL} {
        padding: 8px;
    }
`;

export const JobCardHeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const JobCardHeaderDetails = styled.div``;

export const JobIcon = styled.img`
    width: ${(props) => props.theme.controlHeightMini};
    height: ${(props) => props.theme.controlHeightMini};
`;

export const JobIconInline = styled(JobIcon)`
    margin-right: ${(props) => props.theme.spaceXS};
    margin-top: ${(props) => props.theme.spaceXXS};
    margin-bottom: ${(props) => props.theme.spaceXXS};
`;

export const JobCardHeaderIcon = styled(JobIcon)`
    margin-left: ${(props) => props.theme.spaceS};
    margin-top: -2px;
    margin-right: 2px;

    @media ${devices.mobileL} {
        display: none;
    }
`;

export const JobCardJobTitle = styled(BaseLinkStyled)`
    font-weight: ${(props) => props.theme.textWeightMedium};
    display: block;
    margin-bottom: ${(props) => props.theme.spaceXXS};

    @media ${devices.mobileL} {
        margin-bottom: 0;
    }
`;

export const JobCardCompany = styled.p`
    margin-bottom: ${(props) => props.theme.spaceS};
`;

export const JobCardDate = styled.p`
    font-size: ${(props) => props.theme.textSizeS};
    color: ${(props) => props.theme.greyLighter};
`;

export const JobColumnContainer = styled.div`
    width: 15%;
    min-width: 240px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${(props) => props.theme.white};
    border-radius: ${(props) => props.theme.borderRadius};
    margin-right: ${(props) => props.theme.spaceS};
    box-shadow: ${(props) => props.theme.boxShadowTiles};
    overflow: hidden;

    @media ${devices.mobileL} {
        width: 14%;
        min-width: 180px;
    }
`;

export const JobColumnHeaderWrapper = styled.div`
    background: ${(props) => props.theme.primaryBlueLight};
    height: ${(props) => props.theme.controlHeightLarge};
    flex-shrink: 0;
    width: 100%;
    color: ${(props) => props.theme.whiteDark};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 ${(props) => props.theme.spaceS};

    img {
        width: 22px;
        height: 22px;
    }

    @media ${devices.mobileL} {
        height: 40px;
        min-height: 40px;
        font-size: 16px;
    }
`;

export const JobDroppableListWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;
    padding: ${(props) => props.theme.spaceXS};
`;
