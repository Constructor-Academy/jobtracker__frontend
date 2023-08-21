import {createGlobalStyle} from 'styled-components/macro'

export const GlobalStyle = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    font-size: 15px;
    font-family: Roboto, serif;
    box-sizing: border-box;
    color: ${(props) => props.theme.blackLight};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-smooth: always;
    }
`

export const defaultTheme = {
    // Colors:
    accentColor: '#ED4A5F',
    accentColorDark: '#db374c',
    accentColorLight: '#F06173',

    pageBackground: '#F1F4F6',

    logoColor: '#ea441d',

    colorSuccess: '#0CCE6B',
    colorFail: '#d60801',
    statusYellow: '#F7E733',

    white: '#ffffff',
    whiteDark: '#f5f5f5',

    black: '#000000',
    blackLight: '#363636',

    greyLight: '#91999e',
    greyLighter: '#9ca6ad',
    greyLightest: '#dfe5eb',

    primaryBlue: '#054A91',
    primaryBlueLight: '#1D5692',
    primaryBlueSuperLight: '#62ADF9',

    transparency: 'rgba(255,255,255,0.29)',
    opacityModalColor: 'rgba(0,0,0,0.73)',

    // Box Shadows:
    boxShadowDark: `-5px 6px 15px 1px rgba(0,0,0,0.50)`,
    boxShadowLight: `-5px 6px 15px 1px rgba(0,0,0,0.25)`,
    boxShadowLighter: `-5px 6px 15px 1px rgba(0,0,0,0.15)`,
    boxShadowNav: `2px 0 24px 0 rgba(0,0,0,0.04)`,
    boxShadowTiles: `0 2px 24px 0 rgba(0,0,0,0.04)`,
    boxShadowInTiles: `0 1px 3px 0 rgba(0,0,0,0.2)`,

    // Properties
    borderRadius: '4px',
    transitionDefault: '0.1s',
    transitionLong: '0.4s',

    // Sizes
    controlHeight: '40px',
    controlHeightMini: '24px',
    controlHeightSmall: '32px',
    controlHeightLarge: '48px',
    spaceXXS: '4px',
    spaceXS: '8px',
    spaceS: '16px',
    spaceM: '24px',
    spaceL: '32px',
    spaceXL: '48px',
    spaceXXL: '220px',

    // Text
    textSizeXXL: '32px',
    textSizeXL: '24px',
    textSizeL: '20px',
    textSizeM: '15px',
    textSizeS: '12px',
    textWeightThin: '300',
    textWeightRegular: '400',
    textWeightMedium: '500',
    textWeightBold: '700',
}
