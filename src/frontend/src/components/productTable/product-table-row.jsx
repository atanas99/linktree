import Stack from '@mui/material/Stack';

import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Link from "@mui/material/Link";


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
      <TableCell> <Link href={row.url} sx={{
        fontSize: 14,
        fontWeight: 600,
        color: "primary.main",
        textDecoration: "none",
        '&:hover': {textDecoration: "underline"}
      }}> Visit Product </Link> </TableCell>
    </TableRow>
  );
}
