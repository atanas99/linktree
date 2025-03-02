import { Avatar, Box, Button, Typography } from "@mui/material";
import { Iconify } from "../../components/iconify";
import { getColorByName, getIconByName } from "./socialMediaStyles";

export function LinksDisplay({ links, profileData }) {
  return (
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
      {/* Profilbereich */}
      <Box
        sx={{
          position: "absolute",
          top: "18%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "80%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center"
        }}
      >
        <Avatar
          src={profileData?.avatar}
          alt={profileData?.firstName}
          sx={{ width: 70, height: 70, mb: 1 }}
        />
        <Typography variant="h6" fontWeight="bold">
          {profileData?.firstName} {profileData?.lastName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {profileData?.email}
        </Typography>
      </Box>

      {/* Links */}
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
        {links.map((link, index) =>
          link.name ? (
            <Button
              key={link.id}
              fullWidth
              color="primary"
              variant="contained"
              href={link.url}
              startIcon={<Iconify icon={getIconByName(link.name)} />}
              sx={{
                backgroundColor: getColorByName(link.name),
                position: "relative",
                width: "100%",
                height: "50px",
                mt: `${index + 3}px`
              }}
            >
              {link.name}
            </Button>
          ) : null
        )}
      </Box>
    </Box>
  );
}
