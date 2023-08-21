import {StyleSheet} from '@react-pdf/renderer'

import styles from '../../styles'

export default StyleSheet.create({
    image_and_summary: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginBottom: styles.space.XL,
    },
    page_left_image_wrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    page_left_image: {
        backgroundColor: 'white',
        width: 88,
        height: 88,
        borderRadius: 90,
        marginBottom: styles.space.M,
        flexShrink: 0,
        objectFit: 'cover',
    },
    page_left_summary_description: {
        marginBottom: styles.space.M,
        width: '100%',
        textAlign: 'center',
    },
    page_left_summary_name: {
        fontSize: styles.fontSize.L,
        marginBottom: styles.space.S,
        textAlign: 'center',
        width: '100%',
    },
})
