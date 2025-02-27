import { useTheme } from '@mui/material/styles';
import {Box, Stack, Container, Typography, Card} from '@mui/material';

import { varAlpha, textGradient } from 'src/theme/styles';

import { AnimateAvatar } from 'src/components/animate';

import { useAuthContext } from 'src/auth/hooks';

import { HeroBackground } from './components/hero-background';
import { Button } from '@mui/material';
import { useRouter } from 'src/routes/hooks';
import { paths } from 'src/routes/paths';
import {LinksDisplay} from "../linktree/linksDisplay";

// ----------------------------------------------------------------------

export function LinktreeViewHero({ sx, ...other }) {
  const theme = useTheme();
  const router = useRouter();
  const links = [
    {
      id: 1740655535584,
      name: "YouTube",
      url: "https://www.youtube.com"
    },
    {
      id: 1740655540001,
      name: "GitHub",
      url: "https://www.github.com"
    },
    {
      id: 1740655541234,
      name: "Google",
      url: "https://www.google.com"
    },
    {
      id: 1740655545678,
      name: "Stack Overflow",
      url: "https://stackoverflow.com"
    },
    {
      id: 1740655549101,
      name: "MDN Web Docs",
      url: "https://developer.mozilla.org"
    }
  ];

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

        <LinksDisplay links={links}/>
      </Container>
      <HeroBackground />
    </Stack>
  );
}
