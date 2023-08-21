import {ResponsiveBar} from '@nivo/bar'
import React from 'react'
import {useTranslation} from 'react-i18next'
import {useSelector} from 'react-redux'

import {ChartContainer} from '../../../../style/containers'
import {ChartTitle} from '../../../../style/titles'


// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const Bar = ({data, keys}) => {
    const {t} = useTranslation()
    const browser = useSelector((state) => state.browserReducer.browser)

    return (
        <ChartContainer bar browser={browser}>
            <ChartTitle>{t('reports:jobs.number_per_stage')}</ChartTitle>
            {
                data ? (
                    <ResponsiveBar
                        animate
                        axisBottom={
                            {
                                tickSize: 5,
                                tickPadding: 5,
                                tickRotation: 0,
                                legend: t('reports:jobs.stage'),
                                legendPosition: 'middle',
                                legendOffset: 40,
                            }
                        }
                        axisLeft={
                            {
                                tickSize: 10,
                                tickPadding: 5,
                                tickRotation: -20,
                                legend: t('reports:jobs.number'),
                                legendPosition: 'middle',
                                legendOffset: -60,
                            }
                        }
                        axisRight={null}
                        axisTop={null}
                        colors={{scheme: 'set2'}}
                        data={data}
                        defs={
                            [
                                {
                                    id: 'dots',
                                    type: 'patternDots',
                                    background: 'inherit',
                                    color: '#38bcb2',
                                    size: 4,
                                    padding: 1,
                                    stagger: true,
                                },
                                {
                                    id: 'lines',
                                    type: 'patternLines',
                                    background: 'inherit',
                                    color: '#eed312',
                                    rotation: -45,
                                    lineWidth: 6,
                                    spacing: 10,
                                },
                            ]
                        }
                        fill={
                            [
                                {
                                    match: {
                                        id: 'fries',
                                    },
                                    id: 'dots',
                                },
                                {
                                    match: {
                                        id: 'sandwich',
                                    },
                                    id: 'lines',
                                },
                            ]
                        }
                        indexBy="stage"
                        keys={keys}
                        labelSkipHeight={12}
                        labelSkipWidth={12}
                        labelTextColor={
                            {
                                from: 'color',
                                modifiers: [['darker', 1.6]],
                            }
                        }
                        margin={{top: 50, right: 50, bottom: 50, left: 80}}
                        motionDamping={15}
                        motionStiffness={90}
                        padding={0.3}
                    />
                ) : (
                    <p>{t('reports:jobs.no_jobs')}</p>
                )
            }
        </ChartContainer>
    )
}

export default Bar
