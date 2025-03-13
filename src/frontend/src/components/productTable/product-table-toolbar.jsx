import {useCallback, useEffect, useState} from 'react';

import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

import {Iconify} from 'src/components/iconify';
import {Avatar, Typography} from "@mui/material";

// ----------------------------------------------------------------------

export function ProductTableToolbar({filters, onResetPage, profile}) {
  const [avatarPreview, setAvatarPreview] = useState(null);

  useEffect(() => {
    if (profile?.content) {
      setAvatarPreview(`data:image/png;base64,${profile.content}`);
    }
  }, [profile?.content]);

  const handleFilterName = useCallback(
    (event) => {
      onResetPage();
      filters.setState({name: event.target.value});
    },
    [filters, onResetPage]
  );

  return (
    <Stack
      direction="row"
      spacing={2}
      alignItems="center"
      justifyContent="space-between"
      sx={{p: 2.5}}
    >
      <Stack direction="row" spacing={1} alignItems="center">
        <Avatar
          src={avatarPreview}
          alt={null}
          sx={{width: 100, height: 100}}
        />
        <Stack spacing={0.5}>
          <Typography variant="h5" fontWeight="bold">
            {profile?.name} {profile?.surname}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {profile?.email}
          </Typography>
        </Stack>
      </Stack>


      <TextField
        value={filters.state.name}
        onChange={handleFilterName}
        placeholder="Search product..."
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Iconify icon="eva:search-fill" sx={{color: 'text.disabled'}}/>
            </InputAdornment>
          ),
        }}
        sx={{width: 250}}
      />
    </Stack>

  );
}

