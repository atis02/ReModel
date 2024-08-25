import React from "react";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
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
        height: { lg: "420px", md: "360px", sm: "300px", xs: "530px" },
        width: "100%",
        // backgroundImage: "url('/images/bg.jpg')",

        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        color: "#000",

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
        <Stack direction={{ lg: "row", md: "row", sm: "row", xs: "column" }}>
          <Stack
            width={{ lg: 600, md: 500, sm: 400, xs: 350 }}
            height={{ lg: 400, md: 350, sm: 300, xs: 250 }}
          >
            <img
              src="/images/about.png"
              style={{
                width: "100%",
                height: "100%",
              }}
              alt=""
            />
          </Stack>
          <Stack
            width={{ lg: 560, xs: "100%" }}
            height={145}
            spacing={2}
            mt={{ lg: 5, md: 1, xs: 1 }}
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
              textAlign="justify"
            >
              {/* <Trans i18nKey="aboutCompanyText" components={{ 1: <br /> }} />
            <span className="title" style={{ fontWeight: "700" }}>
              {t("nameCompany")}
            </span>{" "}
            {t("aboutCompanyText2")} */}
              В REmodel занятия со смыслом. Фундаментальные знания
              разносторонних дисциплин раскроют индивидуальность, уверенность в
              себе, дадут возможности развития в новых направлений, как с
              творческой стороны, так и в повседневной жизни Каждый ученик
              получает персональное внимание и поддержку в достижении своих
              целей, с учетом способностей. Программа для детей и подростков
              рассчитана на 9 месяцев.
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default About;
