import styled from "styled-components/macro";
import { device } from "../devices";

// BASIC LAYOUT AND TYPOGRAPHY

// HEADER
export const ProfileHeaderContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    position: relative;

    @media ${device.mobileL} {
        flex-direction: column;
        align-items: center;
    }
`;

export const ProfileHeaderLeftContainer = styled.div`
    max-width: 320px;
    flex-shrink: 0;
    border-right: 1px solid ${(props) => props.theme.greyLightest};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-left: ${(props) => props.theme.spaceS};
    padding-right: ${(props) => props.theme.spaceL};
    padding-top: ${(props) => props.theme.spaceXXS};
    padding-bottom: ${(props) => props.theme.spaceXXS};

    @media ${device.mobileL} {
        width: 100%;
        max-width: 100%;
        border-right: none;
        border-bottom: 1px solid ${(props) => props.theme.greyLightest};
        padding: 0;
        padding-bottom: ${(props) => props.theme.spaceS};
    }
`;

export const ProfileHeaderRightContainer = styled.div`
    padding-left: ${(props) => props.theme.spaceL};
    padding-top: ${(props) => props.theme.spaceXXS};
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media ${device.mobileL} {
        width: 100%;
        padding-left: 0;
        padding-top: ${(props) => props.theme.spaceS};
    }
`;

export const ProfileHeaderPicture = styled.img`
    object-fit: cover;
    width: 120px;
    height: 120px;
    flex-shrink: 0;
    object-position: center center;
    border-radius: 50%;
    border: 1px solid ${(props) => props.theme.greyLightest};

    @media ${device.mobileL} {
        width: 96px;
        height: 96px;
    }
`;

export const ProfileHeaderName = styled.h1`
    color: ${(props) => props.theme.primaryBlue};
    font-size: ${(props) => props.theme.textSizeL};
    font-weight: ${(props) => props.theme.textWeightMedium};
    word-break: break-all;
    margin-top: ${(props) => props.theme.spaceXS};
    margin-bottom: ${(props) => props.theme.spaceXXS};
    text-align: center;
`;

export const ProfileHeaderOrigin = styled.p`
    color: ${(props) => props.theme.greyLight};
`;

export const ProfileHeaderFloatingButtonWrapper = styled.div`
    position: absolute;
    top: 0;
    right: 0;
`;

export const ProfileHeaderEditFirstRow = styled.div`
    display: grid;
    grid-template-columns: auto 1fr 1fr;
    grid-gap: ${(props) => props.theme.spaceL};
    margin-bottom: ${(props) => props.theme.spaceM};

    @media ${device.mobileL} {
        grid-template-columns: 1fr;
        grid-gap: ${(props) => props.theme.spaceS};
        margin-bottom: ${(props) => props.theme.spaceS};
    }
`;

export const ProfileHeaderEditAvatarZone = styled.div`
    border: 1px dashed ${(props) => props.theme.greyLightest};
    padding: ${(props) => props.theme.spaceXS};
    width: 136px;
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
`;

// ...
