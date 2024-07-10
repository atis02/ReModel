import React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import Aos from "aos";
import { Trans, useTranslation } from "react-i18next";

const About = () => {
  Aos.init({
    duration: 1500,
    offset: 0,
    once: true,
  });
  const { t } = useTranslation();

  return (
    <Box
      id="aboutCompany"
      sx={{
        background: "#2F2F2F",
        height: { lg: "420px", md: "360px", sm: "300px", xs: "470px" },
        width: "100%",
        backgroundImage: "url('/images/AboutHorizontal.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        color: "#d6d6d6",

        display: "flex",
        alignItems: { lg: "center" },
        transition: " all ease 0.3s",
        scrollMarginTop: "70px",
      }}
    >
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          height: "auto",
        }}
      >
        <Stack sx={{ display: { lg: "block", md: "block", xs: "none" } }}>
          <img
            src="/images/pngwing 9.png"
            style={{ width: "530px", height: "360px" }}
            alt=""
          />
        </Stack>
        <Stack
          width={560}
          height={145}
          spacing={2}
          mt={{ lg: 0, md: 1, xs: 1 }}
        >
          <Typography
            fontSize={24}
            fontWeight={700}
            data-aos="fade-up"
            data-aos-delay="200"
            fontFamily="Montserrat"
            pt={{ lg: "50px", md: "30px", xs: "10px" }}
            className="title"
          >
            {t("aboutCompany")}
          </Typography>
          <Typography
            data-aos="fade-up"
            data-aos-delay="400"
            fontSize={16}
            fontFamily="Montserrat"
            color="#fff"
          >
            <Trans i18nKey="aboutCompanyText" components={{ 1: <br /> }} />
            <span className="title" style={{ fontWeight: "700" }}>
              {t("nameCompany")}
            </span>{" "}
            {t("aboutCompanyText2")}
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default About;
