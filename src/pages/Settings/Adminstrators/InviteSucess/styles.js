import styled from 'styled-components/macro'


export const IconWrapper = styled.div`
    opacity: 0;
    animation: appear 1s;
    animation-delay: 1s;
    @keyframes appear {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
`

export const ConfirmationIcon = styled.img``
