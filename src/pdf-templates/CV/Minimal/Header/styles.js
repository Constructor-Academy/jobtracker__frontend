import {StyleSheet} from '@react-pdf/renderer'

import styles from '../styles'


export default StyleSheet.create({
    header_container: {
        marginTop: -styles.space.L,
        marginBottom: styles.space.L,
        paddingHorizontal: styles.space.XL,
        paddingVertical: styles.space.XL,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    header_summary: {
        marginRight: styles.space.XXL,
        width: 360,
    },
    header_summary_name: {
        fontSize: styles.fontSize.XL,
        letterSpacing: 1.5,
        fontWeight: 'bold',
    },
    header_summary_actualPosition: {
        fontSize: styles.fontSize.Mbold,
        marginTop: styles.space.XS,
        marginLeft: 1,
    },
    header_summary_description: {
        fontSize: styles.fontSize.M,
        marginTop: styles.space.XS,
        marginLeft: 1,
    },
    header_image: {
        width: 80,
        height: 80,
        borderRadius: 80,
        marginRight: styles.space.S,
        flexShrink: 0,
        objectFit: 'cover',
    },
})
