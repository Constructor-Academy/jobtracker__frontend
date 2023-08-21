import styled from 'styled-components/macro'
import {device as devices} from '../style/devices'


export const OverlayBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const OverlayContainer = styled.div`
    box-shadow: ${(props) => props.theme.boxShadowDark};
    background: ${(props) => props.theme.white};
    border-radius: ${(props) => props.theme.borderRadius};
    padding: ${(props) => props.theme.spaceL};
    max-height: 90vh;
    max-width: 90vw;
    display: flex;
    flex-direction: column;
    margin: ${(props) => props.theme.spaceM};
    position: relative;

    @media ${devices.mobileL} {
        max-width: 95vw;
        max-height: 95vh;
        margin: ${(props) => props.theme.spaceS};
        padding: ${(props) => props.theme.spaceM};
    }
`

export const OverlayContainerWizard = styled(OverlayContainer)`
    height: 920px;
    width: 720px;
    max-width: 100%;
`

export const OverlayContainerForm = styled(OverlayContainer)`
    width: 640px;
    max-width: 100%;
`

export const OverlayContainerDialog = styled(OverlayContainer)`
    width: 320px;
`

export const OverlayTitle = styled.p`
    width: 100%;
    font-size: ${(props) => props.theme.textSizeL};
    margin-bottom: ${(props) => props.theme.spaceM};
    color: ${(props) => props.theme.primaryBlue};
    font-weight: ${(props) => props.theme.textWeightMedium};
`

export const OverlaySubtitle = styled.p`
    width: 100%;
    margin-bottom: ${(props) => props.theme.spaceS};
    font-weight: ${(props) => props.theme.textWeightMedium};
`

export const OverlayStepper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: ${(props) => props.theme.spaceM};
    margin-bottom: ${(props) => props.theme.spaceL};

    @media ${devices.mobileL} {
        padding-bottom: 0;
        margin-bottom: ${(props) => props.theme.spaceM};
    }
`

export const OverlayStepperItem = styled.div`
    width: ${(props) => props.theme.controlHeightSmall};
    height: ${(props) => props.theme.controlHeightSmall};
    border-radius: ${(props) => props.theme.controlHeightSmall};
    border: 2px solid
        ${(props) =>
    props.isActive ? props.theme.accentColor : props.theme.greyLighter};
    background: ${(props) =>
    props.isActive ? props.theme.accentColor : props.theme.white};
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    color: ${(props) =>
    props.isActive ? props.theme.white : props.theme.greyLighter};
    transition: 0.2s;
    flex-shrink: 0;

    @media ${devices.mobileL} {
        width: ${(props) => props.theme.controlHeightMini};
        height: ${(props) => props.theme.controlHeightMini};
        font-size: ${(props) => props.theme.textSizeS};
        font-weight: 500;
    }
`

export const OverlayStepperItemText = styled.p`
    position: absolute;
    bottom: 0;
    color: ${(props) =>
    props.isActive ? props.theme.accentColor : props.theme.greyLighter};
    margin-bottom: -${(props) => props.theme.spaceM};

    @media ${devices.mobileL} {
        display: none;
    }
`

export const OverlayStepperLine = styled.div`
    width: 100%;
    min-width: 60px;
    max-width: 100px;
    height: 2px;
    background: ${(props) => props.theme.greyLighter};

    @media ${devices.mobileL} {
        min-width: 24px;
    }
`

export const OverlayContent = styled.div`
    flex-grow: 1;
    overflow-y: scroll;
    margin: -10px;
    padding: 10px;
`

export const OverlayContentOverflow = styled(OverlayContent)`
    overflow: visible;
`

export const OverlayFooter = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-between;
    align-items: flex-end;
    grid-gap: ${(props) => props.theme.spaceM};
    margin-top: ${(props) => props.theme.spaceL};
    width: 100%;
`

export const OverlayFooterGroup = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: ${(props) => props.theme.spaceM};

    @media ${devices.mobileL} {
        grid-template-columns: 1fr;
        grid-gap: ${(props) => props.theme.spaceS};
    }
`

// SPECIFICS
export const OverlayPreviewWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 200px;
    height: 100%;
    grid-gap: ${(props) => props.theme.spaceL};

    @media ${devices.mobileL} {
        grid-template-columns: 1fr;
    }
`

export const OverlayPDFPreview = styled.iframe`
    border: none;
    width: 100%;
    height: 100%;

    @media ${devices.mobileL} {
        display: none;
    }
`

export const OverlayPreviewSettings = styled.div``

export const OverlayColorSelector = styled.div``

export const OverlayColorSwatch = styled.div`
    width: 80px;
    height: ${(props) => props.theme.controlHeight};
    padding: 4px;
    border: 1px solid ${(props) => props.theme.greyLightest};
    border-radius: ${(props) => props.theme.borderRadius};
    margin-top: ${(props) => props.theme.spaceXXS};
    cursor: pointer;
`

export const OverlayColorField = styled.div`
    background-color: ${(props) => props.selectedColor};
    width: 100%;
    height: 100%;
    border-radius: 2px;
    border: 1px solid #f8f8f8;
`

export const OverlayColorPopover = styled.div`
    position: absolute;
    z-index: 2;
`

export const OverlayColorClickDummy = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`

export const OverlayCloseButton = styled.div`
    height: ${(props) => props.theme.controlHeightSmall};
    width: ${(props) => props.theme.controlHeightSmall};
    border-radius: ${(props) => props.theme.controlHeightSmall};
    position: absolute;
    top: ${(props) => props.theme.spaceM};
    right: ${(props) => props.theme.spaceL};
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${(props) => props.theme.blackLight};
    cursor: pointer;
    font-size: 28px;

    :hover {
        background: ${(props) => props.theme.greyLightest};
    }

    @media ${devices.mobileL} {
        display: none;
    }
`
