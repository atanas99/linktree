import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import Avatar from '@mui/material/Avatar';

import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Image from "next/image";


// ----------------------------------------------------------------------

export function ProductTableRow({row}) {


    return (
      <TableRow hover>
        <TableCell>
          <Stack spacing={2} direction="row" alignItems="center">
            <Stack
              sx={{
                typography: 'body2',
                flex: '1 1 auto',
                alignItems: 'flex-start',
              }}
            >
              {row.image &&
              <Image src={row.image} alt={null} width={50} height={50} />
              }
            </Stack>
          </Stack>
        </TableCell>
        <TableCell>{row.name}</TableCell>
        <TableCell> {row.category} </TableCell>
        <TableCell> {row.url} </TableCell>
      </TableRow>
    );
}
