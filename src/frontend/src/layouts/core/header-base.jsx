import Box from '@mui/material/Box';
import {styled, useTheme} from '@mui/material/styles';


import {Logo} from 'src/components/logo';

import {HeaderSection} from './header-section';
import {AccountDrawer} from '../components/account-drawer';
import {SettingsButton} from '../components/settings-button';

// ----------------------------------------------------------------------

const StyledDivider = styled('span')(({theme}) => ({
  width: 1,
  height: 10,
  flexShrink: 0,
  display: 'none',
  position: 'relative',
  alignItems: 'center',
  flexDirection: 'column',
  marginLeft: theme.spacing(2.5),
  marginRight: theme.spacing(2.5),
  backgroundColor: 'currentColor',
  color: theme.vars.palette.divider,
  '&::before, &::after': {
    top: -5,
    width: 3,
    height: 3,
    content: '""',
    flexShrink: 0,
    borderRadius: '50%',
    position: 'absolute',
    backgroundColor: 'currentColor',
  },
  '&::after': {bottom: -5, top: 'auto'},
}));

// ----------------------------------------------------------------------

export function HeaderBase({
                             sx,
                             data,
                             slots,
                             slotProps,
                             onOpenNav,
                             layoutQuery,

                             slotsDisplay: {
                               account = true,
                               settings = true,
                               menuButton = true,
                             } = {},

                             ...other
                           }) {
  const theme = useTheme();

  return (
    <HeaderSection
      sx={sx}
      layoutQuery={layoutQuery}
      slots={{
        ...slots,
        leftAreaStart: slots?.leftAreaStart,
        leftArea: (
          <>
            {slots?.leftAreaStart}

            {/* -- Logo -- */}
            <Logo/>

            {/* -- Divider -- */}
            <StyledDivider data-slot="divider"/>


            {slots?.leftAreaEnd}
          </>
        ),
        rightArea: (
          <>
            {slots?.rightAreaStart}

            <Box
              data-area="right"
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: {xs: 1, sm: 1.5},
              }}
            >

              {/* -- Settings button -- */}
              {settings && <SettingsButton data-slot="settings"/>}

              {/* -- Account drawer -- */}
              {account && <AccountDrawer data-slot="account" data={data?.account}/>}


            </Box>

            {slots?.rightAreaEnd}
          </>
        ),
      }}
      slotProps={slotProps}
      {...other}
    />
  );
}
