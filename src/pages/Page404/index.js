import React from 'react'
import {useHistory} from 'react-router-dom'

import {BaseButtonInverted} from '../../style/buttons'
import {Page404Container} from '../../style/containers'


const Page404 = () => {
    const history = useHistory()

    return (
        <Page404Container>
            <p>404</p>
            <span>Where am I?</span>
            <BaseButtonInverted onClick={() => history.goBack()}>
                Take me Back
            </BaseButtonInverted>
        </Page404Container>
    )
}

export default Page404
