import {StyleSheet} from '@react-pdf/renderer'

import styles from '../styles'


export default StyleSheet.create({
    page_content_block: {
        marginBottom: styles.space.L,
    },
    page_content_block_smallmargin: {
        marginBottom: styles.space.S,
    },
    page_content_block_title_wrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: styles.space.S,
    },
    page_content_block_title: {
        fontSize: styles.fontSize.L,
        marginTop: 1,
    },
    experience_card: {
        paddingBottom: styles.space.M,
        height: 'auto',
    },
    experience_card_title: {
        fontWeight: 'medium',
        fontSize: styles.fontSize.MBold,
        marginBottom: styles.space.XXS,
    },
    experience_card_institution: {
        textDecoration: 'none',
        textDecorationColor: 'white',
        marginBottom: styles.space.XXS,
    },
    experience_card_date: {
        fontSize: styles.fontSize.S,
        minHeight: styles.fontSize.S,
        marginBottom: styles.space.XXS,
    },
    experience_bullet_wrapper: {
        display: 'flex',
        flexDirection: 'row',
    },
    bullet_experience: {
        display: 'flex',
        marginRight: 2,
        fontWeight: 'medium',
        marginBottom: 3,
    },
    experience_item: {
        display: 'flex',
        marginBottom: 3,
    },
})
