import React, {useRef, useState} from 'react'
import {useTranslation} from 'react-i18next'
import {useSelector} from 'react-redux'

import {availableTemplatesCoverletter,} from '../../../pdf-templates/Coverletter'
import {OverlayBackground, OverlayContainerWizard,} from '../../../style/overlay'
import CompanyInputs from './CompanyInputs'
import ContactInputs from './ContactInputs'
import CoverLetterFinal from './CoverLetterFinal'
import CoverletterInputs from './CoverLetterInputs'
import Footer from './Footer'
import {mapSeparators} from './helpers'
import SignatureInputs from './SignatureInputs'
import {steps} from './steps'
import StepsIndicator from './StepsIndicator'


const OverlayCoverLetter = ({job, updateJobData, cancelCloseHandler, saveCloseHandler}) => {
    const {t} = useTranslation()
    const [wizardStep, setWizardStep] = useState(1)
    const [errorMessage, setErrorMessage] = useState({})
    const [mainColor, setMainColor] = useState('#92BBE5')
    const [fontColor, setFontColor] = useState('#333333')
    const [selectedSignatureTab, setSelectedSignatureTab] = useState('drawSignature')
    const signatureRef = useRef()
    const [signatureUpload, setSignatureUpload] = useState('')
    const [templateId, setTemplateId] = useState(availableTemplatesCoverletter[0].id)
    const user = useSelector((state) => state.userLoginReducer.user)

    const skills = user.skills.map((skill) => skill.tag)

    const [applicationData, setApplicationData] = useState({
        title: t('profile:letter_gen.coverletter.template.application', {job_title: job.title, company_name: job.company}),
        salutation: t('profile:letter_gen.coverletter.template.salutation', {contact_name: job.contact}),
        impressed: t('profile:letter_gen.coverletter.template.impressed', {job_title: job.title, company_name: job.company}),
        intro_text_list: t('profile:letter_gen.coverletter.template.intro_text_list'),
        skills_title: t('profile:letter_gen.coverletter.template.skills_title'),
        skills_content: t('profile:letter_gen.coverletter.template.skills_content', {skills: mapSeparators(skills)}),
        main_education: t('profile:letter_gen.coverletter.template.main_education'),
        experiences_sector_title: t('profile:letter_gen.coverletter.template.experiences_sector_title'),
        experiences_sector_content: t('profile:letter_gen.coverletter.template.experiences_sector_content'),
        experiences_personal_title: t('profile:letter_gen.coverletter.template.experiences_personal_title'),
        experiences_personal_content: t('profile:letter_gen.coverletter.template.experiences_personal_content', {last_job: user.experiences.length > 0 ? user.experiences[0].job_title.toLowerCase() : `[${t('profile:letter_gen.coverletter.template.insert_job')}]`}),
        // experiences_personal_content: '\n' +
        //     'Where can I get some?\n' +
        //     '\n' +
        //     'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.\n' +
        //     'Start with \'Lorem\n' +
        //     'ipsum dolor sit amet...\'\n',
        greeting: t('profile:letter_gen.coverletter.template.greeting', {company_name: job.company}),
        signatureURL: '',
        signatureURLCanvas: '',
    })

    const saveSignatureNextStepHandler = () => {
        if (selectedSignatureTab === 'uploadSignature') {
            setApplicationData({
                ...applicationData,
                signatureURL: signatureUpload,
            })
        } else {
            if (!signatureRef.current.isEmpty()) {
                setApplicationData({
                    ...applicationData,
                    signatureURL: signatureRef.current
                        .getTrimmedCanvas()
                        .toDataURL('image/png'),
                    signatureURLCanvas: signatureRef.current
                        .getCanvas()
                        .toDataURL('image/png'),
                })
            }
        }
        setWizardStep(wizardStep + 1)
    }
    const handleBackgroundClick = (event) => {
        if (event.target.id === 'overlay-background') {
            cancelCloseHandler()
        }
    }
    return (
        <OverlayBackground id='overlay-background' onClick={(e) => { handleBackgroundClick(e) }}>
            <OverlayContainerWizard coverletter>
                <StepsIndicator setWizardStep={setWizardStep} steps={steps} wizardStep={wizardStep} />

                {
                    wizardStep === 1 && (
                        <CompanyInputs
                            job={job}
                            updateJobData={updateJobData}
                        />)
                }

                {
                    wizardStep === 2 && (
                        <ContactInputs
                            errorMessage={errorMessage}
                            job={job}
                            setErrorMessage={setErrorMessage}
                            updateJobData={updateJobData}
                        />)
                }

                {
                    wizardStep === 3 && (
                        <CoverletterInputs
                            applicationData={applicationData}
                            job={job}
                            mapSeparators={mapSeparators}
                            setApplicationData={setApplicationData}
                            skills={skills}
                        />)
                }

                {
                    wizardStep === 4 && (
                        <SignatureInputs
                            applicationData={applicationData}
                            selectedTab={selectedSignatureTab}
                            setSelectedTab={setSelectedSignatureTab}
                            setSignatureUpload={setSignatureUpload}
                            signatureRef={signatureRef}
                            signatureUpload={signatureUpload}
                        />)
                }

                {
                    wizardStep === 5 && (
                        <CoverLetterFinal
                            fontColor={fontColor}
                            mainColor={mainColor}
                            setFontColor={setFontColor}
                            setMainColor={setMainColor}
                            setTemplateId={setTemplateId}
                            templateId={templateId}
                        />)
                }

                <Footer
                    applicationData={applicationData}
                    cancelCloseHandler={cancelCloseHandler}
                    fontColor={fontColor}
                    job={job}
                    mainColor={mainColor}
                    saveCloseHandler={saveCloseHandler}
                    saveSignatureNextStepHandler={saveSignatureNextStepHandler}
                    setWizardStep={setWizardStep}
                    steps={steps}
                    templateId={templateId}
                    wizardStep={wizardStep}
                />
            </OverlayContainerWizard>
        </OverlayBackground>
    )
}

export default OverlayCoverLetter
