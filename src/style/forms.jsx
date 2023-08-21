import styled from "styled-components/macro";
import { device } from "./devices";

export const BaseFormStyled = styled.form`
    width: 320px;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    margin: ${(props) => props.theme.spaceL} 0;

    h1 {
        margin-bottom: ${(props) => props.theme.spaceM};
    }

    main {
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    footer {
        margin-top: ${(props) => props.theme.spaceS};
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }

    @media ${device.mobileL} {
        max-width: 95vw;
    }
`;

export const FormFieldWrapperDefault = styled.div`
    padding-bottom: ${(props) => (props.noMargin ? 0 : "20px")};
`;

export const FormFieldWrapperDisplay = styled(FormFieldWrapperDefault)`
    padding-bottom: ${(props) => (props.noMargin ? 0 : props.theme.spaceXS)};
`;

export const FormFieldWrapperCentered = styled(FormFieldWrapperDefault)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media ${device.mobileL} {
        align-items: flex-start;
    }
`;

export const InputCounter = styled.p`
    margin-top: -24px;
    width: 100%;
    text-align: right;
    padding-right: 8px;
    color: ${(props) => props.theme.greyLighter};
    font-size: ${(props) => props.theme.textSizeS};
`;

export const InputRow = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: ${(props) => props.theme.spaceL};

    @media ${device.mobileL} {
        grid-template-columns: 1fr;
        grid-gap: ${(props) => props.theme.spaceXXS};
    }
`;

export const InputRowColor = styled(InputRow)`
    @media ${device.mobileL} {
        grid-template-columns: 1fr 1fr;
        grid-gap: ${(props) => props.theme.spaceL};
    }
`;

export const InputRowDate = styled(InputRow)`
    grid-template-columns: 1fr 1fr auto;
`;

export const InputBlock = styled.div``;

export const RegistrationValidationFormStyled = styled(BaseFormStyled)`
  height: 600px;
`

export const PasswordResetValidationFormStyled = styled(BaseFormStyled)`
    button {
      margin-bottom: ${props => props.theme.spaceS};
    }
`
