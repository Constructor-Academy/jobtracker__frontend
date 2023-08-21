import {StyleSheet} from '@react-pdf/renderer'

import styles from '../../styles'

export default StyleSheet.create({
    page_left_content_block: {
        marginBottom: styles.space.XL,
        lineHeight: '1.5',
    },
    taglist_container: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    taglist_item: {
        fontSize: styles.fontSize.S,
        borderRadius: 4,
        paddingTop: 2,
        paddingHorizontal: 4,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: styles.space.XS,
        marginBottom: styles.space.XS,
    },
})