import {StyleSheet} from '@react-pdf/renderer'

import styles from '../../../styles'

export default StyleSheet.create({
    contact_item_container: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        marginBottom: styles.space.XS,
    },
    contact_item_icon: {
        fontFamily: 'fontello',
        fontSize: styles.fontSize.M,
        paddingRight: styles.space.S,
    },
})
