import React from "react";
import { Box, Container, Divider, Stack, Typography } from "@mui/material";
import Aos from "aos";
import { useTranslation } from "react-i18next";

const Footer = () => {
  Aos.init({
    duration: 1500,
    offset: 0,
  });
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        // background: "#2F2F2F",
        height: { lg: "270px", md: "100%", xs: "100%" },
        backgroundImage: "url('/images/AboutHorizontal.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPositionY: "-100px",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
        p: { lg: "60px 0 10px 0", xs: "30px 0 10px 0" },
        boxShadow: "0px -2px 24px -4px rgba(0,0,0,0.75)",
      }}
      id="Footer"
    >
      <Container
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: {
            lg: "space-between",
            md: "space-between",
            sm: "space-between",
            xs: "start",
          },

          width: "100%",
        }}
      >
        <Stack
          direction="row"
          flexWrap="wrap"
          spacing={{ lg: 5, xs: 0 }}
          width={{ lg: "100%", md: "100%", sm: "100%", xs: "100%" }}
          mt={2}
          // justifyContent="space-between"
        >
          <Stack
            direction="row"
            spacing={{ lg: 4.3, sm: 2.3, md: 3.3, xs: 1.3 }}
            sx={{ display: { lg: "none", md: "none", sm: "none", xs: "flex" } }}
            justifyContent="center"
            width="100%"
            pb={2}
          >
            <Stack
              data-aos="fade-down"
              data-aos-once="true"
              data-aos-delay="500"
              direction="row"
              alignItems="center"
              spacing={1}
              // pt={{ lg: 0, xs: 3 }}
            >
              <a
                style={{
                  color: "#fff",
                  textDecoration: "none",
                  fontFamily: "Montserrat",
                  fontWeight: 500,
                }}
                target="_blank"
                href="https://t.me/rezakelena"
              >
                <svg
                  class="t-sociallinks__svg"
                  role="presentation"
                  width="30px"
                  height="30px"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M50 100c27.614 0 50-22.386 50-50S77.614 0 50 0 0 22.386 0 50s22.386 50 50 50Zm21.977-68.056c.386-4.38-4.24-2.576-4.24-2.576-3.415 1.414-6.937 2.85-10.497 4.302-11.04 4.503-22.444 9.155-32.159 13.734-5.268 1.932-2.184 3.864-2.184 3.864l8.351 2.577c3.855 1.16 5.91-.129 5.91-.129l17.988-12.238c6.424-4.38 4.882-.773 3.34.773l-13.49 12.882c-2.056 1.804-1.028 3.35-.129 4.123 2.55 2.249 8.82 6.364 11.557 8.16.712.467 1.185.778 1.292.858.642.515 4.111 2.834 6.424 2.319 2.313-.516 2.57-3.479 2.57-3.479l3.083-20.226c.462-3.511.993-6.886 1.417-9.582.4-2.546.705-4.485.767-5.362Z"
                    fill="#ffffff"
                  ></path>
                </svg>
              </a>
            </Stack>
            <Stack
              direction="row"
              data-aos-once="true"
              data-aos="fade-down"
              data-aos-delay="600"
              width="auto"
              alignItems="center"
              spacing={1}
            >
              <a
                style={{ textDecoration: "none", color: "#fff" }}
                target="_blank"
                href="https://vk.com/artagentsvoremodel"
              >
                <svg
                  class="t-sociallinks__svg"
                  role="presentation"
                  width="30px"
                  height="30px"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M50 100c27.614 0 50-22.386 50-50S77.614 0 50 0 0 22.386 0 50s22.386 50 50 50ZM25 34c.406 19.488 10.15 31.2 27.233 31.2h.968V54.05c6.278.625 11.024 5.216 12.93 11.15H75c-2.436-8.87-8.838-13.773-12.836-15.647C66.162 47.242 71.783 41.62 73.126 34h-8.058c-1.749 6.184-6.932 11.805-11.867 12.336V34h-8.057v21.611C40.147 54.362 33.838 48.304 33.556 34H25Z"
                    fill="#ffffff"
                  ></path>
                </svg>
              </a>
            </Stack>
            <Stack
              direction="row"
              data-aos-once="true"
              data-aos="fade-down"
              data-aos-delay="600"
              width="auto"
              alignItems="center"
              spacing={1}
            >
              <a
                target="_blank"
                style={{ textDecoration: "none", color: "#fff" }}
                href="https://www.instagram.com/_elena_rezak?igsh=MWZqNWgzbG9ia28xdg=="
              >
                <svg
                  class="t-sociallinks__svg"
                  role="presentation"
                  width="30px"
                  height="30px"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M50 100C77.6142 100 100 77.6142 100 50C100 22.3858 77.6142 0 50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100ZM25 39.3918C25 31.4558 31.4566 25 39.3918 25H60.6082C68.5442 25 75 31.4566 75 39.3918V60.8028C75 68.738 68.5442 75.1946 60.6082 75.1946H39.3918C31.4558 75.1946 25 68.738 25 60.8028V39.3918ZM36.9883 50.0054C36.9883 42.8847 42.8438 37.0922 50.0397 37.0922C57.2356 37.0922 63.0911 42.8847 63.0911 50.0054C63.0911 57.1252 57.2356 62.9177 50.0397 62.9177C42.843 62.9177 36.9883 57.1252 36.9883 50.0054ZM41.7422 50.0054C41.7422 54.5033 45.4641 58.1638 50.0397 58.1638C54.6153 58.1638 58.3372 54.5041 58.3372 50.0054C58.3372 45.5066 54.6145 41.8469 50.0397 41.8469C45.4641 41.8469 41.7422 45.5066 41.7422 50.0054ZM63.3248 39.6355C65.0208 39.6355 66.3956 38.2606 66.3956 36.5646C66.3956 34.8687 65.0208 33.4938 63.3248 33.4938C61.6288 33.4938 60.2539 34.8687 60.2539 36.5646C60.2539 38.2606 61.6288 39.6355 63.3248 39.6355Z"
                    fill="#ffffff"
                  ></path>
                </svg>
              </a>
            </Stack>
            <Stack
              data-aos-once="true"
              data-aos="fade-down"
              data-aos-delay="400"
              direction="row"
              alignItems="center"
              spacing={1}
            >
              <a
                style={{
                  color: "#fff",
                  textDecoration: "none",
                  fontFamily: "Montserrat",
                  fontWeight: 500,
                }}
                href="https://wa.me/89119833108"
                target="_blank"
              >
                <svg
                  fill="#000000"
                  width="30px"
                  height="30px"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="-101.64 -101.64 511.28 511.28"
                  xml:space="preserve"
                  stroke="#000000"
                  stroke-width="0.0030800000000000003"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0">
                    <rect
                      x="-101.64"
                      y="-101.64"
                      width="511.28"
                      height="511.28"
                      rx="255.64"
                      fill="#fff"
                      strokewidth="0"
                    ></rect>
                  </g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g id="XMLID_468_">
                      {" "}
                      <path
                        id="XMLID_469_"
                        d="M227.904,176.981c-0.6-0.288-23.054-11.345-27.044-12.781c-1.629-0.585-3.374-1.156-5.23-1.156 c-3.032,0-5.579,1.511-7.563,4.479c-2.243,3.334-9.033,11.271-11.131,13.642c-0.274,0.313-0.648,0.687-0.872,0.687 c-0.201,0-3.676-1.431-4.728-1.888c-24.087-10.463-42.37-35.624-44.877-39.867c-0.358-0.61-0.373-0.887-0.376-0.887 c0.088-0.323,0.898-1.135,1.316-1.554c1.223-1.21,2.548-2.805,3.83-4.348c0.607-0.731,1.215-1.463,1.812-2.153 c1.86-2.164,2.688-3.844,3.648-5.79l0.503-1.011c2.344-4.657,0.342-8.587-0.305-9.856c-0.531-1.062-10.012-23.944-11.02-26.348 c-2.424-5.801-5.627-8.502-10.078-8.502c-0.413,0,0,0-1.732,0.073c-2.109,0.089-13.594,1.601-18.672,4.802 c-5.385,3.395-14.495,14.217-14.495,33.249c0,17.129,10.87,33.302,15.537,39.453c0.116,0.155,0.329,0.47,0.638,0.922 c17.873,26.102,40.154,45.446,62.741,54.469c21.745,8.686,32.042,9.69,37.896,9.69c0.001,0,0.001,0,0.001,0 c2.46,0,4.429-0.193,6.166-0.364l1.102-0.105c7.512-0.666,24.02-9.22,27.775-19.655c2.958-8.219,3.738-17.199,1.77-20.458 C233.168,179.508,230.845,178.393,227.904,176.981z"
                      ></path>{" "}
                      <path
                        id="XMLID_470_"
                        d="M156.734,0C73.318,0,5.454,67.354,5.454,150.143c0,26.777,7.166,52.988,20.741,75.928L0.212,302.716 c-0.484,1.429-0.124,3.009,0.933,4.085C1.908,307.58,2.943,308,4,308c0.405,0,0.813-0.061,1.211-0.188l79.92-25.396 c21.87,11.685,46.588,17.853,71.604,17.853C240.143,300.27,308,232.923,308,150.143C308,67.354,240.143,0,156.734,0z M156.734,268.994c-23.539,0-46.338-6.797-65.936-19.657c-0.659-0.433-1.424-0.655-2.194-0.655c-0.407,0-0.815,0.062-1.212,0.188 l-40.035,12.726l12.924-38.129c0.418-1.234,0.209-2.595-0.561-3.647c-14.924-20.392-22.813-44.485-22.813-69.677 c0-65.543,53.754-118.867,119.826-118.867c66.064,0,119.812,53.324,119.812,118.867 C276.546,215.678,222.799,268.994,156.734,268.994z"
                      ></path>{" "}
                    </g>{" "}
                  </g>
                </svg>
              </a>
            </Stack>
          </Stack>
          <Stack
            spacing={{ lg: 3, sm: 2, md: 2.5, xs: 2 }}
            width={{ lg: "60%", md: "72%", sm: "82%", xs: "100%" }}
          >
            <Stack
              direction="row"
              data-aos="fade-down"
              data-aos-once="true"
              data-aos-delay="300"
              alignItems="center"
              width="100%"
              spacing={1}
            >
              <img
                src="/images/Location.png"
                style={{ width: 24, height: 24 }}
                alt=""
              />
              <Typography fontFamily="Montserrat" fontWeight={500} width="90%">
                М.Петроградская Каменноостровский проспект 42
                {/* {t("location")} */}
              </Typography>
            </Stack>

            <Stack
              data-aos-once="true"
              data-aos="fade-down"
              data-aos-delay="400"
              direction="row"
              width="100%"
              alignItems="center"
              spacing={1}
            >
              <img
                src="/images/Call.png"
                style={{ width: 24, height: 24 }}
                alt=""
              />
              <a
                style={{
                  color: "#fff",
                  textDecoration: "none",
                  fontFamily: "Montserrat",
                  fontWeight: 500,
                }}
                href="tel: 89119833108"
              >
                89119833108
              </a>
            </Stack>

            <Stack
              direction="row"
              data-aos-once="true"
              data-aos="fade-down"
              data-aos-delay="600"
              width="auto"
              alignItems="center"
              spacing={1}
            >
              <img
                src="/images/Mail.png"
                style={{ width: 24, height: 24 }}
                alt=""
              />
              <Typography fontFamily="Montserrat" fontWeight={500}>
                <a
                  style={{ textDecoration: "none", color: "#fff" }}
                  href="mailto:rezakelena@gmail.com"
                >
                  rezakelena@gmail.com
                </a>
              </Typography>
            </Stack>
          </Stack>
          <Stack
            direction="row"
            spacing={{ lg: 4.3, sm: 2.3, md: 3.3, xs: 1.3 }}
            sx={{ display: { lg: "flex", md: "flex", sm: "flex", xs: "none" } }}
            alignItems="start"
          >
            <Stack
              data-aos="fade-down"
              data-aos-once="true"
              data-aos-delay="500"
              direction="row"
              width="100%"
              alignItems="center"
              spacing={1}
              // pt={{ lg: 0, xs: 3 }}
            >
              <a
                style={{
                  color: "#fff",
                  textDecoration: "none",
                  fontFamily: "Montserrat",
                  fontWeight: 500,
                }}
                href="https://t.me/rezakelena"
                target="_blank"
              >
                <svg
                  class="t-sociallinks__svg"
                  role="presentation"
                  width="30px"
                  height="30px"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M50 100c27.614 0 50-22.386 50-50S77.614 0 50 0 0 22.386 0 50s22.386 50 50 50Zm21.977-68.056c.386-4.38-4.24-2.576-4.24-2.576-3.415 1.414-6.937 2.85-10.497 4.302-11.04 4.503-22.444 9.155-32.159 13.734-5.268 1.932-2.184 3.864-2.184 3.864l8.351 2.577c3.855 1.16 5.91-.129 5.91-.129l17.988-12.238c6.424-4.38 4.882-.773 3.34.773l-13.49 12.882c-2.056 1.804-1.028 3.35-.129 4.123 2.55 2.249 8.82 6.364 11.557 8.16.712.467 1.185.778 1.292.858.642.515 4.111 2.834 6.424 2.319 2.313-.516 2.57-3.479 2.57-3.479l3.083-20.226c.462-3.511.993-6.886 1.417-9.582.4-2.546.705-4.485.767-5.362Z"
                    fill="#ffffff"
                  ></path>
                </svg>
              </a>
            </Stack>
            <Stack
              direction="row"
              data-aos-once="true"
              data-aos="fade-down"
              data-aos-delay="600"
              width="auto"
              alignItems="center"
              spacing={1}
            >
              <a
                style={{ textDecoration: "none", color: "#fff" }}
                href="https://vk.com/artagentsvoremodel"
                target="_blank"
              >
                <svg
                  class="t-sociallinks__svg"
                  role="presentation"
                  width="30px"
                  height="30px"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M50 100c27.614 0 50-22.386 50-50S77.614 0 50 0 0 22.386 0 50s22.386 50 50 50ZM25 34c.406 19.488 10.15 31.2 27.233 31.2h.968V54.05c6.278.625 11.024 5.216 12.93 11.15H75c-2.436-8.87-8.838-13.773-12.836-15.647C66.162 47.242 71.783 41.62 73.126 34h-8.058c-1.749 6.184-6.932 11.805-11.867 12.336V34h-8.057v21.611C40.147 54.362 33.838 48.304 33.556 34H25Z"
                    fill="#ffffff"
                  ></path>
                </svg>
              </a>
            </Stack>
            <Stack
              direction="row"
              data-aos-once="true"
              data-aos="fade-down"
              data-aos-delay="600"
              width="auto"
              alignItems="center"
              spacing={1}
            >
              <a
                style={{ textDecoration: "none", color: "#fff" }}
                href="https://www.instagram.com/_elena_rezak?igsh=MWZqNWgzbG9ia28xdg=="
                target="_blank"
              >
                <svg
                  class="t-sociallinks__svg"
                  role="presentation"
                  width="30px"
                  height="30px"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M50 100C77.6142 100 100 77.6142 100 50C100 22.3858 77.6142 0 50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100ZM25 39.3918C25 31.4558 31.4566 25 39.3918 25H60.6082C68.5442 25 75 31.4566 75 39.3918V60.8028C75 68.738 68.5442 75.1946 60.6082 75.1946H39.3918C31.4558 75.1946 25 68.738 25 60.8028V39.3918ZM36.9883 50.0054C36.9883 42.8847 42.8438 37.0922 50.0397 37.0922C57.2356 37.0922 63.0911 42.8847 63.0911 50.0054C63.0911 57.1252 57.2356 62.9177 50.0397 62.9177C42.843 62.9177 36.9883 57.1252 36.9883 50.0054ZM41.7422 50.0054C41.7422 54.5033 45.4641 58.1638 50.0397 58.1638C54.6153 58.1638 58.3372 54.5041 58.3372 50.0054C58.3372 45.5066 54.6145 41.8469 50.0397 41.8469C45.4641 41.8469 41.7422 45.5066 41.7422 50.0054ZM63.3248 39.6355C65.0208 39.6355 66.3956 38.2606 66.3956 36.5646C66.3956 34.8687 65.0208 33.4938 63.3248 33.4938C61.6288 33.4938 60.2539 34.8687 60.2539 36.5646C60.2539 38.2606 61.6288 39.6355 63.3248 39.6355Z"
                    fill="#ffffff"
                  ></path>
                </svg>
              </a>
            </Stack>
            <Stack
              data-aos-once="true"
              data-aos="fade-down"
              data-aos-delay="400"
              direction="row"
              width="100%"
              alignItems="center"
              spacing={1}
            >
              <a
                style={{
                  color: "#fff",
                  textDecoration: "none",
                  fontFamily: "Montserrat",
                  fontWeight: 500,
                }}
                target="_blank"
                href="https://wa.me/89119833108"
              >
                <svg
                  fill="#000000"
                  width="30px"
                  height="30px"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="-101.64 -101.64 511.28 511.28"
                  xml:space="preserve"
                  stroke="#000000"
                  stroke-width="0.0030800000000000003"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0">
                    <rect
                      x="-101.64"
                      y="-101.64"
                      width="511.28"
                      height="511.28"
                      rx="255.64"
                      fill="#fff"
                      strokewidth="0"
                    ></rect>
                  </g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g id="XMLID_468_">
                      {" "}
                      <path
                        id="XMLID_469_"
                        d="M227.904,176.981c-0.6-0.288-23.054-11.345-27.044-12.781c-1.629-0.585-3.374-1.156-5.23-1.156 c-3.032,0-5.579,1.511-7.563,4.479c-2.243,3.334-9.033,11.271-11.131,13.642c-0.274,0.313-0.648,0.687-0.872,0.687 c-0.201,0-3.676-1.431-4.728-1.888c-24.087-10.463-42.37-35.624-44.877-39.867c-0.358-0.61-0.373-0.887-0.376-0.887 c0.088-0.323,0.898-1.135,1.316-1.554c1.223-1.21,2.548-2.805,3.83-4.348c0.607-0.731,1.215-1.463,1.812-2.153 c1.86-2.164,2.688-3.844,3.648-5.79l0.503-1.011c2.344-4.657,0.342-8.587-0.305-9.856c-0.531-1.062-10.012-23.944-11.02-26.348 c-2.424-5.801-5.627-8.502-10.078-8.502c-0.413,0,0,0-1.732,0.073c-2.109,0.089-13.594,1.601-18.672,4.802 c-5.385,3.395-14.495,14.217-14.495,33.249c0,17.129,10.87,33.302,15.537,39.453c0.116,0.155,0.329,0.47,0.638,0.922 c17.873,26.102,40.154,45.446,62.741,54.469c21.745,8.686,32.042,9.69,37.896,9.69c0.001,0,0.001,0,0.001,0 c2.46,0,4.429-0.193,6.166-0.364l1.102-0.105c7.512-0.666,24.02-9.22,27.775-19.655c2.958-8.219,3.738-17.199,1.77-20.458 C233.168,179.508,230.845,178.393,227.904,176.981z"
                      ></path>{" "}
                      <path
                        id="XMLID_470_"
                        d="M156.734,0C73.318,0,5.454,67.354,5.454,150.143c0,26.777,7.166,52.988,20.741,75.928L0.212,302.716 c-0.484,1.429-0.124,3.009,0.933,4.085C1.908,307.58,2.943,308,4,308c0.405,0,0.813-0.061,1.211-0.188l79.92-25.396 c21.87,11.685,46.588,17.853,71.604,17.853C240.143,300.27,308,232.923,308,150.143C308,67.354,240.143,0,156.734,0z M156.734,268.994c-23.539,0-46.338-6.797-65.936-19.657c-0.659-0.433-1.424-0.655-2.194-0.655c-0.407,0-0.815,0.062-1.212,0.188 l-40.035,12.726l12.924-38.129c0.418-1.234,0.209-2.595-0.561-3.647c-14.924-20.392-22.813-44.485-22.813-69.677 c0-65.543,53.754-118.867,119.826-118.867c66.064,0,119.812,53.324,119.812,118.867 C276.546,215.678,222.799,268.994,156.734,268.994z"
                      ></path>{" "}
                    </g>{" "}
                  </g>
                </svg>
              </a>
            </Stack>
          </Stack>
        </Stack>
      </Container>
      <Divider
        sx={{
          color: "#fff",
        }}
      />
      <Typography
        width="100%"
        data-aos-once="true"
        data-aos="fade-down"
        data-aos-delay="1000"
        fontSize={{ lg: 14, md: 13, sm: 13, xs: 12 }}
        textAlign="center"
        fontFamily="Montserrat"
        color="#fff"
        fontWeight={500}
        pt={2}
      >
        Copyright © {new Date().getFullYear()} ReModel | Powered by{" "}
        <a
          href="https://github.com/atis02"
          style={{
            color: "#fff",
            textDecoration: "underline",
          }}
        >
          Atamyrat Dev
        </a>
      </Typography>
    </Box>
  );
};

export default Footer;
