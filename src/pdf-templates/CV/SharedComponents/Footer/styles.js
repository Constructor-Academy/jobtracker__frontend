import {StyleSheet} from '@react-pdf/renderer'

import styles from '../../Standard2Columns/styles'

export default StyleSheet.create({
    container: {
        display: 'flex',
        position: 'absolute',
        bottom: 8,
        right: 0,
        width: 25,
        height: 'auto',
        textAlign: 'center',
        lineHeight: 1,
        fontSize: styles.fontSize.XS,
        color: 'grey',
    },
})
