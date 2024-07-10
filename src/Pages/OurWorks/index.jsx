import React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import Aos from "aos";
import { Trans, useTranslation } from "react-i18next";

const OurWorks = () => {
  Aos.init({
    duration: 1500,
    offset: 0,
  });
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        background: "#1E1E1E",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "column",
        pt: "50px",
        pb: "60px",
        scrollMarginTop: "50px",
        width: "100%",
      }}
      id="OurWorks"
    >
      <Typography
        textAlign="center"
        className="title"
        fontSize={{ lg: 30, md: 28, sm: 26, xs: 25 }}
        fontWeight={700}
        data-aos-once="true"
        data-aos="fade-up"
        data-aos-delay="300"
        fontFamily="Montserrat"
      >
        {t("ourWorks")}
      </Typography>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          mt: "30px",
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent={{
            lg: "start",
            md: "center",
            sm: "center",
            xs: "center",
          }}
          height="100%"
          width="100%"
          style={{ flexWrap: "wrap", gap: "20px" }}
        >
          <Stack
            backgroundColor="#2F2F2F"
            float="left"
            height="450px"
            maxWidth="370px"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="300"
          >
            <img
              src="/images/Rectangle 13.png"
              style={{ height: "100%", width: "100%" }}
              alt=""
            />
            <Typography
              fontWeight={600}
              mt={1}
              fontFamily="Montserrat"
              height={75}
              mb={1}
              fontSize={16}
              p={{
                lg: "5px 100px 5px 10px",
                md: "5px 100px 5px 10px",
                sm: "5px 100px 5px 10px",
                xs: "5px 60px 5px 10px",
              }}
            >
              <Trans i18nKey="medicaments" components={{ 1: <br /> }} />
            </Typography>
          </Stack>
          <Stack
            data-aos-once="true"
            data-aos="fade-up"
            data-aos-delay="400"
            backgroundColor="#2F2F2F"
            float="left"
            height="450px"
            maxWidth="370px"
          >
            <img
              src="/images/Rectangle 13 (1).png"
              style={{ width: "100%", height: "100%" }}
              alt=""
            />
            <Typography
              fontWeight={600}
              fontSize={16}
              fontFamily="Montserrat"
              mt={1.7}
              mb={1}
              height={77}
              width="70%"
              p="0 10px 0 10px "
            >
              <Trans i18nKey="mebels" components={{ 1: <br /> }} />
            </Typography>
          </Stack>
          <Stack
            data-aos-once="true"
            data-aos="fade-up"
            data-aos-delay="500"
            backgroundColor="#2F2F2F"
            float="left"
            height="450px"
            maxWidth="370px"
          >
            <img
              src="/images/Rectangle 13 (2).png"
              style={{ width: "100%", height: "100%" }}
              alt=""
            />
            <Typography
              fontWeight={600}
              mt={1.3}
              fontFamily="Montserrat"
              height={77}
              mb={1}
              fontSize={16}
              p="5px 10px"
              width="70%"
            >
              <Trans i18nKey="warn" components={{ 1: <br /> }} />
            </Typography>
          </Stack>
          <Stack
            data-aos-once="true"
            data-aos="fade-up"
            data-aos-delay="600"
            backgroundColor="#2F2F2F"
            float="left"
            height="450px"
            maxWidth="370px"
          >
            <img
              src="/images/Rectangle 13 (3).png"
              style={{ width: "100%", height: "100%" }}
              alt=""
            />
            <Typography
              fontWeight={600}
              p="15px 10px"
              mt={1.7}
              fontFamily="Montserrat"
              height={77}
              mb={1}
              fontSize={16}
            >
              {t("railw")}
            </Typography>
          </Stack>
          <Stack
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="700"
            backgroundColor="#2F2F2F"
            float="left"
            height="450px"
            maxWidth="370px"
          >
            <img
              src="/images/Rectangle 13 (4).png"
              style={{ width: "100%", height: "100%" }}
              alt=""
            />
            <Typography
              fontWeight={600}
              p="15px 10px"
              fontFamily="Montserrat"
              mt={1.7}
              height={77}
              mb={1}
              fontSize={16}
            >
              {t("automobile")}
            </Typography>
          </Stack>
        </Stack>
        <Stack
          mt="80px"
          backgroundColor="#2F2F2F"
          p={{ lg: "30px 80px", md: "20px 40px", xs: "15px 20px" }}
        >
          <Typography
            data-aos="fade-up"
            fontSize={{ lg: 16, md: 15, xs: 14 }}
            data-aos-once="true"
            fontFamily="Montserrat"
            data-aos-delay="300"
            fontWeight={500}
          >
            {t("ourCompany")}
            <span style={{ color: "#dbb45a", fontWeight: 700 }}>
              {" "}
              {t("nameCompany")}
            </span>
            <Trans i18nKey="ourCompnanyText" components={{ 1: <br /> }} />
          </Typography>
          <Stack
            direction="row"
            flexWrap="wrap"
            alignItems="center"
            justifyContent="center"
            mt={5}
            spacing={{ lg: 6, md: 4, sm: 3, xs: 0 }}
          >
            <Stack style={{ width: 280, height: 170 }}>
              <img
                src="/images/Rectangle 18.png"
                alt=""
                data-aos-once="true"
                data-aos="fade-up"
                data-aos-delay="300"
              />
            </Stack>
            <Stack style={{ width: 280, height: 170 }}>
              <img
                src="/images/Rectangle 16.png"
                alt=""
                data-aos-once="true"
                data-aos="fade-up"
                data-aos-delay="500"
              />
            </Stack>
            <Stack style={{ width: 280, height: 170 }}>
              <img
                src="/images/Rectangle 17.png"
                alt=""
                data-aos-once="true"
                data-aos="fade-up"
                data-aos-delay="700"
              />
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default OurWorks;
