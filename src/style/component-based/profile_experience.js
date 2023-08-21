import styled from "styled-components/macro";
import { device } from "../devices";
import { BaseLinkStyled } from "../links";

export const ExperienceContainer = styled.div`
    width: 100%;
    padding-bottom: ${(props) => (props.noBorder ? 0 : props.theme.spaceM)};
    margin-bottom: ${(props) => (props.noBorder ? 0 : props.theme.spaceM)};
    position: relative;
    border-bottom: 1px solid;
    border-bottom-color: ${(props) =>
        props.noBorder ? "transparent" : props.theme.greyLightest};
`;

export const ExperienceHeaderWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: ${(props) => props.theme.spaceXXS};
    font-size: ${(props) => props.theme.textSizeL};
    font-weight: ${(props) => props.theme.textWeightMedium};
`;

export const ExperienceTitleWrapper = styled.div``;

export const ExperienceTitle = styled.p`
    font-size: ${(props) => props.theme.textSizeL};
    color: ${(props) => props.theme.blackLight};
    font-weight: ${(props) => props.theme.textWeightMedium};
`;

export const ExperienceDuration = styled.p`
    color: ${(props) => props.theme.greyLighter};
    font-size: ${(props) => props.theme.textSizeS};
    font-weight: 500;
    margin-bottom: ${(props) => props.theme.spaceXXS};
`;

export const ExperienceTitleWrapperNew = styled(ExperienceTitleWrapper)`
    margin-bottom: ${(props) => props.theme.spaceS};
`;

export const ExperienceButtonBar = styled.div`
    margin-top: ${(props) => props.theme.spaceM};
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

export const ExperienceButtonBarRight = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: ${(props) => props.theme.spaceS};

    @media ${device.mobileL} {
        margin-top: ${(props) => props.theme.spaceS};
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
`;

export const ExperienceButtonInfoBar = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: ${(props) => props.theme.spaceS};
    align-items: center;
`;

export const ExperienceButtonBarInfo = styled.p`
    font-size: ${(props) => props.theme.textSizeS};
    color: ${(props) => props.theme.greyLighter};
`;

export const ExperienceInstitutionWrapper = styled.div`
    display: flex;
    margin-bottom: ${(props) => props.theme.spaceXXS};
    flex-wrap: wrap;
`;

export const ExperienceInstitution = styled(BaseLinkStyled)`
    margin-right: ${(props) => props.theme.spaceXXS};
    font-weight: 500;
`;

export const ExperienceLocation = styled.p`
    color: ${(props) => props.theme.greyLight};
`;

export const ExperienceDescription = styled.p`
    color: ${(props) => props.theme.blackLight};
    white-space: pre-wrap;
`;
