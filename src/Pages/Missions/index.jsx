import React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import Aos from "aos";
import { useTranslation } from "react-i18next";

const Missions = () => {
  Aos.init({
    duration: 1500,
    offset: 0,
  });
  const { t } = useTranslation();
  return (
    <Box
      id="Goals"
      sx={{
        pt: { lg: "60px", md: "30px", sm: "30px", xs: "30px" },
        color: "#d6d6d6",
        height: "100%",
        scrollMarginTop: "50px",
        width: "100%",
        mb: "80px",
      }}
    >
      <Typography
        textAlign="center"
        className="title"
        fontSize={{ lg: 30, md: 28, xs: 25 }}
        fontWeight={700}
        data-aos="fade-up"
        data-aos-once="true"
        fontFamily="Montserrat"
        data-aos-delay="300"
      >
        {t("missionsGoals")}
      </Typography>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
        }}
      >
        <Stack
          mt={4}
          direction="row"
          alignItems="center"
          mb={5}
          data-aos="fade-up"
          data-aos-delay="500"
          data-aos-once="true"
          spacing={2}
          width="100%"
        >
          <img
            src="/images/goal.png"
            style={{
              width: { lg: 104, md: 95, sm: 90, xs: 80 },
              height: { lg: 104, md: 95, sm: 90, xs: 80 },
            }}
            alt=""
          />
          <Stack>
            <Typography
              fontSize={18}
              fontFamily="Montserrat"
              textAlign="center"
              color="#fff"
              fontWeight={600}
            >
              {t("missionsCompany")}
            </Typography>
            <Typography
              fontFamily="Montserrat"
              fontSize={{ lg: 16, md: 13, xs: 12 }}
            >
              {t("missionText")}
              <br />
              {t("missionText2")}
            </Typography>
          </Stack>
        </Stack>
        <Stack
          data-aos-once="true"
          data-aos="fade-up"
          data-aos-delay="700"
          direction="row"
          // ml={{ lg: 30, md: 20, xs: 0 }}
          alignItems="center"
          justifyContent="flex-end"
          spacing={2}
          width="auto"
        >
          <Stack>
            <Typography
              fontSize={18}
              fontFamily="Montserrat"
              textAlign="center"
              fontWeight={600}
              color="#fff"
            >
              {t("goals")}
            </Typography>
            <Typography
              fontFamily="Montserrat"
              fontSize={{ lg: 16, md: 13, xs: 12 }}
            >
              {t("goalsText1")}
              <br />
              {t("goalsText2")}
            </Typography>
          </Stack>
          <img
            src="/images/goal2.png"
            style={{
              width: { lg: 104, md: 95, sm: 90, xs: 80 },
              height: { lg: 104, md: 95, sm: 90, xs: 80 },
            }}
            alt=""
          />
        </Stack>
        <Stack
          alignItems="center"
          ml={{ lg: 15, md: 14, xs: 0 }}
          mt={15}
          position="absolute"
          minHeight="260px"
          top={{ lg: 2000, md: 1750, sm: 1950, xs: 2020 }}
          left={{ lg: 200 }}
          width="auto"
          height={{ xl: "85%", lg: "100%", md: "90%", sm: "80%", xs: "40%" }}
          sx={{
            opacity: "0.2",
          }}
        >
          <img
            style={{ width: "100%", height: "90%" }}
            src="/images/Map.png"
            alt=""
          />
        </Stack>
        <Box
          id="Services"
          sx={{
            scrollMarginTop: "50px",
          }}
          color="#fff"
          width="100%"
          height="120%"
          mb={4}
        >
          <Typography
            textAlign="center"
            fontWeight={700}
            className="title"
            fontSize={{ lg: 30, md: 28, xs: 25 }}
            mt="60px"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="800"
          >
            {t("services")}
          </Typography>
          <Stack
            alignItems="center"
            justifyContent="center"
            direction="row"
            mt={6}
            sx={{ gap: { lg: "60px", md: "60px", sm: "20px", xs: "20px" } }}
            flexWrap="wrap"
          >
            <Stack
              spacing={2}
              style={{ width: 140, height: 125 }}
              alignItems="center"
              data-aos="fade-up"
              data-aos-once="true"
              zIndex={100}
              data-aos-delay="1200"
            >
              <img
                style={{ width: 125, height: 125 }}
                src="/images/Frame 29 (1).png"
                alt=""
              />
              <Typography
                fontSize={{ lg: 24, md: 22, sm: 20, xs: 20 }}
                fontFamily="Montserrat"
                textAlign="center"
              >
                {t("import")}
              </Typography>
            </Stack>
            <Stack
              style={{ width: 140, height: 125 }}
              spacing={2}
              alignItems="center"
              data-aos-once="true"
              zIndex={100}
              data-aos="fade-up"
              data-aos-delay="900"
            >
              <img
                style={{ width: 125, height: 125 }}
                src="/images/Frame 29.png"
                alt=""
              />
              <Typography
                fontSize={{ lg: 24, md: 22, sm: 20, xs: 20 }}
                fontFamily="Montserrat"
                textAlign="center"
              >
                {t("export")}
              </Typography>
            </Stack>
            <Stack
              mt={{ xs: 6, lg: 0, md: 0, sm: 0 }}
              spacing={2}
              style={{ width: 140, height: 125 }}
              data-aos-once="true"
              data-aos="fade-up"
              zIndex={100}
              alignItems="center"
              data-aos-delay="1000"
            >
              <img
                style={{ width: 125, height: 125 }}
                src="/images/Frame 34.png"
                alt=""
              />
              <Typography
                fontSize={{ lg: 24, md: 22, sm: 20, xs: 20 }}
                fontFamily="Montserrat"
                textAlign="center"
              >
                {t("tranzit")}
              </Typography>
            </Stack>
            <Stack
              ml={{ lg: -7, md: -7, sm: -3, xs: 0 }}
              mt={{ xs: 6, lg: 0, md: 0, sm: 0 }}
              alignItems="center"
              spacing={2}
              sx={{
                width: { lg: 220, md: 200, sm: 180, xs: 140 },
                height: 125,
              }}
              data-aos-once="true"
              zIndex={100}
              data-aos="fade-up"
              data-aos-delay="1100"
            >
              <img
                style={{ width: 125, height: 125 }}
                src="/images/Frame 30.png"
                alt=""
              />
              <Typography
                fontSize={{ lg: 24, md: 22, sm: 20, xs: 20 }}
                fontFamily="Montserrat"
                textAlign="center"
              >
                {t("soprowozden")}
              </Typography>
            </Stack>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Missions;
