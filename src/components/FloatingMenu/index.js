import React, {useState} from 'react'
import {CSVLink} from 'react-csv'
import {useTranslation} from 'react-i18next'
import {useSelector} from 'react-redux'
import styled from 'styled-components/macro'

import arrow_down from '../../assets/arrow_down.svg'
import csv_red from '../../assets/csv_red.svg'
import menu_grid from '../../assets/menu_grid.svg'
import menu_grid_white from '../../assets/menu_grid_white.svg'
import pdf_icon from '../../assets/pdf_icon.svg'
import settings_red from '../../assets/settings_red.svg'
import {device as devices} from '../../style/devices'

const FloatingMenuContainer = styled.div`
    position: fixed;
    border-radius: ${props => props.expand ? '10px' : '50px'};
    height: ${props => props.expand ? '400px' : '60px'};
    width: 60px;
    background: ${props => props.theme.accentColor};
    background: ${props => props.expand ? 'white' : null};
    bottom: 30px;
    right: 30px;
    font-size: 30px;
    display: flex;
    cursor: ${props => props.expand ? 'null' : 'pointer'};
    flex-direction: ${props => props.expand ? 'column' : null};
    z-index: 5;
    justify-content: ${props => props.expand ? 'space-around' : 'center'};
    align-items: center;
    transition: 0.5s;
    box-shadow: -6px 8px 21px -4px rgba(142,142,142,0.72);
    img {
        width: 30px;
        height: 30px;
    }
    span {
        border: solid ${props => props.theme.accentColor} 1px;
        padding: 0 20px;
        height: 20px;
        opacity: 0;
        width: 130px;
        font-style: italic;
        background: rgba(255,255,255,0.96);
        position: absolute;
        right: 75px;
        transition: 0.4s;
        font-size: 12px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${props => props.theme.accentColor};
        border-radius: 10px;
        cursor: none;
    }
    :hover {
        background: white;
        transition: 0.5s;
    }

    @media ${devices.mobileL} {
        bottom: 74px;
        width: 50px;
        height: ${props => props.expand ? '400px' : '50px'};
    }
`

const MenuBlock = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 100%;
    height: 100%;
    transition: 0.4s;
    border-radius: 10px;
    :hover {
        background: rgba(184,59,54,0.09);
        span {
            opacity: 1;
            transition: 0.4s;
            cursor:none;
        }
        img {
            width: 32px;
            height: 32px;
        }
    }
`


const FloatingMenu = ({data}) => {
    const {t} = useTranslation()
    const [expand, setExpand] = useState(false)
    const [redIcon, setRedIcon] = useState(false)
    const user = useSelector(state => state.userLoginReducer.user)
    if(expand){
        document.addEventListener('keyup', e => {
            if(e.key === 'Escape') setExpand(false)
        })
    }

    return (
        <FloatingMenuContainer
            expand={expand}
            onClick={() => setExpand(!expand)}
            onMouseLeave={() => setRedIcon(false)}
            onMouseOver={() => setRedIcon(true)}
        >
            {
                expand ? (
                    <>
                        <MenuBlock>
                            <span>{t('reports:menu.download_csv')}</span>
                            <CSVLink
                                data={data}
                                filename={`jobs-report-${user.email}-${(new Date()).toLocaleDateString()}.csv`}
                            >
                                <img alt="csv" src={csv_red} />
                            </CSVLink>
                        </MenuBlock>
                        <MenuBlock>
                            <span>{t('reports:menu.coming_soon')}!</span>
                            <img alt="pdf" src={pdf_icon} />
                        </MenuBlock>
                        <MenuBlock>
                            <span>{t('reports:menu.coming_soon')}!</span>
                            <img alt="menu" src={menu_grid} />
                        </MenuBlock>
                        <MenuBlock>
                            <span>{t('reports:menu.coming_soon')}!</span>
                            <img alt="menu" src={menu_grid} />
                        </MenuBlock>
                        <MenuBlock>
                            <span>{t('reports:menu.settings')}</span>
                            <img alt="setting_icon" src={settings_red} />
                        </MenuBlock>
                        <MenuBlock><img alt="arrow_down" src={arrow_down} /></MenuBlock>
                    </>
                ) : (<img alt="menu" src={redIcon ? menu_grid : menu_grid_white} />)
            }
        </FloatingMenuContainer>
    )
}

export default FloatingMenu
