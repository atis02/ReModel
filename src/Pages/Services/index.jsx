import React, { useState } from "react";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
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
import EastIcon from "@mui/icons-material/East";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
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
                </Stack>
              </Stack>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
      <Container>
        <Stack justifyContent="center">
          <Typography
            fontSize={{ lg: 30, md: 28, xs: 25 }}
            mb={1}
            className="title"
            textAlign="center"
          >
            Хотите принять участие в модном показе?
          </Typography>

          <Stack
            direction="row"
            // width="80%"
            alignItems="center"
            flexWrap="wrap"
            justifyContent={{
              lg: "center",
              md: "center",
              sm: "center",
              xs: "flex-start",
            }}
          >
            <Stack
              data-aos-once="true"
              data-aos="fade-up"
              textAlign="justify"
              data-aos-delay="800"
              color="#d6d6d6"
              fontSize={15}
              fontWeight={500}
              direction="row"
              alignItems="center"
            >
              <Typography
                fontSize={{ lg: 33, md: 37, xs: 30 }}
                color="#dbb45a"
                fontFamily="Poppins"
                mr={2.5}
                ml={0.4}
              >
                1
              </Typography>
              <Stack>
                <Typography
                  fontSize={{ lg: 20, md: 17, xs: 15 }}
                  color="#dbb45a"
                  fontFamily="Montserrat"
                  mr={2.9}
                  pl={0.5}
                  fontWeight={500}
                >
                  Мастер-класс по дефиле
                </Typography>
              </Stack>
            </Stack>
            <Stack
              data-aos-once="true"
              data-aos="fade-up"
              textAlign="justify"
              data-aos-delay="800"
              color="#d6d6d6"
              fontSize={15}
              fontWeight={500}
              direction="row"
              alignItems="center"
            >
              <Typography
                fontSize={{ lg: 33, md: 37, xs: 30 }}
                color="#dbb45a"
                fontFamily="Poppins"
                mr={2.5}
                ml={0.4}
              >
                2
              </Typography>
              <Stack>
                <Typography
                  fontSize={{ lg: 20, md: 17, xs: 15 }}
                  color="#dbb45a"
                  fontFamily="Montserrat"
                  mr={2.9}
                  pl={0.5}
                  fontWeight={500}
                >
                  Макияж
                </Typography>
              </Stack>
            </Stack>
            <Stack
              data-aos-once="true"
              data-aos="fade-up"
              textAlign="justify"
              data-aos-delay="800"
              color="#d6d6d6"
              fontSize={15}
              fontWeight={500}
              direction="row"
              alignItems="center"
            >
              <Typography
                fontSize={{ lg: 33, md: 37, xs: 30 }}
                color="#dbb45a"
                fontFamily="Poppins"
                mr={2}
              >
                3
              </Typography>
              <Stack>
                <Typography
                  fontSize={{ lg: 20, md: 17, xs: 15 }}
                  color="#dbb45a"
                  fontFamily="Montserrat"
                  mr={2.9}
                  pl={0.5}
                  fontWeight={500}
                >
                  Причёска
                </Typography>
              </Stack>
            </Stack>
            <Stack
              data-aos-once="true"
              data-aos="fade-up"
              textAlign="justify"
              data-aos-delay="800"
              color="#d6d6d6"
              fontSize={15}
              fontWeight={500}
              direction="row"
              alignItems="center"
            >
              <Typography
                fontSize={{ lg: 33, md: 37, xs: 30 }}
                color="#dbb45a"
                fontFamily="Poppins"
                mr={2}
              >
                4
              </Typography>
              <Stack>
                <Typography
                  fontSize={{ lg: 20, md: 17, xs: 15 }}
                  color="#dbb45a"
                  fontFamily="Montserrat"
                  mr={2.9}
                  pl={0.5}
                  fontWeight={500}
                >
                  Выход на дорожку в образе бренда партнера.
                </Typography>
              </Stack>
            </Stack>
            <Stack
              data-aos-once="true"
              data-aos="fade-up"
              textAlign="justify"
              data-aos-delay="800"
              color="#d6d6d6"
              fontSize={15}
              fontWeight={500}
              direction="row"
              alignItems="center"
            >
              <Typography
                fontSize={{ lg: 33, md: 37, xs: 30 }}
                color="#dbb45a"
                fontFamily="Poppins"
                mr={2}
              >
                5
              </Typography>
              <Stack>
                <Typography
                  fontSize={{ lg: 20, md: 17, xs: 15 }}
                  color="#dbb45a"
                  fontFamily="Montserrat"
                  mr={2.9}
                  pl={0.5}
                  fontWeight={500}
                >
                  Фото и видео отчет
                </Typography>
              </Stack>
            </Stack>
            <Stack
              data-aos-once="true"
              data-aos="fade-up"
              textAlign="justify"
              data-aos-delay="800"
              color="#d6d6d6"
              fontSize={15}
              fontWeight={500}
              direction="row"
              alignItems="center"
            >
              <Typography
                fontSize={{ lg: 33, md: 37, xs: 30 }}
                color="#dbb45a"
                fontFamily="Poppins"
                mr={2}
              >
                6
              </Typography>
              <Stack>
                <Typography
                  fontSize={{ lg: 20, md: 17, xs: 15 }}
                  color="#dbb45a"
                  fontFamily="Montserrat"
                  mr={2.9}
                  pl={0.5}
                  fontWeight={500}
                >
                  Участие в Fashion мероприятии
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Container>

      <a
        href="https://wa.me/+79119833108?text=Добрый%20день,%20хочу%20принять%20участие%20в%20модном%20показе,%20свяжитесь со мной."
        target="_blank"
        class="gradient-button"
      >
        <span className="button-background2"></span>
        <span className="button-text2">
          {" "}
          Записаться на Fashion Day
          <EastIcon />
        </span>
      </a>
    </Box>
  );
};

export default Services;
