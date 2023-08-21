import {StyleSheet} from '@react-pdf/renderer'

import styles from '../../styles'

export default StyleSheet.create({
    header_container: {
        display: 'flex',
        width: '100%',
        borderBottom: 1,
        marginBottom: styles.space.L,
    },
    header_name: {
        fontSize: styles.fontSize.XL,
        marginBottom: styles.space.S,
        opacity: "1.5",
        textTransform: 'uppercase',
        letterSpacing: 0.5,
    },
    header_description: {
        fontSize: styles.fontSize.S,
        marginBottom: styles.space.L,
    },
})
