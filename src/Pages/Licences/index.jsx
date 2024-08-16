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
      <Stack>
        
    </Stack>
    </Box>
  );
};

export default Licence;
