/* eslint-disable react/forbid-component-props */
import {Text} from '@react-pdf/renderer'
import React from 'react'

import styles from './styles'


const Footer = () => {
    return (
        <Text
            fixed
            render={
                ({pageNumber, totalPages}) => {
                    return totalPages && totalPages > 1 ? `${pageNumber} / ${totalPages}` : ' '
                }
            }
            style={styles.container}
        />
    )
}

export default Footer
