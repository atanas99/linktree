'use client';

import {forwardRef, useId} from 'react';

import Box from '@mui/material/Box';
import NoSsr from '@mui/material/NoSsr';
import {useTheme} from '@mui/material/styles';

import {RouterLink} from 'src/routes/components';

import {logoClasses} from './classes';

// ----------------------------------------------------------------------

export const Logo = forwardRef(
  ({width = 100, height = 100, disableLink = false, className, href = '/', sx, ...other}, ref) => {
    const theme = useTheme();

    const gradientId = useId();

    const PRIMARY_LIGHT = theme.vars.palette.primary.light;

    const PRIMARY_MAIN = theme.vars.palette.primary.main;

    const PRIMARY_DARK = theme.vars.palette.primary.dark;

    const logo = (<Box alt="logo" component="img" src="/logo/logo.png" width={width} height={height}/>);


    return (
      <NoSsr
        fallback={
          <Box
            width={width}
            height={height}
            className={logoClasses.root.concat(className ? ` ${className}` : '')}
            sx={{
              flexShrink: 0,
              display: 'inline-flex',
              verticalAlign: 'middle',
              ...sx,
            }}
          />
        }
      >
        <Box
          ref={ref}
          component={RouterLink}
          href={href}
          width={width}
          height={height}
          className={logoClasses.root.concat(className ? ` ${className}` : '')}
          aria-label="logo"
          sx={{
            flexShrink: 0,
            display: 'inline-flex',
            verticalAlign: 'middle',
            ...(disableLink && {pointerEvents: 'none'}),
            ...sx,
          }}
          {...other}
        >
          {logo}
        </Box>
      </NoSsr>
    );
  }
);
