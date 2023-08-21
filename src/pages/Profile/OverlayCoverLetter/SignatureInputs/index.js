import React, {useState, useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import {useTranslation} from 'react-i18next'
import SignatureCanvas from 'react-signature-canvas'

import {
    DrawSignaturePad,
    SignatureButtonBar,
    SignatureButtons,
    TabToggleContainer,
    SignatureUploadZone,
    SignatureUpload,
} from '../../../../style/component-based/signature'
import {InputBlock} from '../../../../style/forms'
import {OverlayContent, OverlayTitle} from '../../../../style/overlay'
import {InputTitle} from '../../../../style/titles'
import defaultSignature from './defaultSignature'


const SignatureInputs = ({applicationData, selectedTab, setSelectedTab, signatureRef, signatureUpload, setSignatureUpload}) => {
    const {t} = useTranslation()
    const [signatureUploadPreview, setSignatureUploadPreview] = useState(signatureUpload || defaultSignature.defaultSignature)

    const clear = () => {
        if (selectedTab === 'uploadSignature') {
            setSignatureUpload('')
            setSignatureUploadPreview(defaultSignature.defaultSignature)
        } else {
            signatureRef.current.clear()
        }
    }

    const onDrop = useCallback((acceptedFiles) => {
        if(acceptedFiles[0].size > 2097152){
            alert(t('errors:upload.max_size', {size: '2MB'}))
        } else {
            const reader = new FileReader()
            reader.readAsDataURL(acceptedFiles[0])
            reader.onloadend = () => {
                setSignatureUploadPreview(reader.result)
                setSignatureUpload(reader.result)
            }
        }
    }, [setSignatureUpload, t])
    const {getRootProps, getInputProps, isDragActive} = useDropzone({
        onDrop,
        accept: 'image/jpeg, image/png, image/jpg',
    })

    const setUploadExistingImg = () => {
        if(applicationData.signatureURL && !applicationData.signatureURLCanvas){
            return applicationData.signatureURL
        } else {
            return signatureUploadPreview
        }
    }

    return (
        <OverlayContent>
            <InputBlock>
                <OverlayTitle>{t('profile:letter_gen.signature.title')}</OverlayTitle>

                <TabToggleContainer>
                    <input
                        checked={selectedTab === 'drawSignature'}
                        id="drawSignature"
                        name="drawSignature"
                        onChange={e => setSelectedTab(e.target.name)}
                        type="radio"
                        value="drawSignature"
                    />
                    <label htmlFor="drawSignature">{t('profile:letter_gen.signature.draw')}</label>

                    <input
                        checked={selectedTab === 'uploadSignature'}
                        id="uploadSignature"
                        name="uploadSignature"
                        onChange={e => setSelectedTab(e.target.name)}
                        type="radio"
                        value="uploadSignature"
                    />
                    <label htmlFor="uploadSignature">{t('profile:letter_gen.signature.upload')}</label>
                </TabToggleContainer>

                {
                    selectedTab === 'drawSignature' && (
                        <>
                            <InputTitle>{t('profile:letter_gen.signature.description')}</InputTitle>
                            <DrawSignaturePad>
                                <SignatureCanvas ref={signatureRef} />
                                <SignatureButtonBar>
                                    <SignatureButtons onClick={clear}>
                                        {t('profile:letter_gen.signature.clear_canvas')}
                                    </SignatureButtons>
                                </SignatureButtonBar>
                            </DrawSignaturePad>
                        </>
                    )
                }

                {
                    selectedTab === 'uploadSignature' && (
                        <>
                            <SignatureUploadZone {...getRootProps()}>
                                <SignatureUpload
                                    alt="signature"
                                    src={setUploadExistingImg()}
                                />
                                <input {...getInputProps()} />
                                {
                                    isDragActive
                                        ? t('profile:letter_gen.signature.drop')
                                        : t('profile:letter_gen.signature.click_or_drop')
                                }
                            </SignatureUploadZone>
                            <SignatureButtonBar>
                                <SignatureButtons onClick={clear}>
                                    {t('profile:letter_gen.signature.clear_img')}
                                </SignatureButtons>
                            </SignatureButtonBar>
                        </>
                    )
                }
            </InputBlock>
        </OverlayContent>
    )
}

export default SignatureInputs
