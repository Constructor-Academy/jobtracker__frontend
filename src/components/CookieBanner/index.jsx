import React, {useEffect, useState} from 'react'
import {useTranslation} from 'react-i18next'
import styled from 'styled-components'

import {BaseButton} from '../../style/buttons'
import {device} from '../../style/devices'

const CookieBannerContainer = styled.div`
    height: 135px;
    background: rgba(43, 43, 43);
    width: 102%;
    display: ${(props) => (props.cookieIsAccepted ? 'none' : 'flex')};
    justify-content: flex-end;
    align-items: flex-start;
    position: absolute;
    z-index: 5;
    bottom: -5vh;
    left: -10px;
    right: 0;
    padding: 3% 8% 0 10%;
    transform: rotate(-1.5deg);
    border-radius: 30px;

    p {
        font-size: 14px;
        margin-right: 20px;
        transform: rotate(1.5deg);
        color: white;
    }

    @media ${device.mobileL} {
        height: 180px;
        padding: 5% 10% 0 10%;
        width: 105%;
        p {
            font-size: 12px;
        }
    }
`

const CookieAcceptButton = styled(BaseButton)`
    transform: rotate(1.5deg);
    width: 120px;
    height: 38px;
    min-width: 119px;

    @media ${device.mobileL} {
        min-width: 110px;
    }
`

const CookieBanner = () => {
    const [cookieIsAccepted, setCookieIsAccepted] = useState(false)

    const setCookie = (cookieName, CookieValue, expiration) => {
        const date = new Date()
        date.setTime(date.getTime() + expiration * 24 * 60 * 60 * 1000)
        const expirationDate = 'expires=' + date.toUTCString()
        document.cookie =
            cookieName + '=' + CookieValue + ';' + expirationDate + ';path=/'
    }

    const getCookie = (cookieName) => {
        const name = cookieName + '='
        const decodedCookie = decodeURIComponent(document.cookie)
        const ca = decodedCookie.split(';')
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i]
            while (c.charAt(0) === ' ') {
                c = c.substring(1)
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length)
            }
        }
        return ''
    }

    const acceptCookieHandler = () => {
        setCookie('cookies-accepted', true, 365 * 2)
        setCookieIsAccepted(true)
    }

    useEffect(() => {
        if (getCookie('cookies-accepted')) {
            setCookieIsAccepted(true)
        }
    }, [cookieIsAccepted])
    const {t} = useTranslation()

    return (
        <CookieBannerContainer cookieIsAccepted={cookieIsAccepted}>
            <p>
                {t('landing_page:cookie.text')}
            </p>
            <CookieAcceptButton onClick={() => acceptCookieHandler()}>
                {t('landing_page:cookie.button')}
            </CookieAcceptButton>
        </CookieBannerContainer>
    )
}

export default CookieBanner
