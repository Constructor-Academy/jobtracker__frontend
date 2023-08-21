import React, {useState} from 'react'
import {BeatLoader} from 'react-spinners'

import {LoaderContainer} from '../../style/containers'

// Style can be overriden by passing a css object from the parent. For example:
// import { css } from "@emotion/core";
// const override = css`
//     margin-left: 200px;
// `;


const Loader = ({avoidSidebar, cssOverride}) => {
    const [loading] = useState(true)

    return (
        <LoaderContainer avoidSidebar={avoidSidebar}>
            <BeatLoader
                color="#1fce90"
                css={cssOverride ? cssOverride : {}}
                loading={loading}
                size={30}
            />
        </LoaderContainer>)
}

export default Loader
