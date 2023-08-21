import React, {useState} from 'react'
import Dropzone from 'react-dropzone'
import {useTranslation} from 'react-i18next'
import {useDispatch} from 'react-redux'
import styled from 'styled-components/macro'

import UploadCloud from '../../../../assets/upload_cloud.png'
import Loader from '../../../../components/Loader'
import {getJobSuggestionsFromCvSkillgapAction} from '../../../../store/actions/jobAction'
import {BaseButton} from '../../../../style/buttons'
import {device} from '../../../../style/devices'
import {DropzoneContainer, DropzoneWrapper} from './styles'



const UploadButton = styled(BaseButton)`
    grid-area: button;
    width: 100%;
    height: 40px;
    display: flex;
    align-self: flex-end;
    text-transform: uppercase;
    margin-bottom: ${props => props.theme.spaceM};
`

const Label = styled.p`
    text-align: center;
    font-size: 16px;
    margin-bottom: ${props => props.theme.spaceM};
    @media ${device.laptop} {
        font-size: 18px;
    }
`

const SkillgapCvUploader = ({setUploadedViaCv}) => {
    const {t} = useTranslation()
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)

    const submitFile = async acceptedFiles => {
        setLoading(true)
        try {
            const res = await dispatch(getJobSuggestionsFromCvSkillgapAction(acceptedFiles))
            if (res) {
                setLoading(false)
                setUploadedViaCv(true)
            } else {
                setLoading(false)
            }
        } catch (e) {
            setLoading(false)
        }
    }

    return (
        <>
            {
                !loading && (
                    <DropzoneContainer>
                        <Label>{t('jobs:upload')}</Label>
                        <DropzoneWrapper>
                            <Dropzone onDrop={files => submitFile(files[0])}>
                                {
                                    ({getRootProps, getInputProps}) => (
                                        <div {...getRootProps()}>
                                            <input {...getInputProps()} />
                                            <span>Drag and Drop</span>
                                            <p>{t('jobs:or')}</p>
                                            <img alt="upload cloud" src={UploadCloud} />
                                            <UploadButton>{t('jobs:select_cv')}</UploadButton>
                                        </div>
                                    )
                                }
                            </Dropzone>
                        </DropzoneWrapper>
                    </DropzoneContainer>
                )
            }
            {loading && <Loader avoidSidebar />}
        </>
    )
}

export default SkillgapCvUploader
