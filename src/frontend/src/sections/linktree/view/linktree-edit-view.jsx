"use client";

import {useState} from 'react';
import {Button, Card, Grid, Typography, Box, Tab} from '@mui/material';
import {DashboardContent} from 'src/layouts/dashboard';
import {LinkItem} from '../linkItem';
import {getIconByName, getColorByName} from "../socialMediaStyles";
import {paths} from "../../../routes/paths";


import {Iconify} from "../../../components/iconify";
import {useAuthContext} from "../../../auth/hooks";
import {LinksDisplay} from "../linksDisplay";

export function LinktreeEditView() {
  const [links, setLinks] = useState([]);
  const {user} = useAuthContext();
  console.log(user)

  const addLink = () => {
    setLinks([...links, {id: Date.now(), name: "", url: ""}]);
  };

  const removeLink = (id) => {
    setLinks(links.filter(link => link.id !== id));
  };

  const updateLink = (id, name, url = "") => {
    setLinks(links.map(link => link.id === id ? {...link, name, url} : link));
  };


  return (
    <DashboardContent>
      <Box sx={{justifyContent: "flex-end", display: "flex"}}>
        <Button
          variant="contained"
          endIcon={<Iconify icon="cuida:open-in-new-tab-outline"/>}
          onClick={() => window.open(paths.linkTree.view(3, "_blank", "noopener,noreferrer"))}
        >
          Preview
        </Button>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Card sx={{
            p: 3,
            gap: 2,
            mt: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative"
          }}>
            <LinksDisplay links={links}/>
          </Card>
        </Grid>
        <Grid item xs={12} md={8}>
          <Card sx={{p: 3, gap: 2, mt: 3}}>
            <Typography variant="h3" gutterBottom>
              Customize your linktree
            </Typography>
            <Typography variant="body1" gutterBottom>
              Add your links, social media, and more.
            </Typography>
            {links.map((link, index) => (
              <LinkItem key={link.id} id={link.id} link={link} index={index} onRemove={removeLink}
                        onChange={updateLink}/>
            ))}
            <Button sx={{mt: 3}} variant="outlined" color="primary" fullWidth onClick={addLink}>
              + Add new Link
            </Button>
          </Card>
        </Grid>
      </Grid>
      <Box sx={{justifyContent: "flex-end", display: "flex"}}>
        <Button variant="outlined" startIcon={<Iconify icon="material-symbols-light:save-outline"/>}>Save</Button>
      </Box>
    </DashboardContent>
  );
}
