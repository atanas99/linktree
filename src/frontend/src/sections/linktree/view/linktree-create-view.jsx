"use client";

import { useState } from 'react';
import { Button, Card, Grid, Typography, Box } from '@mui/material';
import { DashboardContent } from 'src/layouts/dashboard';
import { LinkItem } from '../linkItem';
import {getIconByName, getColorByName} from "../socialMediaStyles";


import {Iconify} from "../../../components/iconify";





export function LinktreeCreateView() {
  const [links, setLinks] = useState([]);

  const addLink = () => {
    setLinks([...links, { id: Date.now(), name: "", url: "" }]);
  };

  const removeLink = (id) => {
    setLinks(links.filter(link => link.id !== id));
  };

  const updateLink = (id, name, url = "") => {
    setLinks(links.map(link => link.id === id ? { ...link, name, url } : link));
  };

  return (
    <DashboardContent>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Card sx={{ p: 3, gap: 2, mt: 3, display: "flex", flexDirection: "column", alignItems: "center", position: "relative" }}>
            <Box sx={{ width: "100%", maxWidth: "307px", position: "relative" }}>
              <img
                src="/assets/illustrations/illustration-phone-mockup.svg"
                alt="Linktree"
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "contain",
                  display: "block"
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: "43%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "80%",
                  display: "flex",
                  flexDirection: "column",
                  gap: 1
                }}
              >
                {links.map((link, index) => link.name && (
                  <Button
                    key={link.id}
                    fullWidth
                    variant="contained"
                    startIcon={<Iconify icon={getIconByName(link.name)} />}
                    sx={{
                      position: "relative",
                      width: "100%",
                      height: "50px",
                      mt: `${index + 3}px`
                    }}
                  >
                    {link.name}
                  </Button>
                ))}
              </Box>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={12} md={8}>
          <Card sx={{ p: 3, gap: 2, mt: 3 }}>
            <Typography variant="h3" gutterBottom>
              Customize your linktree
            </Typography>
            <Typography variant="body1" gutterBottom>
              Add your links, social media, and more.
            </Typography>
            {links.map(link => (
              <LinkItem key={link.id} id={link.id} link={link} onRemove={removeLink} onChange={updateLink} />
            ))}
            <Button sx={{ mt: 3 }} variant="outlined" color="primary" fullWidth onClick={addLink}>
              + Add new Link
            </Button>
          </Card>
        </Grid>
      </Grid>
    </DashboardContent>
  );
}
