import React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import Aos from "aos";
import { Trans, useTranslation } from "react-i18next";

const Licence = () => {
  Aos.init({
    duration: 1500,
    offset: 0,
  });
  const { t, i18n } = useTranslation();
  return (
    <Box
      sx={{
        background: "#1E1E1E",
        height: "500px",
        backgroundImage: "url('/images/AboutHorizontal.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        pt: "50px",
        mb: { lg: "80px", md: "30px", sm: "70px", xs: "10px" },
        scrollMarginTop: 50,
      }}
      id="Licences"
    >
      <Typography
        textAlign="center"
        className="title"
        fontSize={{ lg: 30, md: 28, sm: 26, xs: 25 }}
        fontWeight={700}
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-delay="300"
        fontFamily="Montserrat"
      >
        {t("licence")}
      </Typography>
      <Stack
        width={{ lg: "75%", md: "85%", sm: "80%", xs: "90%" }}
        direction={{ lg: "row", md: "row", sm: "column", xs: "column" }}
        sx={{
          height: 535,
          gap: { lg: 10, md: 8, sm: 4, xs: 0.5 },
          background: "#2F2F2F",
          mt: "30px",
          p: { lg: "80px", md: "50px", sm: "30px", xs: "10px" },
        }}
      >
        <Stack
          width={{ lg: "100%", md: "80%", sm: "100%", xs: "100%" }}
          direction="row"
          justifyContent="space-between"
        >
          <Stack direction="row" spacing={1}>
            <Stack>
              <Typography
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-delay="300"
                sx={{ fontSize: { lg: 18, md: 16, xs: 14 } }}
                textAlign="start"
                color="#dbb45a"
                height={{ lg: 35, md: 26, sm: 20, xs: 16 }}
                fontFamily="Montserrat"
                fontWeight={600}
                mr={{ lg: 1, xs: 0 }}
              >
                №
              </Typography>
              <Stack
                width="100%"
                sx={{
                  ...(i18n.language == "ru"
                    ? { height: "70px" }
                    : { height: "74px" }),
                }}
                alignItems="center"
                justifyContent="center"
              >
                <Typography
                  data-aos-once="true"
                  data-aos="fade-up"
                  data-aos-delay="350"
                  fontSize={{ lg: 35, md: 33, xs: 23 }}
                  textAlign="start"
                  color="#dbb45a"
                  fontFamily="Montserrat"
                  fontWeight={500}
                  mr={{ lg: 1, xs: 0 }}
                >
                  1
                </Typography>
              </Stack>
              <Stack
                width="100%"
                height={76}
                alignItems="center"
                justifyContent="center"
              >
                <Typography
                  data-aos-once="true"
                  data-aos="fade-up"
                  data-aos-delay="400"
                  fontSize={{ lg: 35, md: 33, xs: 23 }}
                  textAlign="start"
                  fontWeight={500}
                  color="#dbb45a"
                  mr={{ lg: 1, xs: 0 }}
                  fontFamily="Montserrat"
                >
                  2
                </Typography>
              </Stack>
              <Stack
                width="100%"
                height={76}
                alignItems="center"
                justifyContent="center"
              >
                <Typography
                  data-aos="fade-up"
                  data-aos-once="true"
                  data-aos-delay="450"
                  fontSize={{ lg: 35, md: 33, xs: 23 }}
                  textAlign="start"
                  fontWeight={500}
                  color="#dbb45a"
                  fontFamily="Montserrat"
                  mr={{ lg: 1, xs: 0 }}
                >
                  3
                </Typography>
              </Stack>
            </Stack>
            <Stack
              sx={{
                ...(i18n.language == "ru"
                  ? { width: { lg: 280, md: 280, sm: 250, xs: 120 } }
                  : { width: { lg: 150, md: 130, sm: 180, xs: 110 } }),
              }}
            >
              <Typography
                sx={{
                  fontSize: { lg: 18, md: 16, xs: 12 },
                  height: { lg: 30, md: 26, sm: 20, xs: 16 },
                }}
                textAlign="start"
                data-aos-once="true"
                data-aos="fade-up"
                data-aos-delay="300"
                color="#dbb45a"
                fontWeight={600}
                fontFamily="Montserrat"
              >
                {t("licenceDesc")}
              </Typography>

              <Stack width="90%" height={76} justifyContent="center">
                <Typography
                  sx={{ fontSize: { lg: 18, md: 16, xs: 12 } }}
                  data-aos="fade-up"
                  data-aos-once="true"
                  data-aos-delay="350"
                  width="auto"
                  direction="row"
                  alignItems="center"
                  fontWeight={500}
                  fontFamily="Montserrat"
                  textAlign="start"
                >
                  <Trans i18nKey="licenceDesc2" components={{ 1: <br /> }} />
                </Typography>
              </Stack>
              <Stack width="100%" height={76} justifyContent="center">
                <Typography
                  sx={{ fontSize: { lg: 18, md: 16, xs: 12 } }}
                  data-aos="fade-up"
                  data-aos-once="true"
                  data-aos-delay="400"
                  fontFamily="Montserrat"
                  fontWeight={500}
                  textAlign="start"
                >
                  <Trans i18nKey="licenceDesc3" components={{ 1: <br /> }} />
                </Typography>
              </Stack>
              <Stack width="90%" height={76} justifyContent="center">
                <Typography
                  sx={{ fontSize: { lg: 18, md: 16, xs: 12 } }}
                  data-aos="fade-up"
                  data-aos-once="true"
                  data-aos-delay="450"
                  textAlign="start"
                  fontWeight={500}
                  fontFamily="Montserrat"
                >
                  <Trans i18nKey="licenceDesc4" components={{ 1: <br /> }} />
                </Typography>
              </Stack>
            </Stack>
          </Stack>
          <Stack width={150}>
            <Typography
              data-aos-once="true"
              data-aos="fade-up"
              data-aos-delay="300"
              sx={{ fontSize: { lg: 18, md: 16, xs: 12 } }}
              textAlign="start"
              color="#dbb45a"
              fontWeight={600}
              fontFamily="Montserrat"
              height={{ lg: 30, md: 26, sm: 20, xs: 16 }}
            >
              {t("series")}
            </Typography>
            <Stack height={76} width="100%" justifyContent="center">
              <Typography
                data-aos-once="true"
                data-aos="fade-up"
                data-aos-delay="400"
                sx={{ fontSize: { lg: 18, md: 16, xs: 12 } }}
                fontFamily="Montserrat"
                fontWeight={500}
                width="auto"
              >
                №: 1-22-16-182
              </Typography>
            </Stack>
            <Stack height={76} width="100%" justifyContent="center">
              <Typography
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-delay="500"
                sx={{ fontSize: { lg: 18, md: 16, xs: 12 } }}
                width="auto"
                fontFamily="Montserrat"
                fontWeight={500}
                textAlign="start"
              >
                №: 1-22-16-216
              </Typography>
            </Stack>
            <Stack height={76} width="100%" justifyContent="center">
              <Typography
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-delay="600"
                sx={{ fontSize: { lg: 18, md: 16, xs: 12 } }}
                width="auto"
                fontFamily="Montserrat"
                textAlign="start"
                fontWeight={500}
              >
                №: 1-22-16-318
              </Typography>
            </Stack>
          </Stack>
          <Stack width={140}>
            <Typography
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-delay="300"
              sx={{ fontSize: { lg: 18, md: 16, xs: 12 } }}
              textAlign="start"
              height={{ lg: 30, md: 26, sm: 20, xs: 16 }}
              fontFamily="Montserrat"
              color="#dbb45a"
              fontWeight={600}
            >
              {t("period")}
            </Typography>
            <Stack height={76} width="100%" justifyContent="center">
              <Typography
                data-aos-once="true"
                data-aos="fade-up"
                data-aos-delay="400"
                sx={{ fontSize: { lg: 18, md: 16, xs: 12 } }}
                width="auto"
                fontFamily="Montserrat"
                fontWeight={500}
              >
                2023-2026
              </Typography>
            </Stack>
            <Stack height={76} width="100%" justifyContent="center">
              <Typography
                data-aos-once="true"
                data-aos="fade-up"
                data-aos-delay="500"
                sx={{ fontSize: { lg: 18, md: 16, xs: 12 } }}
                width="auto"
                fontFamily="Montserrat"
                fontWeight={500}
              >
                2023-2026
              </Typography>
            </Stack>
            <Stack height={76} width="100%" justifyContent="center">
              <Typography
                data-aos-once="true"
                data-aos="fade-up"
                data-aos-delay="600"
                sx={{ fontSize: { lg: 18, md: 16, xs: 12 } }}
                width="auto"
                fontFamily="Montserrat"
                fontWeight={500}
              >
                2024-2027
              </Typography>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          width={{ lg: 250, md: "100%", sm: "100%", xs: "100%" }}
          height="100%"
          mt={{ lg: 0, md: 5, sm: 0, xs: 0 }}
          ml={{
            ...(i18n.language == "ru"
              ? { lg: -5, md: -10 }
              : { lg: 0, md: -10 }),
          }}
        >
          <Typography
            sx={{ fontSize: { lg: 18, md: 16, xs: 14 } }}
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="300"
            textAlign={{ lg: "start", md: "start", sm: "start", xs: "center" }}
            height={{ lg: 53, md: 51, sm: 30, xs: 56 }}
            color="#dbb45a"
            mt={{ lg: 0, md: -5, sm: 0, xs: 0 }}
            fontFamily="Montserrat"
            fontWeight={600}
          >
            {t("permit")}
          </Typography>
          <Stack
            height={{ lg: 135, md: 86, sm: 76, xs: "100%" }}
            alignItems="start"
            width={"100%"}
          >
            <Typography
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-delay="500"
              sx={{
                fontSize: { lg: 18, md: 16, xs: 14 },
                display: { lg: "none", md: "none", sm: "none", xs: "block" },
              }}
              fontFamily="Montserrat"
              textAlign="start"
              width="auto"
              fontWeight={500}
            >
              <Trans i18nKey="permit2" components={{ 1: <br /> }} />
            </Typography>
            <Typography
              data-aos-once="true"
              data-aos="fade-up"
              data-aos-delay="500"
              fontFamily="Montserrat"
              sx={{
                fontSize: { lg: 18, md: 16, xs: 14 },
                display: { lg: "block", md: "block", sm: "block", xs: "none" },
              }}
              fontWeight={500}
              textAlign="start"
              width="auto"
            >
              {t("permit3")}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Licence;
