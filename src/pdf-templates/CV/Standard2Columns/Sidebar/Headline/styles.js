import {StyleSheet} from '@react-pdf/renderer'

import styles from '../../styles'

export default StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: styles.space.XS,
    },
    icon: {
        fontFamily: 'fontello',
        fontSize: 16,
        opacity: '0.9',
        marginTop: 3,
        paddingRight: styles.space.S,
    },
    title: {
        fontSize: styles.fontSize.Mbold,
        fontWeight: 'bold',
        textTransform: 'capitalize',
    },
})
