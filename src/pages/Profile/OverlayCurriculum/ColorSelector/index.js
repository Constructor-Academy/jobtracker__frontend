import React, {useState} from 'react'
import {ChromePicker} from 'react-color'

import {
    OverlayColorSelector,
    OverlayColorSwatch,
    OverlayColorField,
    OverlayColorClickDummy,
    OverlayColorPopover,
} from '../../../../style/overlay'

const ColorSelector = (props) => {
    const [pickerVisible, setPickerVisible] = useState(false)

    return (
        <OverlayColorSelector>
            <OverlayColorSwatch onClick={() => setPickerVisible(true)}>
                <OverlayColorField
                    selectedColor={props.color}
                />
            </OverlayColorSwatch>
            {
                pickerVisible === true && (
                    <OverlayColorPopover>
                        <OverlayColorClickDummy
                            onClick={() => setPickerVisible(false)}
                        />
                        <ChromePicker
                            color={props.color}
                            onChange={(color) => props.setColor(color.hex)}
                        />
                    </OverlayColorPopover>
                )
            }
        </OverlayColorSelector>
    )
}

export default ColorSelector
