import React from 'react';
import { Typography, Box, Link, Card, Grid } from '@mui/material';
import { DashboardContent } from "../../../layouts/dashboard";

export function DataProtectionView() {
  return (
    <DashboardContent>
      <Box sx={{ padding: 4 }}>
        <Box sx={{ marginBottom: 1, padding: 2 }}>
          <Typography variant="h4" gutterBottom sx={{ textAlign: 'center' }}>
            Data protection
          </Typography>
        </Box>
        <Card>
          <Box sx={{ padding: 3 }}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography variant="h6" gutterBottom>
                  General Information
                </Typography>
                <Typography variant="body1" gutterBottom>
                  The following information gives a simple overview of what happens to your personal data when you visit our website. Personal data is any data with which you could be personally identified. Detailed information on the subject of data protection can be found in our privacy policy listed below.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h6" gutterBottom>
                  Data Collection on Our Website
                </Typography>
                <Typography variant="body1" gutterBottom>
                  <strong>Who is responsible for data collection on this website?</strong><br />
                  The data processing on this website is carried out by the website operator. Their contact details can be found in the legal notice of this website.
                </Typography>
                <Typography variant="body1" gutterBottom>
                  <strong>How do we collect your data?</strong><br />
                  Your data is collected firstly by you communicating it to us. This can be, for example, data that you enter in a contact form.<br />
                  Other data is collected automatically by our IT systems when you visit the website. This is mainly technical data (e.g., internet browser, operating system, or time of the page call). This data is collected automatically as soon as you enter our website.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h6" gutterBottom>
                  Your Rights
                </Typography>
                <Typography variant="body1" gutterBottom>
                  You have the right to obtain information about the origin, recipient, and purpose of your stored personal data at any time free of charge. You also have the right to request the correction, blocking, or deletion of this data. For this purpose, as well as for further questions on the subject of data protection, you can contact us at any time at the address given in the legal notice. Furthermore, you have the right to lodge a complaint with the competent supervisory authority.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h6" gutterBottom>
                  Analysis Tools and Tools from Third-Party Providers
                </Typography>
                <Typography variant="body1" gutterBottom>
                  When visiting our website, your surfing behavior can be statistically evaluated. This happens mainly with cookies and with so-called analysis programs. The analysis of your surfing behavior is usually anonymous; the surfing behavior cannot be traced back to you. You can object to this analysis or prevent it by not using certain tools. Detailed information on this can be found in the following privacy policy.
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Card>
      </Box>
    </DashboardContent>
  );
}
