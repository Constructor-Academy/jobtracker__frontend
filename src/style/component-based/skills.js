import styled from "styled-components/macro";
import { device } from "../devices";

export const TagsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: ${(props) => (props.noMargin ? 0 : props.theme.spaceXXS)};
`;

export const SkillTag = styled.div`
    border-radius: ${(props) => props.theme.borderRadius};
    background-color: ${(props) => props.theme.primaryBlueSuperLight};
    width: fit-content;
    padding: 0 8px;
    margin-right: ${(props) => props.theme.spaceXS};
    margin-bottom: ${(props) => props.theme.spaceXS};
    color: ${(props) => props.theme.white};
    font-weight: ${(props) => props.theme.textWeightMedium};
    display: flex;
    align-items: center;
    height: 26px;
    overflow: hidden;
`;

export const LangTag = styled(SkillTag)`
    background-color: ${(props) => props.theme.primaryBlueLight};
`;

export const TagRemoveButton = styled.div`
    width: 26px;
    height: 100%;
    margin-right: -8px;
    color: white;
    margin-left: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-size: 18px;
    text-align: center;
    padding-bottom: 1px;
    padding-right: 2px;

    :hover {
        background: rgba(0, 0, 0, 0.2);
    }
`;

export const FormAddTag = styled.form`
    width: 100%;
    display: grid;
    align-items: center;
    grid-template-columns: 160px 1fr auto;
    grid-gap: ${(props) => props.theme.spaceS};
    margin-top: 4px;
    margin-bottom: 12px;

    @media ${device.mobileL} {
        grid-template-columns: 1fr;
        grid-gap: ${(props) => props.theme.spaceXS};
        margin-bottom: ${(props) => props.theme.spaceL};
    }
`;
