import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import Avatar from '@mui/material/Avatar';

import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Image from "next/image";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";


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
              {row.content &&
                <img src={row.content} alt="Product" style={{width: "100px", height: "100px", objectFit: "cover"}}/>
              }
            </Stack>
          </Stack>
        </TableCell>
        <TableCell>{row.name}</TableCell>
        <TableCell> {row.category} </TableCell>
        <TableCell> <Button href={row.url}> Visit Product </Button> </TableCell>
      </TableRow>
    );
}
