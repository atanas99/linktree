import { useTheme } from '@mui/material/styles';
import { Box, Stack, Container, Typography } from '@mui/material';

import { varAlpha, textGradient } from 'src/theme/styles';

import { AnimateAvatar } from 'src/components/animate';

import { useAuthContext } from 'src/auth/hooks';

import { HeroBackground } from './components/hero-background';
import { Button } from '@mui/material';
import { useRouter } from 'src/routes/hooks';
import { paths } from 'src/routes/paths';

// ----------------------------------------------------------------------

export function HomeHero({ sx, ...other }) {
  const theme = useTheme();
  const router = useRouter();

  const renderHeading = (
    <Box
      component="h1"
      display="flex"
      flexWrap="wrap"
      justifyContent="center"
      sx={{
        ...theme.typography.h2,
        my: 0,
        mx: 'auto',
        maxWidth: 680,
        fontFamily: theme.typography.fontSecondaryFamily,
        [theme.breakpoints.up('lg')]: { fontSize: 72, lineHeight: '90px' },
      }}
    >
      <Box component="span" sx={{ width: 1, opacity: 0.24 }}>
        linkme
      </Box>
      Welcome
    </Box>
  );

  return (
    <Stack
      component="section"
      sx={{
        overflow: 'hidden',
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...sx,
      }}
      {...other}
    >
      <Container
        sx={{
          py: 3,
          gap: 5,
          zIndex: 9,
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          textAlign: 'center',
        }}
      >
        <Stack spacing={3} sx={{ mt: '-10%' }}>
          {renderHeading}
        </Stack>
        <Button onClick={() => router.push(paths.linkTree.create)}  variant = "outlined">Get Started</Button>
      </Container>
      <HeroBackground />
    </Stack>
  );
}
