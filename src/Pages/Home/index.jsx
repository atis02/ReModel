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
            color="#d6d6d6"
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
                  : { lg: "200px", md: "150px", sm: "130px", xs: "100px" }),
              }}
              pb={{ lg: "25px", md: "23px", sm: "18px", xs: "15px" }}
            >
              <Typography
                data-aos="fade-up"
                data-aos-delay="100"
                width="100%"
                data-aos-once="true"
                fontWeight="600"
                fontSize={{ lg: 48, md: 40, sm: 35, xs: 30 }}
                className="title"
                fontFamily="Montserrat"
              >
                Altyn Miras
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
                fontSize={12}
              >
                logistics company
              </Typography>
            </Stack>
            <Stack width="100%">
              <Typography
                fontSize={14}
                width="auto"
                data-aos-once="true"
                data-aos="fade-up"
                data-aos-delay="100"
                fontFamily="Montserrat"
                fontWeight={500}
              >
                {t("company")}
                <span className="title" style={{ fontWeight: "700" }}>
                  {t("nameCompany")}
                </span>{" "}
                {t("description")}
              </Typography>
              {hiddenText && (
                <Stack
                  fontSize={14}
                  width="auto"
                  data-aos-once="true"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  fontFamily="Montserrat"
                  fontWeight={500}
                  lineHeight="1.5"
                  letterSpacing="0.00938em"
                >
                  <Trans i18nKey="hideDesc" components={{ 1: <br /> }} />
                </Stack>
              )}
            </Stack>
            <Button
              onClick={() => setHiddenText(!hiddenText)}
              sx={{
                fontFamily: "Montserrat",
                width: "125px",
                heigth: "40px",
                background: "#DBB45A",
                color: "#fff",
                borderRadius: "26px",
                textTransform: "capitalize",
              }}
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-delay="800"
            >
              {t("read")}
            </Button>
          </Stack>
          <Stack
            width={{ lg: "100%", md: "100%", sm: "50%", xs: "80%" }}
            hegiht={{ lg: "100%", md: "100%", sm: "50%", xs: "80%" }}
            sx={{
              ...(hiddenText && isMobile ? { display: "none" } : ""),
            }}
          >
            <img
              src="/images/pngwing 6.png"
              style={{
                width: "100%",
                height: "100%",
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
