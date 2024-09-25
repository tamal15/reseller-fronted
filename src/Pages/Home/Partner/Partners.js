import { Box, Typography } from "@mui/material";
import React from "react";
import { Container } from "react-bootstrap";
import Marquee from "react-fast-marquee";

const Partners = () => {
  return (
    <Box data-aos="fade-up" sx={{ padding: "20px" }}> {/* Added padding for better spacing */}
      <Container>
        <Typography
          variant="h3"
          sx={{
            lineHeight: "30px",
            py: 5,
            fontSize: "3em",
            fontWeight: "700",
            color: "#7E2231",
            marginTop: "100px",
            marginBottom: "10px",
            textAlign: "center", // Centering the text
          }}
        >
          Our Partners
          <br />
          <hr
            style={{
              width: "10%",
              height: "5px",
              backgroundColor: "black",
              display: "inline-block",
              border: 0,
              marginTop: "5px",
            }}
          />
        </Typography>
      </Container>

      {/* Marquee for Partner Logos */}
      <Marquee direction="right" speed={50} pauseOnHover={true}>
        <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}> {/* Added gap for spacing between images */}
          {/* Replace these with the correct image URLs */}
          <img
            style={{ width: "150px", height: "auto" }}
            src="https://eskul-avengers.web.app/static/media/rocket%20(1).a0002426f2dc39c3eb39.png"
            alt="Bkash"
          />
          <img
            style={{ width: "150px", height: "auto" }}
            src="https://eskul-avengers.web.app/static/media/rocket%20(1).a0002426f2dc39c3eb39.png"
            alt="Nogod"
          />
          <img
            style={{ width: "150px", height: "auto" }}
            src="https://eskul-avengers.web.app/static/media/rocket%20(1).a0002426f2dc39c3eb39.png"
            alt="U-cash"
          />
          <img
            style={{ width: "150px", height: "auto" }}
            src="https://eskul-avengers.web.app/static/media/rocket%20(1).a0002426f2dc39c3eb39.png"
            alt="Flying Bird"
          />
          <img
            style={{ width: "150px", height: "auto" }}
            src="https://eskul-avengers.web.app/static/media/rocket%20(1).a0002426f2dc39c3eb39.png"
            alt="Rocket"
          />
        </Box>
      </Marquee>
    </Box>
  );
};

export default Partners;
