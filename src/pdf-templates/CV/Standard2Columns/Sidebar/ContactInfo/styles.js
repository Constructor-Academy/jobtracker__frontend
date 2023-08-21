import {StyleSheet} from '@react-pdf/renderer'

import styles from '../../styles'


export default StyleSheet.create({
    contact_info_container: {
        width: '100%',
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        paddingRight: styles.space.L,
    },
    contact_info_item_content: {
        textDecoration: 'none',
        fontSize: styles.fontSize.S,
        marginBottom: styles.space.XS,
        maxWidth: '100%',
    },
    page_left_content_block: {
        marginBottom: styles.space.XL,
        lineHeight: '1.5',
    },
})
