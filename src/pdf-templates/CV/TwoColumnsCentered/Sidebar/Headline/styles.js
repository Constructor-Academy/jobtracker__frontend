import {StyleSheet} from '@react-pdf/renderer'

import styles from '../../styles'


export default StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: styles.space.XS,
    },
    title: {
        fontSize: styles.fontSize.L,
        fontFamily: 'Raleway',
        textTransform: 'capitalize',
    },
})
