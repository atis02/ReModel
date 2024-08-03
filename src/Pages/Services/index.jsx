import React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
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

const Services = () => {
  const { t } = useTranslation();

  const slideData = [
    { title: "-ТРЦ «Охта Молл»", src: "/images/pokaz (1).jpg" },
    { title: "-ТРК «ПитерЛэнд»", src: "/images/pokaz (2).jpg" },
    { title: "-ТРК «Лондон Молл»", src: "/images/pokaz (3).jpg" },
    { title: "-ТРК «Жемчужная Плаза»", src: "/images/pokaz (4).jpg" },
    { title: "-Ресторан «Маймун» ", src: "/images/pokaz (5).jpg" },
    { title: "-Театр «Чаплин Холл» ", src: "/images/pokaz (6).jpg" },
    { title: "-Театр «Zart Hause»", src: "/images/pokaz (7).jpg" },
    { title: "-Арт-Муза", src: "/images/pokaz (8).jpg" },
  ];
  return (
    <Box
      sx={{
        // background: "#2F2F2F",
        height: "100%",
        p: "15px 6px",
        color: "#d6d6d6",
        display: "flex",
        alignItems: "center",
        scrollMarginTop: "50px",
        flexDirection: "column",
      }}
      id="pokaz"
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
        Наши показы
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
          slidesPerView={2}
          coverflowEffect={{
            rotate: 50,
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
                pl={2}
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
                  className="single-service"
                >
                  <Image
                    className="image-container"
                    src={item.src}
                    duration={0}
                    sx={{
                      borderRadius: "10px",
                      width: "100%",
                      height: "100%",
                      mb: "20px",
                    }}
                    alt=""
                  />
                  <Stack class="overlay"></Stack>
                  <Stack className="service-desc">
                    <Typography textAlign="center" fontSize={30}>
                      {item.title}
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
};

export default Services;
