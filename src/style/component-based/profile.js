import styled from "styled-components/macro";
import { device } from "../devices";
import { BaseLinkStyled } from "../links";

// BASIC PROFILE PAGE LAYOUT
export const ProfilePageContainer = styled.div`
    padding: ${(props) => props.theme.spaceL};
    width: 100%;
    height: 100%;
    overflow: ${props => props.preventModalBackgroundScroll ? 'hidden' : 'scroll'};

    @media ${device.mobileL} {
        padding: ${(props) => props.theme.spaceS};
        max-width: 100%;
    }
`;

export const ProfileWidthContainer = styled.div`
    max-width: 1400px;
`;

export const ProfileContentsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 320px;
    grid-gap: ${(props) => props.theme.spaceL};

    @media ${device.mobileL} {
        grid-template-columns: 1fr;
        grid-gap: ${(props) => props.theme.spaceS};
    }
`;

export const ProfileLeftColumnContainer = styled.div``;

export const ProfileRightColumnContainer = styled.div``;

// PROFILE CARD
export const ProfileCardContainer = styled.div`
    width: 100%;
    padding: ${(props) => props.theme.spaceM};
    box-shadow: ${(props) => props.theme.boxShadowTiles};
    margin-bottom: ${(props) => props.theme.spaceL};
    background-color: ${(props) => props.theme.white};
    border-radius: ${(props) => props.theme.borderRadius};

    .toggle-edit {
        cursor: pointer;
    }

    @media ${device.mobileL} {
        margin-bottom: ${(props) => props.theme.spaceS};

        :last-child {
            margin-bottom: 0;
        }
    }
`;

export const ProfileCardHeaderWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin-bottom: ${(props) => props.theme.spaceS};
    height: ${(props) => props.theme.controlHeightMini};
`;

export const ProfileCardTitle = styled.h2`
    color: ${(props) => props.theme.primaryBlue};
    font-weight: 500;
`;

export const ProfileEditButtonBar = styled.div`
    margin-top: ${(props) => props.theme.spaceS};
    display: flex;
    justify-content: space-between;
`;

export const ButtonWrapperPDF = styled.div`
    display: grid;
    grid-template-rows: auto auto;
    grid-gap: ${(props) => props.theme.spaceS};
`;

export const ProfileCardParagraph = styled.p`
    font-size: ${(props) => props.theme.textSizeM};
    padding-top: ${(props) => props.theme.spaceXXS};
    padding-bottom: ${(props) => props.theme.spaceXXS};
    margin-bottom: ${(props) => props.theme.spaceXS};
    font-weight: ${(props) => props.theme.textWeightRegular};
    color: ${(props) =>
        props.disabled ? props.theme.greyLight : props.theme.blackLight};
    border-bottom: 1px solid transparent;
    display: flex;
    align-items: center;
    white-space: pre-wrap;

    :last-child {
        margin-bottom: 0;
    }
`;

export const ProfileCardLink = styled(BaseLinkStyled)`
    overflow-wrap: break-word;
    word-wrap: break-word;
    word-break: break-all;
    display: block;
    border-bottom: 1px solid transparent;
    padding-top: ${(props) => props.theme.spaceXXS};
    padding-bottom: ${(props) => props.theme.spaceXXS};
    margin-bottom: ${(props) => props.theme.spaceXS};
`;
