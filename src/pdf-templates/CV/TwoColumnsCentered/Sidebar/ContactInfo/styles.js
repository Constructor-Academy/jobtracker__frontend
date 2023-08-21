import {StyleSheet} from '@react-pdf/renderer'

import styles from '../../styles'


export default StyleSheet.create({
    contact_info_container: {
        width: '100%',
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
    },
    contact_info_item_content: {
        textDecoration: 'none',
        fontSize: styles.fontSize.S,
        marginBottom: styles.space.XS,
        textAlign: 'center',
        width: '100%',
        fontFamily: 'Raleway',
    },
    page_left_content_block: {
        paddingBottom: styles.space.XL,
        lineHeight: 1.5,
    },
})
