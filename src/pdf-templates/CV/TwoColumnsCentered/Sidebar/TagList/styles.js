import {StyleSheet} from '@react-pdf/renderer'

import styles from '../../styles'


export default StyleSheet.create({
    page_left_content_block: {
        paddingBottom: styles.space.XL,
        lineHeight: 1.5,
    },
    taglist_container: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
    },
    taglist_item: {
        borderRight: 0.5,
        paddingHorizontal: 4,
        display: 'inline-block',
        marginBottom: styles.space.XS,
        fontSize: styles.fontSize.S,
        fontFamily: 'Raleway',
    },
})
