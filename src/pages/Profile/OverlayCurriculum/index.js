import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'

import {
    OverlayBackground,
    OverlayContainerWizard,
} from '../../../style/overlay'
import ContentSelectionStep from './ContentSelectionStep'
import CvGeneratorContext from './context'
import StepsIndicator from './StepsIndicator'
import StylingStep from './StylingStep'


const OverlayCurriculum = ({fnClose}) => {
    const {categories} = useSelector(state => state.userLoginReducer.user)
    const [wizardStep, setWizardStep] = useState(1)
    const [colors, setColors] = useState({
        mainColor: '#3F3F3F',
        contrastColor: '#FFFFFF',
        accentColor: '#92BBE5',
        accentContrastColor: '#FFFFFF',
        fontColor: '#3F3F3F',
    })
    const [templateId, setTemplateId] = useState(1)
    const [showSkillLevel, setShowSkillLevel] = useState(false)
    const [showLanguageLevel, setShowLanguageLevel] = useState(false)
    const [content, setContent] = useState({
        dob: true,
        nationality: true,
        permit: true,
        skills: true,
        languages: true,
        photo: true,
    })

    // adding custom categories to content
    useEffect(() => {
        const newContent = {}
        const enhancedCategories = categories.map(cat => {
            cat['selected'] = true
            return cat
        })
        if (enhancedCategories.length) newContent['categories'] = enhancedCategories
        setContent(prevContent => {
            return {
                ...prevContent,
                ...newContent,
            }
        })
    }, [categories])

    const context = {
        content, setContent,
        colors, setColors,
        templateId, setTemplateId,
        showSkillLevel, setShowSkillLevel,
        showLanguageLevel, setShowLanguageLevel,
    }
    const handleBackgroundClick = (event) => {
        if (event.target.id === 'overlay-background') {
            fnClose(false)
        }
    }
    return (
        <OverlayBackground id='overlay-background' onClick={(e) => { handleBackgroundClick(e) }}>
            <OverlayContainerWizard>
                <StepsIndicator fnClose={fnClose} wizardStep={wizardStep} />
                <CvGeneratorContext mycontext={context}>
                    {wizardStep === 1 && <ContentSelectionStep fnClose={fnClose} setWizardStep={setWizardStep} />}
                    {wizardStep === 2 && <StylingStep mycontext={context} setWizardStep={setWizardStep} />}
                </CvGeneratorContext>
            </OverlayContainerWizard>
        </OverlayBackground>
    )
}

export default OverlayCurriculum
