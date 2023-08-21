import styled from "styled-components/macro";
import { device as devices } from "./devices";

export const BaseIllustrations = styled.img``;

export const Logo = styled.img`
    width: 32px;
    height: 32px;
    flex-shrink: 0;
    margin-left: ${(props) => props.theme.spaceXS};

    @media ${devices.mobileL} {
        width: 24px;
        height: 24px;
    }
`;

export const ArrowImg = styled.img`
    margin-right: 5px;
`;

export const JobIcon = styled.img`
    min-width: 22px;
    height: 22px;
    align-self: center;
    margin-right: 6%;
    margin-left: 5px;
`;
