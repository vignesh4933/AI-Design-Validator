import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Box } from '@mui/material';

interface ValidationRow {
  field: string;
  provided: string | number | null;
  expected: string;
  status: 'PASS' | 'WARN' | 'FAIL';
  comment: string;
}

interface ResultsTableProps {
  rows: ValidationRow[];
}

export default function ResultsTable({ rows }: ResultsTableProps) {
  const columns: GridColDef[] = [
    {
      field: 'field',
      headerName: 'Attribute',
      flex: 1,
    },
    {
      field: 'provided',
      headerName: 'Provided',
      flex: 1,
      valueFormatter: (params) =>
        params.value === null || params.value === undefined ? '—' : params.value,
    },
    {
      field: 'expected',
      headerName: 'Expected',
      flex: 1.5,
    },
    {
      field: 'status',
      headerName: 'Status',
      flex: 0.7,
      // Plain text display
    },
    {
      field: 'comment',
      headerName: 'Comment',
      flex: 2,
    },
  ];

  // Add unique ID for each row
  const gridRows = rows.map((row, index) => ({
    id: index,
    ...row,
  }));

  return (
    <Box sx={{ height: 420, width: '100%', mt: 2 }}>
      <DataGrid
        rows={gridRows}
        columns={columns}
        disableRowSelectionOnClick
        hideFooter
        sx={{
          border: 'none',
          color: 'text.primary',
          '& .MuiDataGrid-columnHeaders': {
            borderBottom: '1px solid',
            borderColor: 'divider',
          },
          '& .MuiDataGrid-cell': {
            borderBottom: '1px solid',
            borderColor: 'divider',
          },
        }}
      />
    </Box>
  );
}
