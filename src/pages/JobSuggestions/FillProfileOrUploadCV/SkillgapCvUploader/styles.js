import styled  from 'styled-components/macro'

import {device} from '../../../../style/devices'


export const DropzoneContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const DropzoneWrapper = styled.div`
  width: 100%;
  height: 150px;
  border: dashed lightgrey 3px;
  border-radius: 4px;
  cursor: pointer;
  @media ${device.laptop} {
    width: 50%;
  }

  div {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }

  img {
    position: absolute;
    opacity: 0.1;
    height: 100px;
  }

  span {
    font-size: 18px;
    font-weight: bold;
    line-height: 20px;
    color: ${props => props.theme.primaryBlue};
  }

  p {
    font-size: 20px;
    color: rgba(38,38,38,0.78);
    letter-spacing: 0.6px;
  }

  button {
    height: 40px;
    width: 240px;
    margin: 0;
    align-self: center;
    z-index: 2;
  }
`
