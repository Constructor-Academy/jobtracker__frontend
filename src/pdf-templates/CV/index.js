import {Document} from '@react-pdf/renderer'
import React from 'react'

import CvGeneratorContext from '../../pages/Profile/OverlayCurriculum/context'
import AspiringMinimal from './AspiringMinimal'
import Minimal from './Minimal'
import Standard2Columns from './Standard2Columns'
import StandardHeader from './StandardHeader'
import TwoColumnsCentered from './TwoColumnsCentered'


export const availableTemplates = [
    {id: 1, name: 'profile:cv_gen.templates.standard_header'},
    {id: 2, name: 'profile:cv_gen.templates.standard_two_cols'},
    {id: 3, name: 'profile:cv_gen.templates.minimal'},
    {id: 4, name: 'profile:cv_gen.templates.asp_minimal'},
    {id: 5, name: 'profile:cv_gen.templates.two_cols_center'},
]

export const CurriculumDocument = ({mycontext, templateId, user}) => {
    const getTemplate = (templateId) => {
        switch(templateId) {
        case 1:
            return <StandardHeader user={user} />
        case 2:
            return <Standard2Columns user={user} />
        case 3:
            return <Minimal user={user} />
        case 4:
            return <AspiringMinimal user={user} />
        case 5:
            return <TwoColumnsCentered user={user} />
        default:
            return <StandardHeader user={user} />
        }
    }

    return (
        <Document
            author={`${user.first_name} ${user.last_name}`}
            creator="Constructor Learning"
            producer="Constructor Learning with react-pdf"
        >
            <CvGeneratorContext mycontext={mycontext} >
                {getTemplate(templateId)}
            </CvGeneratorContext>
        </Document>
    )
}
