import React from 'react'
import {useTranslation} from 'react-i18next'

import {InputRow, FormFieldWrapperDefault, InputBlock} from '../../../../style/forms'
import {BaseInputStyled} from '../../../../style/inputs'
import {OverlayContent, OverlayTitle} from '../../../../style/overlay'
import {InputTitle} from '../../../../style/titles'


const ContactInputs = ({job, updateJobData}) => {
    const {t} = useTranslation()

    const onChangeHandler = e => {
        const name = e.target.name
        const value = e.target.value
        updateJobData({...job, [name]: value})
    }

    return (
        <OverlayContent>
            <InputBlock>
                <OverlayTitle>{t('profile:letter_gen.contact.title')}</OverlayTitle>
                <form>
                    <InputRow>
                        <FormFieldWrapperDefault>
                            <InputTitle>{t('profile:letter_gen.contact.name.label')}</InputTitle>
                            <BaseInputStyled
                                maxLength="50"
                                name="contact"
                                onChange={(e) => onChangeHandler(e)}
                                placeholder={t('profile:letter_gen.contact.name.placeholder')}
                                type="text"
                                value={job.contact} // = contact name
                            />
                        </FormFieldWrapperDefault>
                        <FormFieldWrapperDefault>
                            <InputTitle>{t('profile:letter_gen.contact.position.label')}</InputTitle>
                            <BaseInputStyled
                                maxLength="50"
                                name="contact_title"
                                onChange={(e) => onChangeHandler(e)}
                                placeholder={t('profile:letter_gen.contact.position.placeholder')}
                                type="text"
                                value={job.contact_title}
                            />
                        </FormFieldWrapperDefault>
                    </InputRow>
                    <InputRow>
                        <FormFieldWrapperDefault>
                            <InputTitle>{t('profile:letter_gen.contact.email.label')}</InputTitle>
                            <BaseInputStyled
                                maxLength="50"
                                name="contact_email"
                                onChange={(e) => onChangeHandler(e)}
                                placeholder={t('profile:letter_gen.contact.email.placeholder')}
                                type="email"
                                value={job.contact_email}
                            />
                        </FormFieldWrapperDefault>
                        <FormFieldWrapperDefault>
                            <InputTitle>{t('profile:letter_gen.contact.phone.label')}</InputTitle>
                            <BaseInputStyled
                                maxLength="16"
                                name="contact_phone"
                                onChange={(e) => onChangeHandler(e)}
                                placeholder={t('profile:letter_gen.contact.phone.placeholder')}
                                type="tel"
                                value={job.contact_phone}
                            />
                        </FormFieldWrapperDefault>
                    </InputRow>
                </form>
            </InputBlock>
        </OverlayContent>
    )
}

export default ContactInputs
