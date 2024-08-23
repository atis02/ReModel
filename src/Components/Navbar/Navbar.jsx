import React, { useEffect, useState } from "react";
import {
  MenuItem,
  Box,
  Button,
  Stack,
  Typography,
  IconButton,
  Drawer,
  useMediaQuery,
  useTheme,
  Menu,
} from "@mui/material";
import Language from "../../Components/Language/Language";
import { useTranslation } from "react-i18next";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(false);
  const open = Boolean(anchorEl);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const { t } = useTranslation();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      position="sticky"
      top={0}
      zIndex="1000"
      backgroundColor="transparent"
      p={{
        lg: "10px 185px 0 185px",
        md: "5px 100px 0 100px",
        xs: "4px 20px 10px 20px",
      }}
      sx={{
        ...(scrolled
          ? {
              boxShadow: "0px 5px 5px 0px rgba(0,0,0,0.75)",
              backdropFilter: "blur(10px)",
              opacity: "95%",
              backgroundColor: "#1E1E1E",
            }
          : {
              boxShadow: "0",
              backgroundColor: "transparent",
            }),
      }}
    >
      <Stack
        width={{ lg: 70, md: 80, sm: 70, xs: 55 }}
        height={{ lg: 80, md: 75, sm: 70, xs: 55 }}
      >
        <a href="/">
          <img
            src="/images/ReModel.jpg"
            style={{ width: "100%", height: "100%", pt: 5 }}
            alt="LOGO"
          />
        </a>
      </Stack>
      <Stack
        direction="row"
        alignItems="center"
        sx={{
          ...(isMobile ? { display: "none" } : { display: "flex" }),
          gap: "30px",
          // pr: "20px",
        }}
      >
        <a className="nav-links2" href="#aboutCompany">
          {t("aboutCompany")}
        </a>
        <a className="nav-links2" href="#Advantages">
          {t("advantagesNav")}
        </a>

        <a className="nav-links2" href="#pokaz">
          Показы
        </a>
        <a className="nav-links2" href="#Models">
          {/* {t("ourWorks")} */}
          Модели
        </a>
        <a className="nav-links2" href="#Goals">
          Программа обучения
        </a>
        <a className="nav-links2" href="#Footer">
          {t("contacts")}
        </a>
        <Language />
      </Stack>
      <Stack
        direction="row"
        spacing={1}
        alignItems="center"
        justifyContent="center"
        sx={{ ...(isMobile ? { display: "flex" } : { display: "none" }) }}
      >
        <IconButton
          onClick={toggleMobileMenu}
          sx={{
            width: 24,
            height: 24,
            p: 0,
          }}
        >
          <MenuIcon sx={{ color: "#fff" }} />
        </IconButton>

        <Language />
      </Stack>
      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={toggleMobileMenu}
        sx={{
          "& .MuiDrawer-paper": {
            width: "60%",
            backgroundColor: "transparent",
            backdropFilter: "blur(5px)",
          },
        }}
      >
        <Box
          className="mobile-menu"
          sx={{
            bg: "#fff",
            height: "100%",
            mt: "150px",
            padding: "16px 0",
          }}
        >
          <Stack
            spacing={2}
            direction="column"
            height="35px"
            alignItems="center"
          >
            <Button sx={{ color: "#fff" }} onClick={toggleMobileMenu}>
              <svg
                fillRule="evenodd"
                viewBox="64 64 896 896"
                focusable="false"
                data-icon="close"
                width="1em"
                height="1em"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z"></path>
              </svg>
            </Button>
            <Stack direction="column" alignItems="center" spacing={2}>
              <a
                className="nav-links3"
                onClick={() => setMobileMenuOpen(false)}
                href="#aboutCompany"
              >
                {t("aboutCompany")}
              </a>
              <a
                className="nav-links3"
                onClick={() => setMobileMenuOpen(false)}
                href="#Advantages"
              >
                {t("advantages")}
              </a>

              <a
                className="nav-links3"
                onClick={() => setMobileMenuOpen(false)}
                href="#pokaz"
              >
                Показы
              </a>
              <a
                className="nav-links3"
                onClick={() => setMobileMenuOpen(false)}
                href="#Models"
              >
                {/* {t("ourWorks")} */}
                Модели
              </a>
              <a
                className="nav-links3"
                onClick={() => setMobileMenuOpen(false)}
                href="#Goals"
              >
                Программа обучения
              </a>
              <a
                className="nav-links3"
                onClick={() => setMobileMenuOpen(false)}
                href="#Footer"
              >
                {t("contacts")}
              </a>
            </Stack>
          </Stack>
        </Box>
      </Drawer>
    </Stack>
  );
};

export default Navbar;
