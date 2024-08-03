import React from "react";
import { Box, Container, Divider, Stack, Typography } from "@mui/material";
import Aos from "aos";
import { useTranslation } from "react-i18next";

const Footer = () => {
  Aos.init({
    duration: 1500,
    offset: 0,
  });
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        // background: "#2F2F2F",
        height: { lg: "270px", md: "100%", xs: "100%" },
        backgroundImage: "url('/images/AboutHorizontal.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPositionY: "-100px",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
        p: { lg: "60px 0 10px 0", xs: "30px 0 10px 0" },
        boxShadow: "0px -2px 24px -4px rgba(0,0,0,0.75)",
      }}
      id="Footer"
    >
      <Container
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: {
            lg: "space-between",
            md: "space-between",
            sm: "space-between",
            xs: "start",
          },

          width: "100%",
        }}
      >
        <Stack
          direction="row"
          flexWrap="wrap"
          spacing={{ lg: 5, xs: 0 }}
          width={{ lg: "60%", md: "60%", sm: "70%", xs: "100%" }}
          mt={2}
        >
          <Stack
            spacing={{ lg: 3, sm: 2, md: 2.5, xs: 2 }}
            width={{ lg: "60%", md: "72%", sm: "82%", xs: "100%" }}
          >
            <Stack
              direction="row"
              data-aos="fade-down"
              data-aos-once="true"
              data-aos-delay="300"
              alignItems="center"
              width="100%"
              spacing={1}
            >
              <img
                src="/images/Location.png"
                style={{ width: 24, height: 24 }}
                alt=""
              />
              <Typography fontFamily="Montserrat" fontWeight={500} width="80%">
                М.Петроградская Каменноостровский проспект 42
                {/* {t("location")} */}
              </Typography>
            </Stack>
            <Stack
              data-aos-once="true"
              data-aos="fade-down"
              data-aos-delay="400"
              direction="row"
              width="100%"
              alignItems="center"
              spacing={1}
            >
              <img
                src="/images/Call.png"
                style={{ width: 24, height: 24 }}
                alt=""
              />
              <a
                style={{
                  color: "#fff",
                  textDecoration: "none",
                  fontFamily: "Montserrat",
                  fontWeight: 500,
                }}
                href="tel: 89119833108"
              >
                89119833108
              </a>
            </Stack>

            <Stack
              direction="row"
              data-aos-once="true"
              data-aos="fade-down"
              data-aos-delay="600"
              width="auto"
              alignItems="center"
              spacing={1}
            >
              <img
                src="/images/Mail.png"
                style={{ width: 24, height: 24 }}
                alt=""
              />
              <Typography fontFamily="Montserrat" fontWeight={500}>
                <a
                  style={{ textDecoration: "none", color: "#fff" }}
                  href="mailto:info@altynmiras.com"
                >
                  info@ReModel.com
                </a>
              </Typography>
            </Stack>
          </Stack>
          <Stack spacing={{ lg: 4.3, sm: 2.3, md: 3.3, xs: 1.3 }}>
            <Stack
              data-aos="fade-down"
              data-aos-once="true"
              data-aos-delay="500"
              direction="row"
              width="100%"
              alignItems="center"
              spacing={1}
              pt={{ lg: 0, xs: 3 }}
            >
              <img
                src="/images/telegram.png"
                style={{ width: 24, height: 24 }}
                alt=""
              />
              <a
                style={{
                  color: "#fff",
                  textDecoration: "none",
                  fontFamily: "Montserrat",
                  fontWeight: 500,
                }}
                href="https://t.me/maerezak"
              >
                Telegram
              </a>
            </Stack>
            <Stack
              direction="row"
              data-aos-once="true"
              data-aos="fade-down"
              data-aos-delay="600"
              width="auto"
              alignItems="center"
              spacing={1}
            >
              <img
                src="/images/vk.png"
                style={{ width: 24, height: 24 }}
                alt=""
              />
              <Typography fontFamily="Montserrat" fontWeight={500}>
                <a
                  style={{ textDecoration: "none", color: "#fff" }}
                  href="https://vk.com/artagentsvoremodel"
                >
                  VK
                </a>
              </Typography>
            </Stack>

            <Stack
              data-aos-once="true"
              data-aos="fade-down"
              data-aos-delay="400"
              direction="row"
              width="100%"
              alignItems="center"
              spacing={1}
            >
              <img
                src="/images/wApp.png"
                style={{ width: 24, height: 24 }}
                alt=""
              />
              <a
                style={{
                  color: "#fff",
                  textDecoration: "none",
                  fontFamily: "Montserrat",
                  fontWeight: 500,
                }}
                href=" 89119833108"
              >
                89119833108
              </a>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          direction="row"
          mt={{ xs: 4, lg: 0 }}
          flexWrap="wrap"
          spacing={{ lg: 2, md: 5, sm: 6, xs: 2 }}
          alignItems="center"
          justifyContent="center"
        >
          <Stack
            sx={{
              width: { lg: 137, md: 127, xs: 117 },
              height: { lg: 126, md: 116, xs: 106 },
            }}
          >
            <a href="/">
              <img
                src="/images/image 5.png"
                data-aos-once="true"
                data-aos="fade-down"
                style={{ width: "100%", height: "100%" }}
                data-aos-delay="900"
                alt="LOGO"
              />
            </a>
          </Stack>
        </Stack>
      </Container>
      <Divider
        sx={{
          color: "#fff",
        }}
      />
      <Typography
        width="100%"
        data-aos-once="true"
        data-aos="fade-down"
        data-aos-delay="1000"
        fontSize={{ lg: 14, md: 13, sm: 13, xs: 12 }}
        textAlign="center"
        fontFamily="Montserrat"
        color="#fff"
        fontWeight={500}
        pt={2}
      >
        Copyright © {new Date().getFullYear()} ReModel | Powered by{" "}
        <a
          href="https://github.com/atis02"
          style={{
            color: "#fff",
            textDecoration: "underline",
          }}
        >
          Atamyrat Dev
        </a>
      </Typography>
    </Box>
  );
};

export default Footer;
