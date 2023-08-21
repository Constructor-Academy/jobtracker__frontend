// STYLES
import {StyleSheet} from '@react-pdf/renderer'

import styles from '../styles'


export default StyleSheet.create({
    page_content_block: {
        marginBottom: styles.space.L,
    },
    page_content_block_title_wrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: styles.space.S,
    },
    page_content_block_title: {
        fontSize: styles.fontSize.L,
        marginTop: 1,
    },
    page_content_block_icon_wrapper: {
        height: 18,
        width: 18,
        borderRadius: 18,
        marginRight: 6,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
