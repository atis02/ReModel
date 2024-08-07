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
          heigh="100%"
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
              pt={{
                ...(hiddenText
                  ? { lg: "100px", md: "100px", sm: "100px", xs: "60px" }
                  : { lg: "40px", md: "100px", sm: "130px", xs: "100px" }),
              }}
              pb={{ lg: "25px", md: "23px", sm: "18px", xs: "15px" }}
            >
              <Typography
                data-aos="fade-up"
                data-aos-delay="100"
                width="100%"
                data-aos-once="true"
                fontWeight="600"
                fontSize={{ lg: 78, md: 40, sm: 35, xs: 30 }}
                className="title"
                fontFamily="Montserrat"
              >
                ReModel
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
                Ребенок мечтает о карьере модели или актера и вы не знаете с
                чего начать? Тогда вам к нам!!!
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
                  В нашей студии может заниматься любой желающий от 4 до 16 лет,
                  независимо от роста и комплекции, главное стремиться к
                  совершенству, а мы вам в этом поможем!
                </Stack>
              )}
            </Stack>
            <Button
              sx={{
                width: { lg: "273px", md: "273px", sm: "273px", xs: "183px" },
              }}
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-delay="800"
              className="button"
            >
              <span className="button-background"></span>
              <span className="button-text">
                {" "}
                Записаться
                <EastIcon />
              </span>
            </Button>
          </Stack>
          <Stack
            width={{ lg: "100%", md: "100%", sm: "50%", xs: "80%" }}
            hegiht={{ lg: "100%", md: "100%", sm: "50%", xs: "80%" }}
            sx={{
              ...(hiddenText && isMobile ? { display: "none" } : ""),
            }}
            direction="row"
            justifyContent="center"
            pt={4}
          >
            <img
              src="/images/models.png"
              style={{
                width: "37%",
                height: "35%",
              }}
              alt="aa"
            />
            <img
              src="/images/models2.png"
              style={{
                width: "30%",
                height: "30%",
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
