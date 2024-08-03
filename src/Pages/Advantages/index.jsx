import React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import Aos from "aos";
import { useTranslation } from "react-i18next";

const Advantages = () => {
  Aos.init({
    duration: 1500,
    offset: 0,
  });
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        pt: { lg: "80px", md: "40px", xs: "5px" },
        width: "100%",
        height: "auto",
        color: "#fff",
        mb: "50px",
      }}
      id="Advantages"
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: "30px",
          fontFamily: "Poppins",
          gap: "30px",

          width: "100%",
        }}
      >
        <Stack>
          <Typography
            textAlign="center"
            className="title"
            fontSize={{ lg: 30, md: 28, xs: 25 }}
            data-aos-once="true"
            fontWeight={700}
            data-aos="fade-up"
            fontFamily="Montserrat"
            data-aos-delay="200"
          >
            {t("advantages")}
          </Typography>
        </Stack>
        <Stack
          width="100%"
          height="auto"
          direction={{ lg: "row", md: "row", xs: "column" }}
          justifyContent="center"
          alignItems="center"
        >
          <Stack
            sx={{
              width: "80%",
              height: "80%",
              zIndex: "100",
            }}
          >
            <img
              style={{
                width: "60%",
                height: "60%",
              }}
              src="/images/boyModel.png"
              alt=""
            />
          </Stack>
          <Stack
            width={{ lg: "60%", md: "70%", sm: "75%", xs: "100%" }}
            // spacing={1}
            mt={{ xs: 1 }}
            p={{ lg: 0, md: 0, xs: 1 }}
          >
            <Stack
              fontSize={15}
              direction="row"
              data-aos="fade-up"
              data-aos-once="true"
              fontWeight={500}
              data-aos-delay="300"
              alignItems="center"
              color="#d6d6d6"
            >
              <Typography
                fontSize={{ lg: 43, md: 37, xs: 30 }}
                color="#dbb45a"
                fontFamily="Poppins"
                mr={2.9}
                pl={0.5}
              >
                1
              </Typography>
              {t("advText1")}
            </Stack>
            <Stack
              data-aos="fade-up"
              data-aos-delay="400"
              fontSize={15}
              data-aos-once="true"
              direction="row"
              fontWeight={500}
              color="#d6d6d6"
              alignItems="center"
            >
              <Typography
                fontSize={{ lg: 43, md: 37, xs: 30 }}
                fontFamily="Poppins"
                color="#dbb45a"
                mr={2}
              >
                2
              </Typography>
              {t("advText2")}
            </Stack>
            <Stack
              data-aos-once="true"
              data-aos="fade-up"
              data-aos-delay="500"
              fontSize={15}
              color="#d6d6d6"
              direction="row"
              alignItems="center"
              fontWeight={500}
            >
              <Typography
                fontSize={{ lg: 43, md: 37, xs: 30 }}
                fontFamily="Poppins"
                color="#dbb45a"
                mr={2}
              >
                3
              </Typography>
              {t("advText3")}
            </Stack>
            <Stack
              data-aos-once="true"
              data-aos="fade-up"
              data-aos-delay="600"
              color="#d6d6d6"
              fontSize={15}
              direction="row"
              fontWeight={500}
              alignItems="center"
            >
              <Typography
                fontSize={{ lg: 43, md: 37, xs: 30 }}
                fontFamily="Poppins"
                color="#dbb45a"
                mr={2}
              >
                4
              </Typography>
              {t("advText4")}
            </Stack>
            <Stack
              data-aos-once="true"
              data-aos="fade-up"
              data-aos-delay="700"
              fontSize={15}
              color="#d6d6d6"
              direction="row"
              fontWeight={500}
              alignItems="center"
            >
              <Typography
                fontSize={{ lg: 43, md: 37, xs: 30 }}
                fontFamily="Poppins"
                color="#dbb45a"
                mr={2}
              >
                5
              </Typography>
              {t("advText5")}
            </Stack>
            <Stack
              data-aos-once="true"
              data-aos="fade-up"
              data-aos-delay="800"
              color="#d6d6d6"
              fontSize={15}
              fontWeight={500}
              direction="row"
              alignItems="center"
            >
              <Typography
                fontSize={{ lg: 43, md: 37, xs: 30 }}
                color="#dbb45a"
                fontFamily="Poppins"
                mr={2}
              >
                6
              </Typography>
              {t("advText6")}
            </Stack>
            <Stack
              fontSize={15}
              color="#d6d6d6"
              fontWeight={500}
              direction="row"
              data-aos-once="true"
              data-aos="fade-up"
              data-aos-delay="900"
              alignItems="center"
            >
              <Typography
                fontSize={{ lg: 43, md: 37, xs: 30 }}
                fontFamily="Poppins"
                color="#dbb45a"
                mr={2}
              >
                7
              </Typography>
              {t("advText7")}
            </Stack>
            <Stack
              fontSize={15}
              color="#d6d6d6"
              fontWeight={500}
              direction="row"
              data-aos-once="true"
              data-aos="fade-up"
              data-aos-delay="950"
              alignItems="center"
            >
              <Typography
                fontSize={{ lg: 43, md: 37, xs: 30 }}
                fontFamily="Poppins"
                color="#dbb45a"
                mr={2}
              >
                8
              </Typography>
              {t("advText8")}
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Advantages;
