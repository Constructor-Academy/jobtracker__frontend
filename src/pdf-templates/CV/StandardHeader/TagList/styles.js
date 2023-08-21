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

    tag_wrapper: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    tag: {
        borderRadius: 4,
        padding: '3pt 4pt',
        display: 'inline-block',
        marginRight: styles.space.XS,
        marginBottom: styles.space.XS,
        fontSize: styles.fontSize.S,
    },
})
