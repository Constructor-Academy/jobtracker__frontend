import React, {useContext} from 'react'
import {useTranslation} from 'react-i18next'
import {useDispatch, useSelector} from 'react-redux'
import Select from 'react-select'

import PDFPreview from '../../../../components/PDFPreview'
import {CurriculumDocument, availableTemplates} from '../../../../pdf-templates/CV'
import {setPdfSourceAction} from '../../../../store/actions/pdfGeneratorAction'
import {DownloadButton, BaseButtonInverted} from '../../../../style/buttons'
import {FormFieldWrapperDefault, InputRowColor} from '../../../../style/forms'
import {
    OverlayFooter,
    OverlayContent,
    OverlayPreviewWrapper,
    OverlayPreviewSettings,
} from '../../../../style/overlay'
import {InputTitle} from '../../../../style/titles'
import {CheckboxLabelWrapperProfile} from '../../../../style/wrappers'
import ColorSelector from '../ColorSelector'
import {MyContext} from '../context'


const StylingStep = ({mycontext, setWizardStep}) => {
    const {t} = useTranslation()
    const user = useSelector(state => state.userLoginReducer.user)
    const {
        content,
        colors, setColors,
        templateId, setTemplateId,
        showSkillLevel, setShowSkillLevel,
        showLanguageLevel, setShowLanguageLevel
    } = useContext(MyContext)
    const dispatch = useDispatch()

    const onColorChange = (name, color) => {
        const newColors = {...colors}
        newColors[name] = color
        setColors(newColors)
    }

    return (
        <>
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
                                        label: t(availableTemplates.find(template => template.id === templateId).name),
                                    }
                                }
                                onChange={
                                    (e) => {
                                        setTemplateId(e.value)
                                    }
                                }
                                options={
                                    availableTemplates.map(
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
                                <ColorSelector color={colors.mainColor} setColor={color => onColorChange('mainColor', color)} />
                            </FormFieldWrapperDefault>
                            <FormFieldWrapperDefault>
                                <InputTitle marginTop>
                                    {t('profile:pdf_styling.contrast')}
                                </InputTitle>
                                <ColorSelector color={colors.contrastColor} setColor={color => onColorChange('contrastColor', color)} />
                            </FormFieldWrapperDefault>
                        </InputRowColor>
                        <InputRowColor>
                            <FormFieldWrapperDefault>
                                <InputTitle>
                                    {t('profile:pdf_styling.accent_color')}
                                </InputTitle>
                                <ColorSelector color={colors.accentColor} setColor={color => onColorChange('accentColor', color)} />
                            </FormFieldWrapperDefault>
                            <FormFieldWrapperDefault>
                                <InputTitle>{t('profile:pdf_styling.contrast')}</InputTitle>
                                <ColorSelector color={colors.accentContrastColor} setColor={color => onColorChange('accentContrastColor', color)} />
                            </FormFieldWrapperDefault>
                        </InputRowColor>
                        <InputRowColor>
                            <FormFieldWrapperDefault>
                                <InputTitle>{t('profile:pdf_styling.font_color')}</InputTitle>
                                <ColorSelector color={colors.fontColor} setColor={color => onColorChange('fontColor', color)} />
                            </FormFieldWrapperDefault>
                        </InputRowColor>

                        {
                            (content.skills || content.languages) && (<FormFieldWrapperDefault>
                                <InputTitle marginBottom>
                                    {t('profile:cv_gen.show_proficiency')}
                                </InputTitle>
                                {
                                    content.skills && <CheckboxLabelWrapperProfile>
                                        <input
                                            defaultChecked={showSkillLevel}
                                            onChange={() => setShowSkillLevel(prevVal => !prevVal)}
                                            type="checkbox"
                                            value={showSkillLevel}
                                        />
                                        <p>{t('profile:sections.skills')}</p>
                                    </CheckboxLabelWrapperProfile>
                                }
                                {
                                    content.languages && <CheckboxLabelWrapperProfile>
                                        <input
                                            defaultChecked={showSkillLevel}
                                            onChange={() => setShowLanguageLevel(prevVal => !prevVal)}
                                            type="checkbox"
                                            value={showLanguageLevel}
                                        />
                                        <p>{t('profile:sections.languages')}</p>
                                    </CheckboxLabelWrapperProfile>
                                }
                            </FormFieldWrapperDefault>)
                        }

                    </OverlayPreviewSettings>
                </OverlayPreviewWrapper>
            </OverlayContent>

            <OverlayFooter>
                <BaseButtonInverted
                    onClick={() => setWizardStep(1)}
                >
                    Back
                </BaseButtonInverted>
                <DownloadButton
                    document={
                        <CurriculumDocument mycontext={mycontext} templateId={templateId} user={user} />
                    }
                    fileName={`cv_${user.first_name.toLowerCase()}_${user.last_name.toLowerCase()}.pdf`}
                >
                    {
                        ({blob, url, loading, error}) => {
                            dispatch(setPdfSourceAction(url))
                            return loading
                                ? t('profile:pdf_gen.loading')
                                : t('profile:pdf_gen.download')
                        }
                    }
                </DownloadButton>
            </OverlayFooter>
        </>
    )
}

export default StylingStep
