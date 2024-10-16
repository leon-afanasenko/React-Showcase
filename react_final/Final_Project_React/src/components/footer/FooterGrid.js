import * as React from "react";
import {
  Box,
  Grid,
  Typography,
  Paper,
  IconButton,
  useTheme,
  ThemeProvider,
} from "@mui/material";
import whatsapp from "../../assets/ic-whatsapp.svg";
import instagram from "../../assets/ic-instagram.svg";
import "./FooterGrid.css";

const Footer = () => {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ maxWidth: "1440px", m: "0 auto" }}>
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            fontSize: "clamp(45px, 6vw, 64px)",
            fontWeight: 700,
            textAlign: "left",
            mb: 5,
            color: theme.palette.primary,
          }}
          className="footerTitle"
        >
          Contact
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={8} md={8}>
            <Paper
              elevation={0}
              sx={{
                m: "0 20px",
                p: 4,
                display: "flex",
                flexDirection: "column",
                textAlign: "left",
                alignItems: "flex-start",
                justifyContent: "center",
                height: "150px",
                backgroundColor: "#F1F3F4",
                borderRadius: "12px",
              }}
            >
              <Typography
                sx={{
                  fontSize: 20,
                  fontWeight: 500,
                  color: "#8B8B8B",
                  fontFamily: "Montserrat",
                }}
              >
                Phone
              </Typography>
              <Typography
                sx={{
                  fontSize: "clamp(18px, 3.5vw, 40px)",
                  fontWeight: 600,
                  fontFamily: "Montserrat",
                }}
              >
                +49 30 915-88492
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <Paper
              elevation={0}
              sx={{
                m: "0 20px",
                p: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
                height: "150px",
                backgroundColor: "#F1F3F4",
                borderRadius: "12px",
                textAlign: "left",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "left",
                }}
              >
                <Typography
                  sx={{
                    fontSize: 20,
                    fontWeight: 500,
                    color: "#8B8B8B",
                    fontFamily: "Montserrat",
                  }}
                >
                  Social
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <IconButton sx={{ pl: 0, color: theme.palette.primary.main }}>
                    <a href="https://www.instagram.com/hurtfeelingsleon_no?igsh=MTZrM3dpNWRmYnAyYw%3D%3D&utm_source=qr">
                      {" "}
                      <img
                        src={instagram}
                        alt="Instagram"
                        style={{ height: "38px" }}
                      />
                    </a>
                  </IconButton>
                  <IconButton sx={{ color: theme.palette.primary.main }}>
                    <a href="https://t.me/Lower_Case_bot">
                      {" "}
                      <img
                        src={whatsapp}
                        alt="WhatsApp"
                        style={{ height: "38px" }}
                      />
                    </a>
                  </IconButton>
                </Box>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={8} md={8}>
            <Paper
              elevation={0}
              sx={{
                m: "0 20px",
                p: 4,
                display: "flex",
                flexDirection: "column",
                textAlign: "left",
                alignItems: "flex-start",
                justifyContent: "center",
                backgroundColor: "#F1F3F4",
                borderRadius: "12px",
                height: "190px",
              }}
            >
              <Typography
                sx={{
                  fontSize: 20,
                  fontWeight: 500,
                  color: "#8B8B8B",
                  fontFamily: "Montserrat",
                }}
              >
                Address
              </Typography>
              <Typography
                sx={{
                  fontSize: "clamp(18px, 3.5vw, 40px)",
                  fontWeight: 600,
                  width: "85%",
                  fontFamily: "Montserrat",
                }}
              >
                Wallstraße 9-13, 10179 Berlin, Deutschland
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <Paper
              elevation={0}
              sx={{
                m: "0 20px",
                p: 4,
                display: "flex",
                flexDirection: "column",
                textAlign: "left",
                alignItems: "flex-start",
                justifyContent: "center",
                backgroundColor: "#F1F3F4",
                borderRadius: "12px",
                height: "190px",
              }}
            >
              <Typography
                sx={{
                  fontSize: 20,
                  fontWeight: 500,
                  color: "#8B8B8B",
                  fontFamily: "Montserrat",
                }}
              >
                Working Hours
              </Typography>
              <Typography
                sx={{
                  fontSize: "clamp(18px, 3.5vw, 40px)",
                  fontWeight: 600,
                  fontFamily: "Montserrat",
                }}
              >
                24 hours a day
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Box />
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default Footer;
