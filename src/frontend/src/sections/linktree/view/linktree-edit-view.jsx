"use client";

import { useEffect, useState } from "react";
import { Box, Button, Card, Grid, Typography } from "@mui/material";
import { DashboardContent } from "src/layouts/dashboard";
import { LinkItem } from "../linkItem";
import { paths } from "../../../routes/paths";

import { Iconify } from "../../../components/iconify";
import { useAuthContext } from "../../../auth/hooks";
import { LinksDisplay } from "../linksDisplay";
import axios, { endpoints } from "../../../utils/axios";
import { toast } from "src/components/snackbar";

export function LinktreeEditView() {
  const [links, setLinks] = useState([]);
  const [isSaveDisabled, setIsSaveDisabled] = useState(false);
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchLinks = async () => {
      try {
        const response = await axios.get(endpoints.links.getLinks(user.id));
        setLinks(response.data);
      } catch (error) {
        toast.error("Failed to fetch links");
      }
    };

    if (user?.id) {
      fetchLinks();
    }
  }, [user?.id]);

  useEffect(() => {
    const hasInvalidUrl = links.some((link) => !isValidUrl(link.url));
    const hasEmptyName = links.some((link) => !link.name?.trim());

    setIsSaveDisabled(hasInvalidUrl || hasEmptyName);
  }, [links]);

  const isValidUrl = (url) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const addLink = () => {
    setLinks([...links, { id: Date.now(), name: "", url: "" }]);
  };

  const removeLink = (id) => {
    setLinks(links.filter((link) => link.id !== id));
  };

  const updateLink = (id, name, url = "") => {
    setLinks(links.map((link) => (link.id === id ? { ...link, name, url } : link)));
  };

  const handleSave = async () => {
    try {
      await axios.post(endpoints.links.createLink(user.id), links.map(({ name, url }) => ({ name, url })));

      toast.success("Linktree saved successfully");
    } catch (error) {
      toast.error("An error occurred while saving Linktree");
    }
  };

  return (
    <DashboardContent>
      <Box sx={{ justifyContent: "flex-end", display: "flex" }}>
        <Button
          variant="contained"
          endIcon={<Iconify icon="cuida:open-in-new-tab-outline" />}
          onClick={() => window.open(paths.linkTree.view(user.id, "_blank", "noopener,noreferrer"))}
        >
          Preview
        </Button>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Card
            sx={{
              p: 3,
              gap: 2,
              mt: 3,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "relative",
            }}
          >
            <LinksDisplay links={links} profileData={user} />
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
            {links.map((link, index) => (
              <LinkItem key={link.id} id={link.id} link={link} index={index} onRemove={removeLink} onChange={updateLink} />
            ))}
            <Button sx={{ mt: 3 }} disabled={links.length > 4} variant="outlined" color="primary" fullWidth onClick={addLink}>
              + Add new Link
            </Button>
          </Card>
        </Grid>
      </Grid>
      <Box sx={{ justifyContent: "flex-end", display: "flex", mt: 1 }}>
        <Button
          variant="outlined"
          onClick={handleSave}
          startIcon={<Iconify icon="material-symbols-light:save-outline" />}
          disabled={isSaveDisabled}
        >
          Save
        </Button>
      </Box>
    </DashboardContent>
  );
}
