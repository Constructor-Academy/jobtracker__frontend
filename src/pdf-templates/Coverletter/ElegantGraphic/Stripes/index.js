/* eslint-disable react/forbid-component-props */
import {View} from '@react-pdf/renderer'
import React from 'react'


const Stripes = ({mainColor, containerStyles}) => {
    let stripes = []
    for(let i = 7; i > 1; i--){
        stripes.push(
            <View
                key={i}
                style={
                    {
                        height: 280,
                        transform: 'rotate(45deg)',
                        backgroundColor: mainColor,
                        opacity: i / 10,
                        padding: i,
                        margin: i,
                    }
                }
            />
        )
    }

    return (
        <View fixed style={containerStyles}>
            {stripes}
        </View>
    )
}

export default Stripes
