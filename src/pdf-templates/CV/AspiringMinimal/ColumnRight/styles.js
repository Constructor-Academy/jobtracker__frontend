import {StyleSheet} from '@react-pdf/renderer'

import styles from '../styles'

export default StyleSheet.create({
    page_content_right: {
        maxWidth: '65%',
        minHeight: '100%',
        paddingLeft: styles.space.XL,
        paddingRight: styles.space.L,
    },
})
