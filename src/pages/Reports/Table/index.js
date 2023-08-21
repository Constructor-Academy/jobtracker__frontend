import React from 'react'
import {useTranslation} from 'react-i18next'

import {getI18nJobSector} from '../../../helpers/i18n'
import {
    conditionalRowStyles,
    customStyles,
    getI18nColumns,
    StyledDataTable,
    TableContainer,
} from '../../../style/Table'
import {ChartTitle} from '../../../style/titles'
import ExpandableRowInfo from './ExpandableRowInfo'



const Table = ({jobs}) => {
    const {t} = useTranslation()
    const jobsFlattened = [].concat.apply([], Object.values(jobs))
    const jobsArray = jobsFlattened.map(job => {
        return {
            ...job,
            category: getI18nJobSector(job.category, t).label,
        }
    })

    return (
        <TableContainer>
            <ChartTitle>{t('reports:jobs.overview.title')}</ChartTitle>
            <StyledDataTable
                columns={getI18nColumns(t)}
                conditionalRowStyles={conditionalRowStyles}
                customStyles={customStyles}
                data={jobsArray}
                defaultSortField="title"
                expandableRows
                // onRowClicked={function to trigger}
                expandableRowsComponent={<ExpandableRowInfo />}
                highlightOnHover
                pagination
                paginationComponentOptions={{rowsPerPageText:t('reports:table.rows_per_page')}}
                paginationPerPage={10}
                paginationRowsPerPageOptions={[10, 20]}
                pointerOnHover
                striped
            />
        </TableContainer>
    )
}

export default Table
