import React from 'react';
import { Typography, Box, Link, Card, Grid } from '@mui/material';
import { DashboardContent } from "../../../layouts/dashboard";

export function LegalNoticeView() {
  return (
    <DashboardContent>
      <Box sx={{ padding: 4 }}>
        <Box sx={{ marginBottom: 1, padding: 2 }}>
          <Typography variant="h4" gutterBottom sx={{ textAlign: 'center' }}>
            Legal notice
          </Typography>
        </Box>
        <Card>
          <Box sx={{ padding: 3 }}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={4}>
                <Typography variant="h6" gutterBottom>
                  Information according to § 5 TMG
                </Typography>
                <Typography variant="body1" gutterBottom>
                  <strong>Company Name</strong><br />
                  Sample Street 1<br />
                  12345 Sample City<br />
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Represented by:<br />
                  John Doe<br />
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Typography variant="h6" gutterBottom>
                  Contact
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Phone: +49 (0) 123 456789<br />
                  Fax: +49 (0) 123 456788<br />
                  Email: info@samplecompany.com<br />
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Typography variant="h6" gutterBottom>
                  Responsible for Content according to § 55 Abs. 2 RStV
                </Typography>
                <Typography variant="body1" gutterBottom>
                  John Doe<br />
                  Sample Street 1<br />
                  12345 Sample City<br />
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Typography variant="h6" gutterBottom>
                  EU Dispute Resolution
                </Typography>
                <Typography variant="body1" gutterBottom>
                  The European Commission provides a platform for online dispute resolution (ODR): <Link href="https://ec.europa.eu/consumers/odr">https://ec.europa.eu/consumers/odr</Link>.<br />
                  Our email address can be found above in the legal notice.
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Typography variant="h6" gutterBottom>
                  Consumer Dispute Resolution/Universal Arbitration Board
                </Typography>
                <Typography variant="body1" gutterBottom>
                  We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Card>
      </Box>
    </DashboardContent>
  );
}
