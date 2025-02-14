import { Card, IconButton, MenuItem, Select, Stack, TextField, Typography } from '@mui/material';
import { Iconify } from 'src/components/iconify';

export function LinkItem({ id, onRemove }) {
    return (
        <Card sx={{ p: 2, mt: 2, display: 'flex', flexDirection: 'column', gap: 2, color: 'primary' }}>
            <Stack direction="row" justifyContent="space-between">
                <Typography variant="subtitle1">Link #{id}</Typography>
                <IconButton onClick={() => onRemove(id)} color="error">
                    <Iconify icon="bi:trash" />
                </IconButton>
            </Stack>
            <Select fullWidth>
                <MenuItem value="GitHub">GitHub</MenuItem>
                <MenuItem value="YouTube">YouTube</MenuItem>
                <MenuItem value="Twitter">Twitter</MenuItem>
            </Select>
            <TextField fullWidth placeholder="Enter your link" />

        </Card>
    );
};