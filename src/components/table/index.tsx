import React, { useState, useEffect } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TableSortLabel,
    TablePagination,
    TextField,
    Box
} from '@mui/material';
import { ArrowDownward, ArrowUpward } from '@mui/icons-material';
import { alpha } from '@mui/material/styles';

type ColumnsProps = {
    key?: string,
    title: string;
    dataIndex: string;
    render?: (text: string) => React.ReactNode;
    sortable?: boolean;
}

type Iprops = {
    dataSource: any[];
    columns: ColumnsProps[];
}

function DataTable(props: Iprops) {
    const { dataSource = [], columns = [] } = props;
    const [order, setOrder] = useState<'asc' | 'desc'>('asc'); // 显式指定 order 类型
    const [orderBy, setOrderBy] = useState<string>('name');
    const [displayRows, setDisplayRows] = useState(dataSource);

    // Sorting function
    const handleRequestSort = (property: string) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    // Render table
    return (
        <Box sx={{ width: '100%', overflowX: 'auto' }}>
            <TableContainer>
                <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
                    <TableHead>
                        <TableRow>
                            {
                                columns.map((column, index) => {
                                    if (column.sortable) {
                                        return (
                                            <TableCell
                                                sortDirection={orderBy === column.dataIndex ? order : false}
                                            >
                                                <TableSortLabel
                                                    active={orderBy === column.dataIndex}
                                                    direction={orderBy === column.dataIndex ? order : 'asc'}
                                                    onClick={() => handleRequestSort(column.dataIndex)}
                                                >
                                                    {column.title}
                                                </TableSortLabel>
                                            </TableCell>
                                        )
                                    }
                                    return (
                                        <TableCell>
                                            {column.title}
                                        </TableCell>
                                    )
                                })
                            }
                            {/* <TableCell
                                sortDirection={orderBy === 'name' ? order : false}
                            >
                                <TableSortLabel
                                    active={orderBy === 'name'}
                                    direction={orderBy === 'name' ? order : 'asc'}
                                    onClick={() => handleRequestSort('name')}
                                >
                                    Name
                                </TableSortLabel>
                            </TableCell>
                            <TableCell>
                                <TableSortLabel
                                    active={orderBy === 'age'}
                                    direction={orderBy === 'age' ? order : 'asc'}
                                    onClick={() => handleRequestSort('age')}
                                >
                                    Age
                                </TableSortLabel>
                            </TableCell>
                            <TableCell>
                                <TableSortLabel
                                    active={orderBy === 'country'}
                                    direction={orderBy === 'country' ? order : 'asc'} // 修正方向属性
                                    onClick={() => handleRequestSort('country')}
                                >
                                    Country
                                </TableSortLabel>
                            </TableCell> */}
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {displayRows.map((row, index) => (
                            <TableRow hover tabIndex={-1} key={row.name}>
                                <TableCell>{row.name}</TableCell>
                                <TableCell>{row.age}</TableCell>
                                <TableCell>{row.country}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
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