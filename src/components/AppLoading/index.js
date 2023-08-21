import {css} from '@emotion/core'
import React from 'react'
import BeatLoader from 'react-spinners/BeatLoader'

const override = css`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
`

const AppLoading = () => {
    return (
        <BeatLoader color="#054A91" css={override} loading size={10} />
    )
}

export default AppLoading
