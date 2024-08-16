import React, { useState } from "react";
import {
  Box,
  Button,
  Divider,
  Container,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Trans, useTranslation } from "react-i18next";
import Aos from "aos";
import "aos/dist/aos.css";
import EastIcon from "@mui/icons-material/East";
import ReactPlayer from "react-player";

const Home = () => {
  const [hiddenText, setHiddenText] = useState(false);

  const { t } = useTranslation();
  Aos.init({
    duration: 1000,
    offset: 0,
  });
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Container>
      <Box
        sx={{
          pt: "25px",
          width: "100%",
          height: "90vh",
          top: 0,
          zIndex: "100",
          position: "sticky",
        }}
      >
        <Stack
          direction={{
            lg: "row",
            md: "row",
            sm: "row",
            xs: "column",
          }}
          alignItems="center"
          width="auto"
          height="90%"
          justifyContent="center"
        >
          <Stack
            alignItems="start"
            spacing={{ lg: 3, md: 3, sm: 3, xs: 2 }}
            color="#fff"
            width={{ lg: "65%", md: "85%", xs: "100%" }}
            pb={{ lg: 0, md: 0, xs: 1 }}
          >
            <Stack
              direction="row"
              alignItems="center"
              spacing={2}
              width={{ lg: "90%", md: "80%", sm: "70%", xs: "100%" }}
              height={35}
              // pt={{
              //   ...(hiddenText
              //     ? { lg: "100px", md: "100px", sm: "100px", xs: "60px" }
              //     : { lg: "70px", md: "100px", sm: "130px", xs: "100px" }),
              // }}
              pb={{ lg: "25px", md: "23px", sm: "18px", xs: "15px" }}
            >
              <Typography
                data-aos="fade-up"
                data-aos-delay="100"
                width="100%"
                data-aos-once="true"
                fontWeight="600"
                fontSize={{ lg: 78, md: 40, sm: 35, xs: 50 }}
                className="title"
                fontFamily="Montserrat"
              >
                REmodel
              </Typography>

              <Divider
                data-aos-once="true"
                data-aos="fade-up"
                data-aos-delay="100"
                sx={{ width: "1px", height: "40px", background: "#fff" }}
              />
              <Typography
                data-aos="fade-up"
                data-aos-once="true"
                fontFamily="Montserrat"
                data-aos-delay="100"
                fontSize={16}
              >
                Art Agency
              </Typography>
            </Stack>
            <Stack width="100%">
              <Typography
                fontSize={17}
                width="auto"
                data-aos-once="true"
                data-aos="fade-up"
                data-aos-delay="100"
                fontFamily="Montserrat"
                fontWeight={500}
              >
                Детское модельное Арт-Агентство в Санкт-Петербурге. Приглашает
                на занятия детей и подростков в модельную студию .
                {/* {t("company")}
                <span className="title" style={{ fontWeight: "700" }}>
                  {t("nameCompany")}
                </span>{" "}
                {t("description")} */}
              </Typography>
              {hiddenText && (
                <Stack
                  fontSize={17}
                  width="auto"
                  data-aos-once="true"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  fontFamily="Montserrat"
                  fontWeight={500}
                  lineHeight="1.5"
                  letterSpacing="0.00938em"
                >
                  {/* <Trans i18nKey="hideDesc" components={{ 1: <br /> }} />
                   */}
                  Авторская методика преподавания разработана и адаптирована для
                  детей от 4 лет до 16 лет, независимо от роста и комплекции,
                  главное стремиться к совершенству, а мы вам в этом поможем.
                </Stack>
              )}
            </Stack>
            <a
              href="https://wa.me/+79119833108?text=Добрый%20день,%20меня%20заинтересовало%20обучение%20в%20Арт-Агентстве"
              target="_blank"
              className="button"
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-delay="800"
            >
              <span className="button-background"></span>
              <span className="button-text">
                {" "}
                Записаться
                <EastIcon />
              </span>
            </a>
          </Stack>
          <Stack
            width={{ lg: "80%", md: "100%", sm: "100%", xs: "60%" }}
            height={{ lg: "70%", md: "70%", sm: "60%", xs: "60%" }}
            sx={{
              ...(isMobile ? { display: "none" } : ""),
            }}
            direction="row"
            justifyContent={{ lg: "flex-end" }}
            // pt={4}
          >
            <img
              src="/images/about.png"
              style={{
                width: "80%",
                height: "100%",
                borderRadius: "100px",
              }}
              alt="aa"
            />
          </Stack>
        </Stack>
      </Box>
    </Container>
  );
};

export default Home;
