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
      backgroundColor="#1E1E1E"
      p={{
        lg: "10px 185px 0 185px",
        md: "5px 100px 0 100px",
        xs: "4px 20px 0 20px",
      }}
      sx={{
        ...(scrolled
          ? { boxShadow: "0px 5px 5px 0px rgba(0,0,0,0.75)" }
          : { boxShadow: "0" }),
      }}
    >
      <Stack
        width={{ lg: 86, md: 80, sm: 70, xs: 50 }}
        height={{ lg: 80, md: 75, sm: 70, xs: 55 }}
      >
        <a href="/">
          <img
            src="/images/Logo.png"
            style={{ width: "100%", height: "100%", pt: 5 }}
            alt=""
          />
        </a>
      </Stack>
      <Stack
        direction="row"
        alignItems="center"
        sx={{
          ...(isMobile ? { display: "none" } : { display: "flex" }),
          gap: "30px",
        }}
      >
        <a
          className="nav-links2"
          style={{ color: "#fff" }}
          href="#aboutCompany"
        >
          {t("aboutCompany")}
        </a>
        <Box sx={{ minWidth: 90 }}>
          <Stack
            cursor="pointer"
            variant="text"
            direction="row"
            alignItems="center"
            justifyContent="center"
            onClick={handleClick}
            sx={{
              cursor: "pointer",
              color: "#000",
              gap: { lg: "2px", md: "3px", xs: 0 },
            }}
            minHeight="32px"
          >
            <Typography
              color="#fff"
              fontFamily="Montserrat"
              fontWeight={500}
              fontSize={18}
            >
              {t("pages")}
            </Typography>
            <KeyboardArrowDownIcon
              sx={{
                color: "#fff",
                ...(open ? { transform: "rotate(180deg)" } : ""),
                width: { lg: 24, md: 20, xs: 18 },
                height: { lg: 24, md: 20, xs: 18 },
              }}
            />
          </Stack>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            sx={{ zIndex: "100000", position: "fixed", width: "100%" }}
            MenuListProps={{
              "aris-labelledby": "basic-button",
              sx: {
                backgroundColor: "#2F2F2F",
                "&& .Mui-selected": {
                  backgroundColor: "#666666",
                  zIndex: "10000",
                },
              },
            }}
          >
            <MenuItem
              sx={{
                "&:hover": { backgroundColor: "#666666" },
                width: 175,
              }}
              value="Преимущества"
            >
              <a className="nav-links" href="#Advantages">
                {t("advantages")}
              </a>
            </MenuItem>
            <MenuItem
              sx={{
                "&:hover": { backgroundColor: "#666666" },
              }}
              value="Миссия и цели"
            >
              <a className="nav-links" href="#Goals">
                {t("goals")}
              </a>
            </MenuItem>
            <MenuItem
              sx={{
                "&:hover": { backgroundColor: "#666666" },
              }}
              value="Услуги компании"
            >
              <a className="nav-links" href="#Services">
                {t("services")}
              </a>
            </MenuItem>
            <MenuItem
              sx={{
                "&:hover": { backgroundColor: "#666666" },
              }}
              value="Лицензии"
            >
              <a className="nav-links" href="#Licences">
                {t("licences")}
              </a>
            </MenuItem>
            <MenuItem
              sx={{
                "&:hover": { backgroundColor: "#666666" },
              }}
              value="Наши работы"
            >
              <a className="nav-links" href="#OurWorks">
                {t("ourWorks")}
              </a>
            </MenuItem>
          </Menu>
        </Box>
        <a className="nav-links2" style={{ color: "#fff" }} href="#Footer">
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
            width: "100%",
          },
        }}
      >
        <Box
          className="mobile-menu"
          sx={{
            bg: "#fff",
            height: "100%",
            mt: "220px",
            padding: "16px 0",
          }}
        >
          <Stack
            spacing={2}
            direction="column"
            height="35px"
            alignItems="center"
          >
            <Button sx={{ color: "currentColor" }} onClick={toggleMobileMenu}>
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
              <a className="nav-links2" href="#aboutCompany">
                {t("aboutCompany")}
              </a>
              <a className="nav-links2" href="#Advantages">
                {t("advantages")}
              </a>
              <a className="nav-links2" href="#Goals">
                {" "}
                {t("goals")}
              </a>
              <a className="nav-links2" href="#Services">
                {" "}
                {t("services")}
              </a>
              <a className="nav-links2" href="#Licences">
                {" "}
                {t("licences")}
              </a>
              <a className="nav-links2" href="#OurWorks">
                {" "}
                {t("ourWorks")}
              </a>
              <a className="nav-links2" href="#Footer">
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
