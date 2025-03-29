import {Card, IconButton, ListItemIcon, MenuItem, Select, Stack, TextField, Typography} from '@mui/material';
import {Iconify} from 'src/components/iconify';
import {socialMediaLinks} from "./socialMediaStyles";



//Item to display a link in the list

export function LinkItem({id, link, index, onRemove, onChange}) {
  return (
    <Card sx={{p: 2, mt: 2, display: 'flex', flexDirection: 'column', gap: 2}}>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="subtitle1">Link #{index + 1}</Typography>
        <IconButton onClick={() => onRemove(id)} color="error">
          <Iconify icon="bi:trash"/>
        </IconButton>
      </Stack>
      <Select fullWidth value={link.name} onChange={(e) => onChange(id, e.target.value)}>
        {socialMediaLinks.map((socialLink) => (
          <MenuItem key={socialLink.name} value={socialLink.name}>
            <ListItemIcon>
              <Iconify icon={socialLink.icon} sx={{mr: 2}}/> {socialLink.name}
            </ListItemIcon>
          </MenuItem>
        ))}
      </Select>
      <TextField fullWidth placeholder="Enter your link" value={link.url}
                 onChange={(e) => onChange(id, link.name, e.target.value)}/>
    </Card>
  );
}
