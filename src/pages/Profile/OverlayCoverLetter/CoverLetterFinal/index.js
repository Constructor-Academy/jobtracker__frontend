import React from 'react'
import {useTranslation} from 'react-i18next'
import Select from 'react-select'

import PDFPreview from '../../../../components/PDFPreview'
import {availableTemplatesCoverletter} from '../../../../pdf-templates/Coverletter'
import {FormFieldWrapperDefault, InputRowColor} from '../../../../style/forms'
import {OverlayContent, OverlayPreviewSettings, OverlayPreviewWrapper} from '../../../../style/overlay'
import {InputTitle} from '../../../../style/titles'
import ColorSelector from '../../OverlayCurriculum/ColorSelector'


const CoverLetterFinal = ({mainColor, setMainColor, fontColor, setFontColor, templateId, setTemplateId}) => {
    const {t} = useTranslation()

    return (
        <OverlayContent>
            <OverlayPreviewWrapper>
                <PDFPreview />

                <OverlayPreviewSettings>
                    <FormFieldWrapperDefault>
                        <InputTitle marginBottom>
                            {t('profile:pdf_styling.template')}
                        </InputTitle>
                        <Select
                            defaultValue={
                                {
                                    value: templateId,
                                    label: t(availableTemplatesCoverletter.find(template => template.id === templateId).name),
                                }
                            }
                            onChange={e => {setTemplateId(e.value)}}
                            options={
                                availableTemplatesCoverletter.map(
                                    (template) => {
                                        return {
                                            value: template.id,
                                            label: t(template.name),
                                        }
                                    }
                                )
                            }
                        />
                    </FormFieldWrapperDefault>
                    <InputRowColor>
                        <FormFieldWrapperDefault>
                            <InputTitle marginTop>
                                {t('profile:pdf_styling.main_color')}
                            </InputTitle>
                            <ColorSelector
                                color={mainColor}
                                setColor={setMainColor}
                            />
                        </FormFieldWrapperDefault>
                        <FormFieldWrapperDefault>
                            <InputTitle marginTop>
                                {t('profile:pdf_styling.font_color')}
                            </InputTitle>
                            <ColorSelector
                                color={fontColor}
                                setColor={setFontColor}
                            />
                        </FormFieldWrapperDefault>
                    </InputRowColor>
                </OverlayPreviewSettings>
            </OverlayPreviewWrapper>
        </OverlayContent>
    )
}

export default CoverLetterFinal
