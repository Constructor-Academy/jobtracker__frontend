import {ResponsiveLine} from '@nivo/line'
import React from 'react'
import {useTranslation} from 'react-i18next'

import {ChartContainer} from '../../../../style/containers'
import {ChartTitle} from '../../../../style/titles'


const Line = ({data}) => {
    const {t} = useTranslation()

    return (
        <ChartContainer>
            <ChartTitle>{t('reports:jobs.applications')}</ChartTitle>
            {
                data ? (
                    <ResponsiveLine
                        axisBottom={
                            {
                                tickSize: 9,
                                tickPadding: 4,
                                tickRotation: -45,
                                legend: t('reports:date'),
                                legendPosition: 'middle',
                                legendOffset: 44,
                            }
                        }
                        axisLeft={
                            {
                                orient: 'left',
                                tickSize: 5,
                                tickPadding: 5,
                                tickRotation: 0,
                                legend: `# ${t('reports:jobs.of_jobs')}`,
                                legendOffset: -40,
                                legendPosition: 'middle',
                            }
                        }
                        axisRight={null}
                        axisTop={null}
                        colors={{scheme: 'nivo'}}
                        data={data}
                        margin={{top: 50, right: 50, bottom: 50, left: 60}}
                        pointBorderColor={{from: 'serieColor'}}
                        pointBorderWidth={2}
                        pointColor={{theme: 'background'}}
                        pointLabel="y"
                        pointLabelYOffset={-12}
                        pointSize={8}
                        useMesh
                        xScale={{type: 'point'}}
                        yScale={
                            {
                                type: 'linear',
                                min: 'auto',
                                max: 'auto',
                                stacked: true,
                                reverse: false,
                            }
                        }
                    />
                ) : (
                    <p>{t('reports:no_activity')}</p>
                )
            }
        </ChartContainer>
    )
}

export default Line
