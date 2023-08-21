import {StyleSheet} from '@react-pdf/renderer'

import styles from '../styles'


export default StyleSheet.create({
    experience_card: {
        marginBottom: styles.space.M,
    },
    experience_card_title: {
        fontWeight: 800,
        fontSize: styles.fontSize.M,
        marginBottom: styles.space.XS,
    },
    experience_card_institution: {
        fontWeight: 500,
        marginBottom: styles.space.XS,
        fontSize: styles.fontSize.S,
        textDecorationColor: 'white',
    },
    experience_card_location: {
        lineHeight: 1.5,
        fontSize: styles.fontSize.S,
    },
    experience_card_date: {
        fontSize: styles.fontSize.S,
        marginBottom: styles.space.XS,
        fontWeight: 'bold',
    },
    experience_card_description: {
        lineHeight: 1.3,
        fontSize: styles.fontSize.M,
        display: 'flex',
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
