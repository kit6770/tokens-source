import React, { useState, useEffect } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TableSortLabel,
} from '@mui/material';
import Empty from '../empty';
import classNames from 'classnames';
import SortTag, { SortType } from '../sort-tag';

export type ITableColumnsProps = {
    key?: string,
    title: string;
    dataIndex: string;
    render?: (text: string, data: any) => any;
    sortable?: boolean;
    width?: string | number;
}

type Iprops = {
    dataSource: any[];
    columns: ITableColumnsProps[];
}

function DataTable(props: Iprops) {
    const { dataSource = [], columns = [] } = props;
    const [order, setOrder] = useState<SortType>('asc'); // 显式指定 order 类型
    const [orderBy, setOrderBy] = useState<string>('name');
    const [columnsMap, setColumnsMap] = useState<Map<string, any>>(new Map());

    useEffect(() => {
        const map = new Map();
        columns.forEach((column) => {
            map.set(column.dataIndex, column);
        });
        setColumnsMap(map);
    }, [columns]);

    // Sorting function
    const handleRequestSort = (property: string) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const renderEmpty = () => {
        if (dataSource.length) return null;
        return (
            <div className='w-full text-center'>
                <div className='flex items-center justify-center pt-[73px] pb-[128px]'>
                    <Empty
                        description='There is no data to show you right now'
                    />
                </div>
            </div>
        )
    }

    const renderTableHeader = () => {
        return (
            <TableHead>
                <TableRow>
                    {
                        columns.map((column, index) => {
                            if (column.sortable) {
                                return (
                                    <TableCell
                                        // sortDirection={orderBy === column.dataIndex ? order : false}
                                        sortDirection={false}
                                        className='!text-[#98989F] !border-b-[#2F2F31]'
                                        width={column.width}
                                    >
                                        <TableSortLabel
                                            active={orderBy === column.dataIndex}
                                            direction={orderBy === column.dataIndex ? order : 'asc'}
                                            onClick={() => handleRequestSort(column.dataIndex)}
                                            sx={{
                                                '&.Mui-active, &:hover': {
                                                    color: '#98989F',
                                                },
                                                '&.Mui-active .MuiTableSortLabel-icon': {
                                                    color: '#98989F',
                                                    visibility: "hidden"
                                                },
                                                "&:hover .MuiTableSortLabel-icon": {
                                                    opacity: 0,
                                                    visibility: "hidden"
                                                },
                                                ".MuiTableSortLabel-icon": {
                                                    opacity: 0,
                                                    visibility: "hidden !important"
                                                },
                                            }}
                                            className='flex flex-col items-center gap-[6px]'
                                        >
                                            <div className='whitespace-nowrap break-words'>{column.title}</div>
                                            <SortTag value={order} needSort={orderBy === column.dataIndex} />
                                        </TableSortLabel>
                                    </TableCell>
                                )
                            }
                            return (
                                <TableCell className='!text-[#98989F] !border-b-[#2F2F31]'>
                                    {column.title}
                                </TableCell>
                            )
                        })
                    }
                </TableRow>
            </TableHead>
        )
    }

    const renderTableBody = () => {
        if (!dataSource?.length) {
            return <div className='empty_table' />;
        }
        return (
            <TableBody>
                {
                    dataSource.map((data, dataSourceIndex) => {
                        return (
                            <TableRow className='!text-[#ffffff]'>
                                {
                                    columns.map((column, index) => {
                                        if (!column.dataIndex) {
                                            return (
                                                <TableCell
                                                    key={`${column.dataIndex}-${index}}`}
                                                    className='!text-[#ffffff]'
                                                    width={column.width}
                                                />
                                            )
                                        }
                                        const _value = data[column.dataIndex]
                                        let cellEle = _value;
                                        if (column?.render && typeof column?.render === 'function') {
                                            cellEle = column.render(_value, data) || _value;
                                        }
                                        return (
                                            <TableCell
                                                key={`${column.dataIndex}-${index}}`}
                                                className={classNames('!text-[#ffffff]', {
                                                    '!border-b-[0px]': dataSourceIndex === dataSource.length - 1,
                                                })}
                                                width={column.width}
                                            >
                                                {cellEle}
                                            </TableCell>
                                        )
                                    })
                                }
                            </TableRow>
                        )
                    })
                }
            </TableBody>
        )
    }

    // Render table
    return (
        <TableContainer className='bg-[#18181B] w-full overflow-auto px-[16px] rounded-[16px]'>
            <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
                {renderTableHeader()}
                {renderTableBody()}
            </Table>
            {renderEmpty()}
        </TableContainer>
    );
}

export default DataTable;


export const TableDemo = () => {
    return (
        <div className='bg-[#ffffff]'>
            <DataTable
                columns={[
                    {
                        key: "name",
                        title: "name",
                        dataIndex: "name",
                        sortable: true,
                    },
                    {
                        key: "title",
                        title: "title",
                        dataIndex: "title",
                    },
                    {
                        key: "car",
                        title: "car",
                        dataIndex: "car",
                    }
                ]}
                dataSource={[]}
            />
        </div>
    )
}