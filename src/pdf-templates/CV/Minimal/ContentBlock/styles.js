import {StyleSheet} from '@react-pdf/renderer'

import styles from '../styles'

export default StyleSheet.create({
    page_content_block: {
        marginBottom: styles.space.M,
        fontSize: styles.fontSize.M,
    },
    page_content_block_title: {
        fontSize: styles.fontSize.L,
        marginBottom: styles.space.S,
        letterSpacing: 1,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
})
