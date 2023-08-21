import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const BaseLinkStyled = styled.a`
    color: ${(props) => props.theme.primaryBlue};
    text-decoration: none;
    cursor: pointer;

    :hover {
        text-decoration: underline;
    }
`;

export const BasePageLinkStyled = styled(Link)`
    color: ${(props) => props.theme.primaryBlue};
    text-decoration: none;
    cursor: pointer;

    :hover {
        text-decoration: underline;
    }
`;

export const CredentialsLink = styled.p`
    font-size: 12px;
    align-self: flex-end;
    color: black;
    text-decoration: none;
    margin-right: 20px;
    cursor: pointer;
    :hover {
        text-decoration: underline;
        color: #4252ff;
    }
`;
