import styled from 'styled-components/macro'
import street from '../assets/street.jpg'
import {device} from './devices'


// BASE BACKGROUND IMAGE:
export const BaseBackground = styled.img`
    background-image: url(${street});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    opacity: 0.20;
`

// BASE CIRCLE ON LANDING PAGE:
export const BaseCircleBackground = styled.div`
  border-radius: 50%;
  height: 130vh;
  width: 134vw;
  position: absolute;
  top: -80vh;
  right: -60vh;
  z-index: -1;
  background: linear-gradient(130deg, rgb(3,0,121) 0%, rgb(0,125,218) 40%, rgb(12,190,255) 100%);
  box-shadow: -9px 9px 20px 1px rgba(0,0,0,0.36);
`

export const CircleBackground1 = styled(BaseCircleBackground)``
export const CircleBackground2 = styled(BaseCircleBackground)`
  top: -60vh;
  right: -33vh;
  z-index: -2;
  box-shadow: -9px 9px 20px 1px rgba(0,0,0,0.40);

  @media ${device.mobileL} {
     height: 126vh;
     width: 134vw;
  }
`

export const CircleBackground3 = styled(BaseCircleBackground)`
  top: -40vh;
  right: -20vh;
  z-index: -3;
  box-shadow: -9px 9px 20px 1px rgba(0,0,0,0.57);

  @media ${device.mobileL} {
    width: 147vw;
  }
`

// CIRCLE BACKGROUND FOR LANDING PAGE NAVIGATION PAGES:
export const CircleBackground4 = styled(BaseCircleBackground)`
  height: 125vh;
  width: 130vw;
  top: -40vh;
  right: -15vh;
  z-index: -3;

  @media ${device.mobileL} {
    width: 150vw;
  }
`
