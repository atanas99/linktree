import {Box, Button, Card} from "@mui/material";
import {Iconify} from "../../components/iconify";
import {getColorByName, getIconByName} from "./socialMediaStyles";

export function LinksDisplay({ links }) {
  return (

      <Box sx={{width: "100%", maxWidth: "307px", position: "relative"}}>
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
              color="primary"
              variant="contained"
              href={link.url}
              startIcon={<Iconify icon={getIconByName(link.name)}/>}
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
          ))}
        </Box>
      </Box>
  );
}
