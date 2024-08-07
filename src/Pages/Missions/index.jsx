import React from "react";
import {
  Box,
  Container,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Aos from "aos";
import { useTranslation } from "react-i18next";
import { Tilt } from "react-tilt";

const Missions = () => {
  Aos.init({
    duration: 1500,
    offset: 0,
  });
  const { t, i18n } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const BusinessData = [
    {
      title: "1) Дефиле",
      desc: " - искусство грациозно двигаться, держать осанку, владеть своим телом и мимикой лица- уверенность в своих действиях и движениях",
    },
    {
      title: "2) Фотопозирвание и видеопозирование",
      desc: " - искусство передачи идеи и настроения с помощью позирования ",
    },
    {
      desc: " - искусство , через движения, жесты, интонации, перевоплощения передать чувства и эмоции персонажа. Раскрепощение во внешнем мире. Тренировка воображения. ",
      title: "3) Актерское мастерство",
    },
    {
      title: "4) Журналистика",
      desc: " - искусство по сбору и обработке информации, умение активно проявлять себя и иметь собственную точку зрения.",
    },
    {
      title: "5) Блогинг",
      desc: " - искусство по ведению соц.сетей. Создание вовлекающих интересных роликов и общения с подписчиками. ",
    },
    {
      title: "6)Правила этикета",
      desc: " - искусство быть вежливым и внимательным. Знание правил поведения и умения их применить в жизни.",
    },
  ];

  const BusinessCard = ({ title, desc }) => (
    <Stack
      width={{ lg: "32%", md: "32%", sm: "50%", xs: "100%" }}
      height="100%"
      pr={{ lg: 0, md: 2, sm: 0, xs: 0 }}
      data-aos="fade-up"
      data-aos-once="true"
      data-aos-delay="800"
    >
      <Tilt
        options={{
          scale: isMobile ? "none" : 1,
          max: 45,
          perspective: 1000,
        }}
      >
        <Stack
          width={{ lg: "100%", md: "100%", sm: "90%", xs: "100%" }}
          height={{
            lg: i18n.language === "ru" ? "250px" : "200px",
            md: "100%",
            sm: "100%",
            xs: "210px",
          }}
          sx={{
            backgroundColor: "#2F2F2F",
          }}
          p={{ lg: "20px", md: "20px", sm: "20px", xs: "20px" }}
          border="5px solid #303030"
          borderRadius="20px"
          className="inner-border"
          mb={2}
          mt={2}
          // justifyContent="center"
        >
          <Typography
            color="#fff"
            fontWeight={600}
            fontFamily="Montserrat"
            fontSize={{ lg: 22, md: 18, sm: 18, xs: 18 }}
            mb="10px"
            // mt={{ lg: 7, md: 10, sm: 10, xs: 4 }}
            className="title"
          >
            {title}
          </Typography>
          <Typography
            color="#fff"
            fontWeight={400}
            fontFamily="Montserrat"
            fontSize={{ lg: 18, md: 16, sm: 16, xs: 15 }}
            mb="10px"
            // mt={{ lg: 10, md: 10, sm: 10, xs: 4 }}
            textAlign="justify"
          >
            {desc}
          </Typography>
        </Stack>
      </Tilt>
    </Stack>
  );

  return (
    <Box
      id="Goals"
      sx={{
        pt: { lg: "60px", md: "30px", sm: "30px", xs: "40px" },
        color: "#d6d6d6",
        height: "100%",
        scrollMarginTop: "50px",
        width: "100%",
        mb: "50px",
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
        {/* {t("missionsGoals")} */}
        Программа обучения
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
          mt={{ lg: "70px", md: "50px", sm: "40px", xs: "30px" }}
          direction={{ lg: "row", md: "row", sm: "row", xs: "column" }}
          flexWrap="wrap"
          justifyContent="space-between"
        >
          {BusinessData.map((service, index) => (
            <BusinessCard key={service.title} index={index} {...service} />
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default Missions;
