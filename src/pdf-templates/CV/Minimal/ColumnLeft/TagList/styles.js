import {StyleSheet} from '@react-pdf/renderer'

import styles from '../../styles'

export default StyleSheet.create({
    taglist_container: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    tag_item: {
        paddingRight: 5,
        display: 'inline-block',
        marginRight: styles.space.XS,
        fontSize: styles.fontSize.S,
        marginBottom: styles.space.XXS,
    },
})
