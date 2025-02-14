"use client";


import { useState } from 'react';
import { Button, Card, Grid, Typography, Box, Image } from '@mui/material';
import { DashboardContent } from 'src/layouts/dashboard';
import { LinkItem } from '../linkItem';

export function LinktreeCreateView() {
    const [links, setLinks] = useState([]);

    const addLink = () => {
        setLinks([...links, { id: Date.now() }]);
    };

    const removeLink = (id) => {
        setLinks(links.filter(link => link.id !== id));
    };

    return (
        <DashboardContent>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    <Card sx={{ p: 3, gap: 2, mt: 3, display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <img src="/assets/illustrations/illustration-phone-mockup.svg" alt="Linktree" />
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
                            <LinkItem key={link.id} id={link.id} onRemove={removeLink} />
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
