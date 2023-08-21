import React  from 'react'
import {Droppable} from 'react-beautiful-dnd'
import {useTranslation} from 'react-i18next'
import accepted from '../../../assets/accepted.svg'
import applied from '../../../assets/applied.svg'
import interview from '../../../assets/interview.svg'
import offered from '../../../assets/offered.svg'
import rejected from '../../../assets/rejected.svg'
import wishlist from '../../../assets/wishlist.svg'
import {getI18nDashboardColumnTitles} from '../../../helpers/i18n'
import {
    JobDroppableListWrapper,
    JobColumnContainer,
    JobColumnHeaderWrapper,
} from '../../../style/component-based/job'
import { DeleteAllButton } from '../DeleteRejectedButton'
import JobCard from '../JobCard'


export const Column = ({columnId, jobs}) => {
    const {t} = useTranslation()
    const titles = getI18nDashboardColumnTitles(t)

    let icons = {
        WH: wishlist,
        AP: applied,
        IN: interview,
        OF: offered,
        AC: accepted,
        RJ: rejected,
    }
    return (
        <JobColumnContainer>
            <JobColumnHeaderWrapper>
                {titles[columnId]}
                {columnId === 'RJ' ? <DeleteAllButton/> : <img
                    alt="columns-icons"
                    src={icons[columnId]}
                />}
                {/* <img
                    alt="columns-icons"
                    src={icons[columnId]}
                    /> */}
            </JobColumnHeaderWrapper>
            <Droppable droppableId={columnId}>
                {
                    (provided) => (
                        <JobDroppableListWrapper
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            {
                                jobs.map((job) => {
                                    return <JobCard job={job} key={job.id} />
                                })
                            }
                            {provided.placeholder}
                        </JobDroppableListWrapper>
                    )
                }
            </Droppable>
        </JobColumnContainer>
    )

}

export default Column
