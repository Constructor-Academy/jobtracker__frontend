import React from 'react'
import {useTranslation} from 'react-i18next'

import {FormFieldWrapperDefault, InputBlock} from '../../../../style/forms'
import {BaseInputStyled, InputTextArea} from '../../../../style/inputs'
import {OverlayContent, OverlayTitle} from '../../../../style/overlay'
import {InputTitle} from '../../../../style/titles'


const CoverletterInputs = ({job, applicationData, setApplicationData, mapSeparators, skills}) => {
    const {t} = useTranslation()

    const onChangeHandler = e => {
        const {name, value} = e.target
        const newData = {...applicationData}
        newData[name] = value
        setApplicationData(newData)
    }

    return (
        <OverlayContent>
            <InputBlock>
                <OverlayTitle>{t('profile:letter_gen.coverletter.title')}</OverlayTitle>
                <FormFieldWrapperDefault>
                    <InputTitle marginBottom>{t('profile:letter_gen.coverletter.content_title')}</InputTitle>
                    <InputTextArea
                        name="title"
                        onChange={onChangeHandler}
                        value={applicationData.title}
                    />
                </FormFieldWrapperDefault>
                <FormFieldWrapperDefault>
                    <InputTitle>{t('profile:letter_gen.coverletter.salutation')}</InputTitle>
                    <BaseInputStyled
                        name="salutation"
                        onChange={onChangeHandler}
                        type="text"
                        value={applicationData.salutation}
                    />
                </FormFieldWrapperDefault>
                {/*<FormFieldWrapperDefault>*/}
                {/*    <InputTitle>Main product of {job.company}</InputTitle>*/}
                {/*    <BaseInputStyled*/}
                {/*        name="product"*/}
                {/*        onChange={e => setMainProduct(e.target.value)}*/}
                {/*        placeholder={mainProduct}*/}
                {/*        type="text"*/}
                {/*        value={mainProduct}*/}
                {/*    />*/}
                {/*</FormFieldWrapperDefault>*/}
                <FormFieldWrapperDefault>
                    <InputTitle marginBottom>
                        {t('profile:letter_gen.coverletter.impressed', {company_name: job.company})}
                    </InputTitle>
                    <InputTextArea
                        name="impressed"
                        onChange={onChangeHandler}
                        value={applicationData.impressed}
                    />
                </FormFieldWrapperDefault>
                <FormFieldWrapperDefault>
                    <InputTitle marginBottom>
                        {t('profile:letter_gen.coverletter.contribution', {company_name: job.company})}
                    </InputTitle>
                    <InputTextArea
                        name="intro_text_list"
                        onChange={onChangeHandler}
                        value={applicationData.intro_text_list}
                    />
                </FormFieldWrapperDefault>
                <FormFieldWrapperDefault>
                    <InputTitle>{t('profile:letter_gen.coverletter.skills.title')}</InputTitle>
                    <BaseInputStyled
                        name="skills_title"
                        onChange={onChangeHandler}
                        type="text"
                        value={applicationData.skills_title}
                    />
                </FormFieldWrapperDefault>
                <FormFieldWrapperDefault>
                    <InputTitle marginBottom>
                        {t('profile:letter_gen.coverletter.skills.desc', {skills: mapSeparators(skills)})}
                    </InputTitle>
                    <InputTextArea
                        name="skills_content"
                        onChange={onChangeHandler}
                        value={applicationData.skills_content}
                    />
                </FormFieldWrapperDefault>

                <FormFieldWrapperDefault>
                    <InputTitle marginBottom>
                        {t('profile:letter_gen.coverletter.skills.edu')}
                    </InputTitle>
                    <InputTextArea
                        name="main_education"
                        onChange={onChangeHandler}
                        value={applicationData.main_education}
                    />
                </FormFieldWrapperDefault>

                <FormFieldWrapperDefault>
                    <InputTitle>{t('profile:letter_gen.coverletter.experience.title')}</InputTitle>
                    <BaseInputStyled
                        name="experiences_sector_title"
                        onChange={onChangeHandler}
                        type="text"
                        value={applicationData.experiences_sector_title}
                    />
                </FormFieldWrapperDefault>
                <FormFieldWrapperDefault>
                    <InputTitle marginBottom>
                        {t('profile:letter_gen.coverletter.experience.desc', {company_name: job.company})}
                    </InputTitle>
                    <InputTextArea
                        name="experiences_sector_content"
                        onChange={onChangeHandler}
                        value={applicationData.experiences_sector_content}
                    />
                </FormFieldWrapperDefault>
                <FormFieldWrapperDefault>
                    <InputTitle>
                        {t('profile:letter_gen.coverletter.professional.title')}
                    </InputTitle>
                    <BaseInputStyled
                        name="experiences_personal_title"
                        onChange={onChangeHandler}
                        type="text"
                        value={applicationData.experiences_personal_title}
                    />
                </FormFieldWrapperDefault>
                <FormFieldWrapperDefault>
                    <InputTitle marginBottom>
                        {t('profile:letter_gen.coverletter.experience.desc')}
                    </InputTitle>
                    <InputTextArea
                        name="experiences_personal_content"
                        onChange={onChangeHandler}
                        value={applicationData.experiences_personal_content}
                    />
                </FormFieldWrapperDefault>
                <FormFieldWrapperDefault>
                    <InputTitle marginBottom>{t('profile:letter_gen.coverletter.closing')}</InputTitle>
                    <InputTextArea
                        data-key="greeting"
                        name="greeting"
                        onChange={onChangeHandler}
                        value={applicationData.greeting}
                    />
                </FormFieldWrapperDefault>
            </InputBlock>
        </OverlayContent>
    )
}

export default CoverletterInputs
