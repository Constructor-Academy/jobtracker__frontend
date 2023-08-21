import {Document} from '@react-pdf/renderer'
import React from 'react'

import Aspiring from './Aspiring'
import Elegant from './Elegant'
import ElegantGraphic from './ElegantGraphic'

export const availableTemplatesCoverletter = [
    {id: 1, name: 'profile:letter_gen.templates.elegant_graphics'},
    {id: 2, name: 'profile:letter_gen.templates.elegant_no_graphics'},
    {id: 3, name: 'profile:letter_gen.templates.aspiring'},
]


const CoverLetter = ({user, job, application, contact, company, mainColor, fontColor, contentState, templateId}) => {
    const getTemplate = (templateId) => {
        switch(templateId){
        case 1:
            return (
                <ElegantGraphic
                    application={application}
                    company={company}
                    contact={contact}
                    fontColor={fontColor}
                    job={job}
                    mainColor={mainColor}
                    user={user}
                />
            )
        case 2:
            return (
                <Elegant
                    application={application}
                    company={company}
                    contact={contact}
                    fontColor={fontColor}
                    job={job}
                    mainColor={mainColor}
                    user={user}
                />
            )
        case 3:
            return (
                <Aspiring
                    application={application}
                    company={company}
                    contact={contact}
                    contentState={contentState}
                    fontColor={fontColor}
                    job={job}
                    mainColor={mainColor}
                    user={user}
                />
            )
        default:
            return (
                <ElegantGraphic
                    application={application}
                    company={company}
                    contact={contact}
                    fontColor={fontColor}
                    job={job}
                    mainColor={mainColor}
                    user={user}
                />
            )
        }
    }

    return (
        <Document
            author={`${user.first_name} ${user.last_name}`}
            creator="Constructor Learning"
            producer="Constructor Learning with react-pdf"
        >
            {getTemplate(templateId)}
        </Document>
    )
}

export default CoverLetter

