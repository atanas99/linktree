'use client';

import {useCallback, useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';

import {useTheme} from '@mui/material/styles';
import {Scrollbar} from 'src/components/scrollbar';
import {Iconify} from 'src/components/iconify';
import {useAuthContext} from 'src/auth/hooks';
import {AccountButton} from './account-button';
import {SignOutButton} from './sign-out-button';
import {useBoolean} from '../../hooks/use-boolean';
import {ProfileUpdateView} from '../../sections/profile/view/update-profile-view';

export function AccountDrawer({sx, ...other}) {
  const theme = useTheme();
  const profileUpdateOpen = useBoolean(false);
  const {user} = useAuthContext();
  const [open, setOpen] = useState(false);
  const [avatarPreview, setAvatarPreview] = useState(null);

  useEffect(() => {
    if (user?.content) {
      setAvatarPreview(`data:image/png;base64,${user.content}`);
    }
  }, [user?.content]);

  const handleOpenDrawer = useCallback(() => {
    setOpen(true);
  }, []);

  const handleCloseDrawer = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <>
      <AccountButton
        open={open}
        onClick={handleOpenDrawer}
        photoURL={avatarPreview}
        displayName={user?.name}
        sx={sx}
        {...other}
      />

      <Drawer
        open={open}
        onClose={handleCloseDrawer}
        anchor="right"
        PaperProps={{sx: {width: 320}}}
      >
        <IconButton
          onClick={handleCloseDrawer}
          sx={{top: 12, left: 12, zIndex: 9, position: 'absolute'}}
        >
          <Iconify icon="mingcute:close-line"/>
        </IconButton>

        <Scrollbar>
          <Stack alignItems="center" sx={{pt: 8}}>
            <Avatar src={avatarPreview} alt={user?.name} sx={{width: 96, height: 96}}/>

            <Typography variant="subtitle1" noWrap sx={{mt: 2}}>
              {user?.name} {user?.surname}
            </Typography>

            <Typography variant="body2" sx={{color: 'text.secondary', mt: 0.5}} noWrap>
              {user?.email}
            </Typography>
          </Stack>
        </Scrollbar>

        <ProfileUpdateView open={profileUpdateOpen.value} currentUser={user} onClose={profileUpdateOpen.onFalse}/>

        <Box sx={{p: 2.5}}>
          <Button variant="outlined" fullWidth onClick={profileUpdateOpen.onTrue}>
            Edit Profile Details
          </Button>
        </Box>

        <Box sx={{p: 2.5}}>
          <SignOutButton onClose={handleCloseDrawer}/>
        </Box>
      </Drawer>
    </>
  );
}
