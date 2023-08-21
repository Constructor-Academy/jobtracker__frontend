import React from 'react'
import {DragDropContext} from 'react-beautiful-dnd'
import {useDispatch, useSelector} from 'react-redux'

import PopUpMessages from '../../components/PopUpMessages'
import {setJobsAction} from '../../store/actions/jobAction'
import {
    ColumnsContainer,
    PageContentsContainerDefault,
    BasePageContainerStyled,
} from '../../style/containers'
import Column from './Column'
import HeaderSection from './HeaderSection'
import {recalculateState} from './tools'


const Dashboard = () => {
    const dispatch = useDispatch()
    const jobs = useSelector((state) => state.jobsReducer.jobs)
    const messages = useSelector((state) => state.messageReducer)
    const onDragEnd = async (result) => {
        let jobsReArranged = await recalculateState(result, jobs)
        await dispatch(setJobsAction(jobsReArranged))
    }

    return (
        <BasePageContainerStyled>
            <PageContentsContainerDefault>
                <HeaderSection />
                <DragDropContext onDragEnd={onDragEnd}>
                    <ColumnsContainer>
                        <Column columnId="WH" jobs={jobs.WH} />
                        <Column columnId="AP" jobs={jobs.AP} />
                        <Column columnId="IN" jobs={jobs.IN} />
                        <Column columnId="OF" jobs={jobs.OF} />
                        <Column columnId="AC" jobs={jobs.AC} />
                        <Column columnId="RJ" jobs={jobs.RJ} />
                    </ColumnsContainer>
                </DragDropContext>
                {messages && <PopUpMessages messages={messages} />}
            </PageContentsContainerDefault>
        </BasePageContainerStyled>
    )
}

export default Dashboard
