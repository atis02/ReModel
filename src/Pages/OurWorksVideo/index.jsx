import React from "react";
import {
  Box,
  Container,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCoverflow,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
// import "~swiper/swiper-bundle.min.css";

import { Image } from "mui-image";
import { Trans, useTranslation } from "react-i18next";
import ReactPlayer from "react-player";

const Models = () => {
  const { t } = useTranslation();

  const slideData = [
    { src: "/videos/models (1).mp4" },
    { src: "/videos/models (2).mp4" },
    { src: "/videos/models (3).mp4" },
    { src: "/videos/models (4).mp4" },
    { src: "/videos/models (5).mp4" },
    { src: "/videos/models (6).mp4" },
  ];
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box
      sx={{
        // background: "#2F2F2F",
        height: "100%",
        p: "15px 6px",
        color: "#d6d6d6",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        scrollMarginTop: "50px",
      }}
      id="Models"
    >
      <Typography
        fontSize={{ lg: 30, md: 28, xs: 25 }}
        fontWeight={700}
        data-aos="fade-up"
        data-aos-delay="200"
        fontFamily="Montserrat"
        pt={{ lg: "50px", md: "30px", xs: "10px" }}
        className="title"
        mb="40px"
      >
        {/* {t("aboutCompany")} */}
        Mодели
      </Typography>
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Swiper
          pagination={{ clickable: true }}
          loop={true}
          navigation
          // autoplay={{ delay: 6000, disableOnInteraction: false }}
          modules={[
            Pagination,
            Autoplay,
            Navigation,
            Scrollbar,
            A11y,
            EffectCoverflow,
          ]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={isMobile ? 1 : 2}
          coverflowEffect={{
            rotate: 70,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
        >
          {slideData.map((item) => (
            <SwiperSlide
              key={item}
              sx={{ paddingBottom: "40px", width: "570px", height: "400px" }}
            >
              <Stack
                direction={{ lg: "row", md: "row", xs: "column" }}
                alignItems="center"
                justifyContent="space-between"
                spacing={{ lg: 6, md: 4, xs: 3 }}
                // pl={2}
                mb={3}
                width="100%"
              >
                <Stack
                  sx={{
                    // width: "100%",
                    // height: { lg: 690, md: 390, xs: 280 },
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  className="single-service2"
                >
                  <ReactPlayer
                    className="react-player"
                    url={item.src}
                    width="100%"
                    height="100%"
                    controls={true} // Show video controls
                  />
                </Stack>
              </Stack>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
};

export default Models;
