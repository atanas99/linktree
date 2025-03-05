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
import {useEffect, useState} from "react";
import axios, {endpoints} from "../../utils/axios";
import {toast} from "../../components/snackbar";

// ----------------------------------------------------------------------

export function LinktreeViewHero({ userId, sx, ...other }) {
  const theme = useTheme();
  const router = useRouter();
  const [links, setLinks] = useState([]);
  useEffect(() => {
    const fetchLinks = async () => {
      try {
        const response = await axios.get(endpoints.links.getLinks(userId));
        setLinks(response.data);
      } catch (error) {
        toast.error("Failed to fetch links");
      }
    };
    const fetchProfileDetails = async () => {
      try {
        const response = await axios.get(endpoints.users.getUser(userId));
        setProfile(response.data);
      } catch (error) {
        toast.error("Failed to fetch profile details");
      }
    }
    if (userId) {
      fetchLinks();
    }
  }, [userId]);

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
