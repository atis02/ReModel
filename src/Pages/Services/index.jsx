import React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import { Image } from "mui-image";
import { Trans, useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        background: "#2F2F2F",
        height: "100%",
        p: "15px 6px",
        color: "#d6d6d6",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Swiper
          slidesPerView={1}
          pagination={{ clickable: true }}
          loop={true}
          navigation
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          modules={[Pagination, Autoplay, Navigation, Scrollbar, A11y]}
        >
          <SwiperSlide sx={{ paddingBottom: "40px" }}>
            <Stack
              direction={{ lg: "row", md: "row", xs: "column" }}
              alignItems="center"
              justifyContent="space-between"
              spacing={{ lg: 6, md: 4, xs: 3 }}
              mb={3}
              width="100%"
            >
              <Stack
                sx={{
                  width: "100%",
                  height: { lg: 490, md: 390, xs: 280 },
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  src="/images/image 59.png"
                  duration={0}
                  sx={{
                    borderRadius: "10px",
                    width: "100%",
                    height: "100%",
                  }}
                  alt=""
                />
              </Stack>
              <Stack width="auto">
                <Typography
                  fontSize={18}
                  fontWeight={700}
                  textAlign="center"
                  mb={2}
                  sx={{
                    fontFamily: "Montserrat",
                  }}
                  className="title"
                >
                  {t("multiModal")}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Montserrat",
                  }}
                  fontSize={{ lg: 18, md: 14, xs: 12 }}
                >
                  <Trans i18nKey="multiModalText" components={{ 1: <br /> }} />
                </Typography>
              </Stack>
            </Stack>
          </SwiperSlide>
          <SwiperSlide>
            <Stack
              direction={{ lg: "row", md: "row", xs: "column" }}
              alignItems="center"
              justifyContent="space-between"
              spacing={{ lg: 6, md: 4, xs: 3 }}
            >
              <Stack
                sx={{
                  width: "100%",

                  height: { lg: 490, md: 390, xs: 280 },
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  src="/images/Group 6.png"
                  duration={0}
                  style={{
                    borderRadius: "10px",

                    width: "100%",
                    height: "100%",
                  }}
                  alt=""
                />
              </Stack>

              <Stack width="auto" flexWrap="wrap">
                <Typography
                  fontSize={18}
                  fontWeight={700}
                  textAlign="center"
                  className="title"
                  mb={2}
                  sx={{
                    fontFamily: "Montserrat",
                  }}
                >
                  {t("railway")}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Montserrat",
                  }}
                  fontSize={{ lg: 18, md: 14, xs: 12 }}
                >
                  <Trans i18nKey="railwayText" components={{ 1: <br /> }} />
                </Typography>
              </Stack>
            </Stack>
          </SwiperSlide>
          <SwiperSlide>
            <Stack
              direction={{ lg: "row", md: "row", xs: "column" }}
              alignItems="center"
              justifyContent="space-between"
              spacing={{ lg: 6, md: 4, xs: 3 }}
              mb={4}
            >
              <Stack
                sx={{
                  width: "100%",
                  height: { lg: 490, md: 390, xs: 280 },
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  src="/images/Frame 55.png"
                  duration={0}
                  sx={{
                    borderRadius: "10px",

                    width: "100%",
                    height: "100%",
                  }}
                  alt=""
                />
              </Stack>

              <Stack width="auto">
                <Typography
                  fontSize={18}
                  fontWeight={700}
                  textAlign="center"
                  sx={{
                    fontFamily: "Montserrat",
                  }}
                  className="title"
                  mb={2}
                >
                  {t("autoDeliver")}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Montserrat",
                  }}
                  fontSize={{ lg: 18, md: 14, xs: 12 }}
                >
                  <Trans i18nKey="autoDeliverText" components={{ 1: <br /> }} />
                  <br />
                  <span className="title" style={{ fontWeight: "600" }}>
                    {t("nameCompany")}
                  </span>{" "}
                  <Trans
                    i18nKey="autoDeliverText2"
                    components={{ 1: <br /> }}
                  />
                </Typography>
              </Stack>
            </Stack>
          </SwiperSlide>
          <SwiperSlide>
            <Stack
              direction={{ lg: "row", md: "row", xs: "column" }}
              alignItems="center"
              justifyContent="space-between"
              spacing={{ lg: 6, md: 4, xs: 3 }}
              mb={6}
            >
              <Stack
                sx={{
                  width: "100%",
                  height: { lg: 490, md: 390, xs: 280 },
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  duration={0}
                  src="/images/ship.png"
                  sx={{
                    borderRadius: "10px",

                    width: "100%",
                    height: "100%",
                  }}
                  alt=""
                />
              </Stack>

              <Stack width="auto">
                <Typography
                  fontSize={18}
                  fontWeight={700}
                  className="title"
                  textAlign="center"
                  mb={2}
                  sx={{
                    fontFamily: "Montserrat",
                  }}
                >
                  {t("seaDelivery")}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Montserrat",
                  }}
                  fontSize={{ lg: 18, md: 14, xs: 12 }}
                >
                  <Trans i18nKey="seaDeliveryText" components={{ 1: <br /> }} />
                </Typography>
              </Stack>
            </Stack>
          </SwiperSlide>
          <SwiperSlide>
            <Stack
              direction={{ lg: "row", md: "row", xs: "column" }}
              alignItems="center"
              justifyContent="space-between"
              spacing={{ lg: 6, md: 4, xs: 3 }}
              mb={6}
            >
              <Stack
                sx={{
                  width: "100%",
                  height: { lg: 490, md: 390, xs: 280 },
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  src="/images/airplane.png"
                  duration={0}
                  sx={{
                    borderRadius: "10px",

                    width: "100%",
                    height: "100%",
                  }}
                  alt=""
                />
              </Stack>

              <Stack width="auto">
                <Typography
                  fontSize={18}
                  fontWeight={700}
                  className="title"
                  textAlign="center"
                  mb={2}
                  sx={{
                    fontFamily: "Montserrat",
                  }}
                >
                  {t("planeDelivery")}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Montserrat",
                  }}
                  fontSize={{ lg: 18, md: 14, xs: 12 }}
                >
                  <Trans
                    i18nKey="planeDeliveryText"
                    components={{ 1: <br /> }}
                  />
                  <span className="title" style={{ fontWeight: "600" }}>
                    {t("nameCompany")}
                  </span>{" "}
                  <Trans
                    i18nKey="planeDeliveryText2"
                    components={{ 1: <br /> }}
                  />
                </Typography>
              </Stack>
            </Stack>
          </SwiperSlide>
        </Swiper>
      </Container>
    </Box>
  );
};

export default Services;
