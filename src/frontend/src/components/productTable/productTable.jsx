'use client';

import {useCallback, useEffect, useState} from 'react';

import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Card from '@mui/material/Card';
import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import TableBody from '@mui/material/TableBody';

import {paths} from 'src/routes/paths';
import {useRouter} from 'src/routes/hooks';

import {useBoolean} from 'src/hooks/use-boolean';
import {useSetState} from 'src/hooks/use-set-state';

import {fIsAfter, fIsBetween} from 'src/utils/format-time';

import {varAlpha} from 'src/theme/styles';
import {DashboardContent} from 'src/layouts/dashboard';

import {Label} from 'src/components/label';
import {Iconify} from 'src/components/iconify';
import {Scrollbar} from 'src/components/scrollbar';
import {
  emptyRows,
  getComparator,
  rowInPage,
  TableEmptyRows,
  TableHeadCustom,
  TableNoData,
  TablePaginationCustom,
  useTable,
} from 'src/components/table';

import {ProductTableRow} from './product-table-row';
import {ProductTableToolbar} from './product-table-toolbar';
import {ProductTableFiltersResult} from './product-table-filters-result';
import {useAuthContext} from 'src/auth/hooks';

// ----------------------------------------------------------------------


const TABLE_HEAD = [
  {id: 'img', label: 'Image', width: 140},
  {id: 'name', label: 'Name', width: 140},
  {id: 'category', label: 'Category', width: 140},
  {id: 'url', label: 'URL', width: 140},
];

// ----------------------------------------------------------------------

export function ProductTable({products, profile}) {

  const table = useTable({defaultOrderBy: 'name'});

  const [tableData, setTableData] = useState(products || []);

  useEffect(() => {
    setTableData(products || []);
  }, [products]);

  const filters = useSetState({
    name: '',
    status: 'all',
    startDate: null,
    endDate: null,
  });

  const dateError = fIsAfter(filters.state.startDate, filters.state.endDate);

  const dataFiltered = applyFilter({
    inputData: tableData,
    comparator: getComparator(table.order, table.orderBy),
    filters: filters.state,
    dateError,
  });

  const canReset =
    !!filters.state.name ||
    filters.state.status !== 'all' ||
    (!!filters.state.startDate && !!filters.state.endDate);

  const notFound = (!dataFiltered.length && canReset) || !dataFiltered.length;

  const renderContent = () => {
    return (
          <Card sx={{pt: 3, minWidth: 1000, mt: 3}}>
            <ProductTableToolbar
              filters={filters}
              onResetPage={table.onResetPage}
              dateError={dateError}
              profile={profile}
            />

            {canReset && (
              <ProductTableFiltersResult
                filters={filters}
                totalResults={dataFiltered.length}
                onResetPage={table.onResetPage}
                sx={{p: 2.5, pt: 0}}
              />
            )}

            <Box sx={{position: 'relative'}}>
              <Scrollbar sx={{minHeight: 444}}>
                <Table size={table.dense ? 'small' : 'medium'} sx={{minWidth: 960}}>
                  <TableHeadCustom
                    order={table.order}
                    orderBy={table.orderBy}
                    headLabel={TABLE_HEAD}
                    rowCount={dataFiltered.length}
                    onSort={table.onSort}
                  />

                  <TableBody>
                    {dataFiltered
                      .slice(
                        table.page * table.rowsPerPage,
                        table.page * table.rowsPerPage + table.rowsPerPage
                      )
                      .map((row) => (
                        <ProductTableRow key={`${row.name}-${row.id}`} row={row} />
                      ))}

                    <TableEmptyRows
                      height={table.dense ? 56 : 56 + 20}
                      emptyRows={emptyRows(table.page, table.rowsPerPage, dataFiltered.length)}
                    />

                    <TableNoData notFound={notFound}/>
                  </TableBody>
                </Table>
              </Scrollbar>
            </Box>

            <TablePaginationCustom
              page={table.page}
              dense={table.dense}
              count={dataFiltered.length}
              rowsPerPage={table.rowsPerPage}
              onPageChange={table.onChangePage}
              onChangeDense={table.onChangeDense}
              onRowsPerPageChange={table.onChangeRowsPerPage}
            />
          </Card>
    );
  }
  return (
    renderContent()
  );
}

function applyFilter({inputData, comparator, filters, dateError}) {
  const {status, name, startDate, endDate} = filters;

  const stabilizedThis = inputData.map((el, index) => [el, index]);

  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });

  inputData = stabilizedThis.map((el) => el[0]);

  if (name) {
    inputData = inputData.filter(
      (order) => order.name.toLowerCase().indexOf(name.toLowerCase()) !== -1
    );
  }

  if (status !== 'all') {
    inputData = inputData.filter((order) => order.status === status);
  }

  if (!dateError) {
    if (startDate && endDate) {
      inputData = inputData.filter((order) => fIsBetween(order.createdAt, startDate, endDate));
    }
  }

  return inputData;
}
