import React, {useState} from 'react'
import {Document, Page, pdfjs} from 'react-pdf'
import {useSelector} from 'react-redux'
import styled from 'styled-components/macro'

import {device as devices} from '../../style/devices'
// eslint-disable-next-line no-unused-vars
import styles from './styles.css'


pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

const PDFViewerContainer = styled.div`
  height: 100%;
  width: 100%;
  overflow: auto;
    @media ${devices.mobileL} {
      display: none;
    }
`


const PDFPreview = () => {
    const [numPages, setNumPages] = useState(null)
    const pdfSource = useSelector(state => state.pdfGeneratorReducer.pdfSource)

    function onDocumentLoadSuccess({numPages}){
        setNumPages(numPages)
    }

    return (
        <PDFViewerContainer>
            {
                pdfSource && (
                    <Document
                        file={pdfSource}
                        onLoadSuccess={onDocumentLoadSuccess}
                    >
                        {
                            Array.from(new Array(numPages), (el, index) => (
                                <Page key={`page_${index + 1}`} pageNumber={index + 1} renderAnnotationLayer={false} renderTextLayer={false} width={400} />
                            ))
                        }
                    </Document>)
            }
        </PDFViewerContainer>
    )
}

export default PDFPreview
