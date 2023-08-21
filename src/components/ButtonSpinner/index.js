import {css} from '@emotion/core'
import React from 'react'
import BeatLoader from 'react-spinners/BeatLoader'

const override = css`
    display: flex;
    justify-content: center;
    align-items: center;
`

const ButtonSpinner = () => {
    return (
        <BeatLoader color="white" css={override} loading size={10} />
    )
}

export default ButtonSpinner
