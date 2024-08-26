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
        pt: { lg: "80px", md: "40px", xs: "60px" },
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
            {/* {t("advantages")}
             */}
            За это время ученики успевают приобрести :
          </Typography>
        </Stack>
        <Stack
          width="100%"
          height="auto"
          direction={{ lg: "row", md: "row", xs: "column" }}
          justifyContent="center"
          alignItems="center"
        >
          {/* <Stack
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
          </Stack> */}
          <Stack
            width={{ lg: "88%", md: "70%", sm: "75%", xs: "100%" }}
            spacing={2}
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
              textAlign="justify"

              // spacing={2}
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
              <Stack>
                <Typography
                  fontSize={{ lg: 23, md: 17, xs: 15 }}
                  color="#dbb45a"
                  fontFamily="Montserrat"
                  mr={2.9}
                  fontWeight={500}
                  pl={0.5}
                  mb={1}
                >
                  {t("advText1")}
                </Typography>
                Ребенок улучшит свои коммуникативные навыки и станет более уверенным в
                себе . Это поможет ему не только в модельной карьере, но и в
                повседневной жизни
              </Stack>
            </Stack>
            <Stack
              data-aos="fade-up"
              data-aos-delay="400"
              fontSize={15}
              data-aos-once="true"
              direction="row"
              textAlign="justify"
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
              <Stack>
                <Typography
                  fontSize={{ lg: 23, md: 17, xs: 15 }}
                  color="#dbb45a"
                  fontFamily="Montserrat"
                  mr={2.9}
                  pl={0.5}
                  mb={1}
                  fontWeight={500}
                >
                  {t("advText2")}
                </Typography>
                Научится уверенно выступать перед публикой и самопрезентовать
                себя. Это повлияет на его дальнейшее развитие и в профессии и в
                жизни
              </Stack>
            </Stack>
            <Stack
              data-aos-once="true"
              data-aos="fade-up"
              data-aos-delay="500"
              textAlign="justify"
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
              <Stack>
                <Typography
                  fontSize={{ lg: 23, md: 17, xs: 15 }}
                  color="#dbb45a"
                  fontFamily="Montserrat"
                  mr={2.9}
                  pl={0.5}
                  fontWeight={500}
                >
                  {t("advText3")}
                </Typography>
                Примет участие в профессиональной съемке,и будет блистать на
                съемочной площадке. Это ценный опыт и пополнение портфолио
                качественными материалами.
              </Stack>
            </Stack>
            <Stack
              data-aos-once="true"
              data-aos="fade-up"
              textAlign="justify"
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
              <Stack>
                <Typography
                  fontSize={{ lg: 23, md: 17, xs: 15 }}
                  color="#dbb45a"
                  fontFamily="Montserrat"
                  mr={2.9}
                  pl={0.5}
                  fontWeight={500}
                >
                  {t("advText4")}
                </Typography>
                Научится держать осанку, владеть своим телом и мимикой лица.
                Обретет уверенность в своих действиях и движениях
              </Stack>
            </Stack>
            <Stack
              data-aos-once="true"
              data-aos="fade-up"
              data-aos-delay="700"
              textAlign="justify"
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
              <Stack>
                <Typography
                  fontSize={{ lg: 23, md: 17, xs: 15 }}
                  color="#dbb45a"
                  fontFamily="Montserrat"
                  mr={2.9}
                  pl={0.5}
                  fontWeight={500}
                >
                  {t("advText5")}
                </Typography>
                Получит базовые знания и навыки, которые помогут в освоении
                профессии модели и сформируют нужный подход к работе. Научится
                работать в команде, быть ответственным за свои обязанности.
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
                fontSize={{ lg: 43, md: 37, xs: 30 }}
                color="#dbb45a"
                fontFamily="Poppins"
                mr={2}
              >
                6
              </Typography>
              <Stack>
                <Typography
                  fontSize={{ lg: 23, md: 17, xs: 15 }}
                  color="#dbb45a"
                  fontFamily="Montserrat"
                  mr={2.9}
                  pl={0.5}
                  fontWeight={500}
                >
                  {t("advText6")}
                </Typography>
                Раскроет свой потенциал и достигнет успеха в Fashion индустрии,
                благодаря индивидуальному подходу преподавателей.
              </Stack>
            </Stack>
            {/* <Stack
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
            </Stack> */}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Advantages;
