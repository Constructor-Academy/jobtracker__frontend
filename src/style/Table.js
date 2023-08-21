import React from 'react'
import DataTable from 'react-data-table-component'
import styled from 'styled-components/macro'

import {device as devices} from './devices'

export const TableContainer = styled.div`
    background: ${(props) => props.theme.white};
    box-shadow: ${(props) => props.theme.boxShadowTiles};
    border-radius: ${(props) => props.theme.borderRadius};
    padding: ${(props) => props.theme.spaceM};
    margin-bottom: ${(props) => props.theme.spaceM};
`

export const TableTitle = styled.h2`
    color: ${(props) => props.theme.accentColor};
    font-size: 26px;
    font-weight: normal;

    @media ${devices.mobileL} {
        font-size: 22px;
    }
`

export const ProgressBorder = styled.div`
    border: solid rgba(128, 128, 128, 0.41) 1px;
    width: 100%;
    background: rgba(211, 211, 211, 0.54);
    border-radius: 3px;
`

export const BaseProgressBar = styled.div`
    width: ${(props) =>
        props.status === 'AP'
            ? '30%'
            : props.status === 'IN'
                ? '55%'
                : props.status === 'OF'
                    ? '80%'
                    : props.status === 'AC'
                        ? '100%'
                        : props.status === 'RJ'
                            ? '100%'
                            : '10%'};
    height: 18px;
    border-radius: 2px 3px 3px 2px;
    background: ${(props) =>
        props.status === 'AP'
            ? '#0e57a8'
            : props.status === 'IN'
                ? '#eece22'
                : props.status === 'OF'
                    ? '#ee9008'
                    : props.status === 'AC'
                        ? '#33c211'
                        : props.status === 'RJ'
                            ? '#e51206'
                            : 'rgba(101,96,102,0.76)'};
    animation: growWidth 1.5s;
    @keyframes growWidth {
        from {
            width: 1%;
        }
        to {
            width: -${(props) => (props.status === 'AP' ? '30%' : props.status === 'IN' ? '55%' : props.status === 'OF' ? '80%' : props.status === 'AC' ? '100%' : props.status === 'RJ' ? '100%' : '10%')};
        }
    }
`

export const getI18nColumns = (t) => [
    {
        name: t('reports:table.columns.position'),
        selector: 'title',
        sortable: true,
        left: true,
    },
    {
        name: t('reports:table.columns.company'),
        selector: 'company',
        sortable: true,
        left: true,
        wrap: true,
    },
    {
        name: t('reports:table.columns.industry'),
        selector: 'category',
        sortable: true,
        left: true,
    },
    {
        name: t('reports:table.columns.progress'),
        selector: 'status',
        sortable: true,
        left: true,
        cell: (row) => (
            <ProgressBorder>
                <BaseProgressBar status={row.status} />
            </ProgressBorder>
        ),
    },
    {
        name: t('reports:table.columns.status'),
        selector: 'status',
        sortable: true,
        left: true,
        cell: (row) => {
            switch(row.status) {
            case 'WH':
                return <div>{t('dashboard:columns.wishlist')}</div>
            case 'AP':
                return <div>{t('dashboard:columns.applied')}</div>
            case 'IN':
                return <div>{t('dashboard:columns.interview')}</div>
            case 'OF':
                return <div>{t('dashboard:columns.offered')}</div>
            case 'AC':
                return <div>{t('dashboard:columns.accepted')}</div>
            case 'RJ':
                return <div>{t('dashboard:columns.rejected')}</div>
            default:
                return ''
            }
        }
    },
    {
        name: t('reports:table.columns.link'),
        selector: 'url',
        sortable: true,
        left: true,
    },
]

export const customStyles = {
    rows: {
        style: {
            minHeight: '30px',
        },
    },
    headCells: {
        style: {
            color: '#F64E28',
            fontWeight: 'bold',
            paddingLeft: '12px', // override the cell padding for head cells
            paddingRight: '12px',
        },
    },
    cells: {
        style: {
            paddingLeft: '12px', // override the cell padding for data cells
            paddingRight: '12px',
            width: '32px',
        },
    },
}

export const conditionalRowStyles = [
    {
        when: (row) => row.status === 'AC',
        style: {
            backgroundColor: 'lightgreen',
            color: 'white',
            '&:hover': {
                cursor: 'pointer',
                color: 'orange',
            },
        },
    },
]

export const StyledDataTable = styled(DataTable)`
    display: flex;
    flex-direction: column;
    height: auto;
`

export const ExpandableRowInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    background: white;
    position: relative;
    padding: 0 60px;
    z-index: 1;
    animation: grow 0.2s;
    @keyframes grow {
        from {
            height: 0;
        }
        to {
            height: auto;
        }
    }
`
