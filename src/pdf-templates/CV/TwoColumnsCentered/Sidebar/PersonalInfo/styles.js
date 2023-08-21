import {StyleSheet} from '@react-pdf/renderer'

import styles from '../../styles'


export default StyleSheet.create({
    page_left_content_block: {
        marginBottom: styles.space.XL,
        lineHeight: '1.5',
    },
    page_left_personal_item: {
        fontSize: styles.fontSize.S,
        textAlign: 'center',
        fontFamily: 'Raleway',
    },
})
