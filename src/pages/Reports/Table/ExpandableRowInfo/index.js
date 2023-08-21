import {ContentState, EditorState} from 'draft-js'
import htmlToDraft from 'html-to-draftjs'
import React, {useState} from 'react'
import {Editor} from 'react-draft-wysiwyg'
import {useTranslation} from 'react-i18next'

import {ExpandableRowInfoContainer} from '../../../../style/Table'
import {JobDescriptionTitle} from '../../../../style/titles'


const ExpandableRowInfo = ({data}) => {
    const {t} = useTranslation()
    const [rowInfo] = useState(EditorState.createWithContent(ContentState.createFromBlockArray(htmlToDraft(data['description'] || '').contentBlocks)))

    return (
        <ExpandableRowInfoContainer>
            <JobDescriptionTitle>{t('reports:jobs.description')}</JobDescriptionTitle>
            <Editor
                editorState={rowInfo}
                spellCheck
                toolbarHidden
            />
        </ExpandableRowInfoContainer>
    )
}

export default ExpandableRowInfo
