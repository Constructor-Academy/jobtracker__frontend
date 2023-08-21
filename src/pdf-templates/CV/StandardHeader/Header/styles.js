import {StyleSheet} from '@react-pdf/renderer'

import styles from '../styles'

export default StyleSheet.create({
    container: {
        marginTop: -styles.space.XL,
        paddingVertical: styles.space.L,
        paddingHorizontal: styles.space.XL,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },

    avatar: {
        backgroundColor: 'white',
        width: 80,
        height: 80,
        borderRadius: 80,
        marginRight: styles.space.L,
        flexShrink: 0,
        objectFit: 'cover',
    },

    summary_container: {
        marginRight: styles.space.XL,
        flexGrow: 1,
    },
    summary_name: {
        fontSize: styles.fontSize.XL,
        fontWeight: 'normal',
    },
    summary_description: {
        marginTop: styles.space.XS,
        marginLeft: 1,
        maxWidth: '40%',
    },

    contact_container: {
        maxWidth: 210,
        flexShrink: 0,
        maxHeight: '100%',
        display: 'flex',
        justifyContent: 'center',
        overflow: 'hidden',
    },
    contact_item_container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 4,
        maxWidth: '100%',
    },
    contact_item_icon_wrapper: {
        height: 14,
        width: 14,
        borderRadius: 14,
        marginRight: 6,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        fontFamily: 'Material',
        fontSize: 9,
    },
    contact_item_icon: {
        // ,
    },
    contact_item_content: {
        textDecoration: 'none',
        fontSize: styles.fontSize.S,
        maxWidth: '100%',
    },
})
