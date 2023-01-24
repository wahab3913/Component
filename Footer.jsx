import React from "react";

import {
  Box,
  Container,
  Grid,
  IconButton,
  styled,
  Typography,
  useMediaQuery,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

import Facebook from "../../assets/facebook.png";
import twiter from "../../assets/twi.png";
import linked from "../../assets/linked.png";
import insta from "../../assets/insta.png";

const IconBox = styled(Box)({
  backgroundColor: "transparent",
  borderRadius: " 50px",
  border: " 1px solid white",
  width: "42px",
  height: "42px",
  "&:hover": {
    border: " 1px solid #6FDA44",
    transition: "0.5s",
  },
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const SiteLinks = [
  { text: "Home page", link: "" },
  { text: "How it works", link: "" },
  { text: "Artist service", link: "" },
  { text: "FAQs", link: "" },
  { text: "About Us", link: "" },
  { text: "Contact Us", link: "" },
  { text: "Nft Shop Signup", link: "" },
  { text: "Sitemap", link: "" },
];

const icons = [FacebookIcon, LinkedInIcon, TwitterIcon, InstagramIcon];

const Corporate = [
  "SNISER LTD",
  "3rd Floor",
  "86-90 Paul Street",
  "London",
  "EC2A 4NE",
  "support@sniser.com",
  "Registered in England and Wales (1314945)",
];

const Footer = () => {
  const matches = useMediaQuery("(max-width:900px)");

  return (
    <Box backgroundColor="#000000">
      {/* Main footer>>>>>>>>>>>>>> */}
      <Box
        sx={{
          backgroundColor: "#2D3539",
          py: { md: 5, xs: 3 },
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item md={4} xs={12}>
              <Box>
                <Typography
                  sx={{
                    fontSize: "27px",
                    color: "white",
                    fontWeight: 700,
                  }}
                >
                  <span
                    style={{
                      color: "#6FDA44",
                    }}
                  >
                    S
                  </span>
                  NISER
                </Typography>
                <Typography
                  sx={{
                    color: "white",
                    my: 3,
                    fontSize: "17px",
                    fontWeight: 700,
                  }}
                >
                  Sniser provides an innovative solution to product artists
                  creativity using blockchain technology.
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    gap: 3,
                  }}
                >
                  {icons.map((Icon, i) => (
                    <IconBox key={i}>
                      <IconButton>
                        <Icon
                          sx={{
                            color: "white",
                            fontSize: "25px",
                            "&:hover": {
                              color: "#6FDA44",
                              transition: "0.5s",
                            },
                          }}
                        />
                      </IconButton>
                    </IconBox>
                  ))}
                </Box>
              </Box>
            </Grid>
            <Grid item md={4} xs={12}>
              <Box>
                <Typography
                  sx={{
                    fontSize: "17px",
                    color: "white",
                    fontWeight: 700,
                  }}
                >
                  Site Links
                </Typography>
                {SiteLinks.map(({ text, link }, i) => {
                  return (
                    <Box key={i}>
                      <Typography
                        sx={{
                          fontSize: "13px",
                          color: "white",
                          fontWeight: 700,
                          mt: 2,
                        }}
                      >
                        {text}
                      </Typography>
                    </Box>
                  );
                })}
              </Box>
            </Grid>
            {matches ? (
              ""
            ) : (
              <Grid item md={4} xs={12}>
                {" "}
                <Box>
                  <Typography
                    sx={{
                      fontSize: "17px",
                      color: "white",
                      fontWeight: 700,
                    }}
                  >
                    Corporate Information
                  </Typography>
                  {Corporate.map((item, i) => {
                    console.log(item);
                    return (
                      <Box key={i}>
                        <Typography
                          sx={{
                            fontSize: "13px",
                            color: "white",
                            fontWeight: 700,
                            mt: 2,
                          }}
                        >
                          {item}
                        </Typography>
                      </Box>
                    );
                  })}
                </Box>
              </Grid>
            )}
          </Grid>
        </Container>
      </Box>

      {/* footer bottom >>>>>>>>>>>>>>>> */}
      <Container maxWidth="lg">
        <Typography
          sx={{
            fontWeight: 500,
            fontSize: { md: "12px", xs: "10px" },
            color: "white",
            p: 2,
            textAlign: { md: "start", xs: "center" },
            minHeight: "50px",
            width: "100%",
          }}
        >
          Copyright Sniser Ltd 2020 - 2021. All Right Reserved
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
