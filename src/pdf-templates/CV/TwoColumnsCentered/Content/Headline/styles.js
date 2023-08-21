import {StyleSheet} from '@react-pdf/renderer'

import styles from '../../styles'

export default StyleSheet.create({
    headline_container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: styles.space.M,
    },
    headline_icon: {
        fontFamily: 'fontello',
        fontSize: 16,
        opacity: 0.9,
        paddingRight: styles.space.S,
    },
    headline_title: {
        fontSize: styles.fontSize.L,
        fontWeight: 'bold',
        marginTop: 1,
    },
})
