import moment from 'moment'
import 'moment/locale/de'
import React, {useState, useEffect} from 'react'
import {DateRangePicker} from 'react-dates'
import {useTranslation} from 'react-i18next'
import {useSelector} from 'react-redux'
import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'
import * as _ from 'underscore'

import FloatingMenu from '../../components/FloatingMenu'
import {getI18nJobStatus} from '../../helpers/i18n'
import {
    DatePickerContainer,
    BasePageContainerStyled,
    HeaderSectionContainer,
    PageContentsContainerDefault,
} from '../../style/containers'
import {SelectDateTitle, PageTitle} from '../../style/titles'
import {
    DateRangePickerWrapper,
    ReportBodyWrapper,
} from '../../style/wrappers'
import Cards from './Cards'
import Bar from './Charts/Bar'
import Line from './Charts/Line'
import CurrentlyViewing from './CurrentlyViewing'
import Table from './Table'

const inDateRange = (job, startDate, endDate) => {
    return moment(job.created) >= startDate && moment(job.created) <= endDate
}

const getCSVData = (jobs, startDate, endDate) => {
    // takes jobs from redux store an converts it into data format used by react-csv
    // extract job arrays from dict
    let jobsArrays = [].concat.apply([], Object.values(jobs)) //flatten jobs arrays
    // filter jobs by date and map job dicts to value arrays
    let jobsArraysCSV = jobsArrays
        .filter((job) => inDateRange(job, startDate, endDate))
        .map((job) => {
            let {
                url,
                title,
                category,
                description,
                company,
                notes,
                status,
                created,
            } = job
            return [
                url,
                title,
                category,
                description,
                company,
                notes,
                status,
                created,
            ]
        })
    // return table row arrays with header row
    return [
        [
            'url',
            'title',
            'category',
            'description',
            'company',
            'notes',
            'status',
            'created',
        ],
        ...jobsArraysCSV,
    ]
}

const useTimeseries = (jobs) => {
    const [timeseries, setTimeseries] = useState([
        {
            id: 'activity',
            color: 'hsl(68, 70%, 50%)',
            data: [],
        },
    ])

    useEffect(() => {
        let flattenedJobs = [].concat.apply([], Object.values(jobs))
        let groups = _.groupBy(flattenedJobs, function (job) {
            return moment(job.created).startOf('day').format()
        })
        let timeseries = Object.keys(groups).map((key) => ({
            x: moment(key).format('DD-MM-YYYY'),
            y: groups[key].length,
        }))
        let t = []
        for (
            let d = moment().subtract(1, 'months');
            d <= moment();
            d.add(1, 'day')
        ) {
            let item = timeseries.filter(
                (item) => item['x'] === d.format('DD-MM-YYYY')
            )
            if (item.length > 0) {
                t.push(item[0])
            } else {
                t.push({x: d.format('DD-MM-YYYY'), y: 0})
            }
        }
        let data = [
            {
                id: 'activity',
                color: 'hsl(68, 70%, 50%)',
                data: t.map((datapoint) => ({
                    x: datapoint['x'].slice(0, 5),
                    y: datapoint['y'],
                })),
            },
        ]
        setTimeseries(data)
    }, [jobs])
    return timeseries
}


const Reports = () => {
    const {t, i18n} = useTranslation()
    moment.locale(i18n.language)
    const {user} = useSelector(state => state.userLoginReducer)
    const {jobs, displayedUser, jobsAmount} = useSelector(state => state.jobsReducer)
    const [startDate, setStartDate] = useState(moment().subtract(1, 'months'))
    const [endDate, setEndDate] = useState(moment())
    const [focusedInput, setFocusedInput] = useState(null)
    const timeseries = useTimeseries(jobs)
    let csvData = getCSVData(jobs, startDate, endDate)

    let plotData = Object.keys(jobs).map((key) => {
        return {
            stage: getI18nJobStatus(key, t),
            length: jobs[key].filter((job) => inDateRange(job, startDate, endDate))
                .length,
            lengthColor: 'hsl(263, 70%, 50%)',
        }
    })

    return (
        displayedUser.email && (
            <BasePageContainerStyled>
                <PageContentsContainerDefault>
                    <HeaderSectionContainer>
                        <PageTitle>{t('reports:title')}</PageTitle>
                        <DatePickerContainer>
                            <SelectDateTitle>{t('reports:select_dates')}:</SelectDateTitle>
                            <DateRangePickerWrapper>
                                <DateRangePicker
                                    endDate={endDate} // momentPropTypes.momentObj or null,
                                    endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                                    endDatePlaceholderText={t('reports:end_date')} // momentPropTypes.momentObj or null,
                                    focusedInput={focusedInput} // PropTypes.string.isRequired,
                                    isOutsideRange={() => false} // PropTypes.func.isRequired,
                                    onDatesChange={
                                        ({startDate, endDate}) => {
                                            setStartDate(startDate)
                                            setEndDate(endDate)
                                        }
                                    } // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                                    onFocusChange={setFocusedInput}
                                    startDate={startDate}
                                    startDateId="your_unique_start_date_id"
                                    startDatePlaceholderText={t('reports:start_date')}
                                />
                            </DateRangePickerWrapper>
                        </DatePickerContainer>
                    </HeaderSectionContainer>

                    <ReportBodyWrapper>
                        {user.is_admin && <CurrentlyViewing />}
                        <Cards />
                        <Table jobs={jobs} />
                        <Bar
                            data={jobsAmount > 0 ? plotData : null}
                            keys={['length']}
                        />
                        <Line data={jobsAmount > 0 ? timeseries : null} />
                        <FloatingMenu data={csvData} />
                    </ReportBodyWrapper>
                </PageContentsContainerDefault>
            </BasePageContainerStyled>
        )
    )
}

export default Reports
