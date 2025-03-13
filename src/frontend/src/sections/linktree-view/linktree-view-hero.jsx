import {useTheme} from '@mui/material/styles';
import {Container, Stack} from '@mui/material';

import {HeroBackground} from './components/hero-background';
import {useRouter} from 'src/routes/hooks';
import {LinksDisplay} from "../linktree/linksDisplay";
import {useEffect, useState} from "react";
import axios, {endpoints} from "../../utils/axios";
import {toast} from "../../components/snackbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import {paths} from "../../routes/paths";

// ----------------------------------------------------------------------

export function LinktreeHero({userId, sx, ...other}) {

  const theme = useTheme();
  const router = useRouter();
  const [links, setLinks] = useState([]);
  const [profile, setProfile] = useState({});
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
        const response = await axios.get(endpoints.users.getUserById(userId));
        setProfile(response.data);
      } catch (error) {
        toast.error("Failed to fetch profile details");
      }
    }
    if (userId) {
      fetchLinks();
      fetchProfileDetails();
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

        <LinksDisplay profileData={profile} links={links}/>
        <Stack sx={{mt: -1, textAlign: "center"}}>
          <Typography variant="body2" sx={{color: "text.secondary", fontSize: 14}}>
            Want to create your own Linktree?
          </Typography>
          <Link href={paths.dashboard.root} sx={{
            fontSize: 14,
            fontWeight: 600,
            color: "primary.main",
            textDecoration: "none",
            '&:hover': {textDecoration: "underline"}
          }}>
            Click here
          </Link>
        </Stack>
      </Container>
      <HeroBackground/>
    </Stack>
  );
}
