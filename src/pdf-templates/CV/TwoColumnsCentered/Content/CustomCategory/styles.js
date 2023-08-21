import {StyleSheet} from '@react-pdf/renderer'

import styles from '../../styles'


export default StyleSheet.create({
    page_content_block: {
        marginBottom: styles.space.M,
    },
    experience_card: {
        paddingBottom: styles.space.L,
        maxWidth: '100%',
    },
    experience_card_title: {
        fontWeight: 'medium',
        fontSize: styles.fontSize.Mbold,
        marginBottom: styles.space.XXS,
    },
    experience_card_institution: {
        marginBottom: styles.space.XXS,
        textDecoration: 'none',
    },
    experience_card_date: {
        fontSize: styles.fontSize.S,
        marginBottom: styles.space.XXS,
    },
    experience_card_description: {
        lineHeight: 12,
        maxWidth: '100%',
    },
})
