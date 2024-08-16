import {
  Box,
  Menu,
  MenuItem,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Aos from "aos";

export default function Language() {
  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(
    localStorage.getItem("lng")
  );
  const [anchorEl, setAnchorEl] = useState(false);
  const open = Boolean(anchorEl);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    i18n.changeLanguage(selectedLanguage);
  }, [selectedLanguage, i18n]);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLanguageChange = (lng) => {
    localStorage.setItem("lng", lng);
    setSelectedLanguage(lng);
    handleClose();
  };

  const lang =
    i18n.language === "tm"
      ? {
          color: "#fff",
          backgroundColor: "#666666",
          "&:hover": { backgroundColor: "#666666" },
        }
      : {};
  const lang2 =
    i18n.language === "ru"
      ? {
          color: "#fff",
          background: "linear-gradient(to right,  #d7c248, #e54b29)",

          "&:hover": { backgroundColor: "#666666" },
        }
      : {};
  const lang3 =
    i18n.language === "en"
      ? {
          color: "#fff",
          background: "linear-gradient(to right,  #d7c248, #e54b29)",

          "&:hover": { backgroundColor: "#666666" },
        }
      : {};
  Aos.init({
    duration: 1500,
    offset: 0,
  });

  return (
    <Box>
      <Stack
        cursor="pointer"
        variant="text"
        direction="row"
        alignItems="center"
        onClick={handleClick}
        sx={{
          cursor: "pointer",
          color: "#000",
          gap: { lg: "5px", md: "3px", xs: 0 },
        }}
        minHeight="32px"
      >
        {localStorage.getItem("lng") === "ru" ? (
          <Stack direction="row" spacing={1}>
            <Typography
              fontFamily="Montserrat"
              textTransform="capitalize"
              fontWeight={500}
              sx={{ ...(isMobile ? { fontSize: 15 } : { fontSize: 16 }) }}
              color="#fff"
            >
              Рус
            </Typography>
          </Stack>
        ) : (
          <Stack direction="row" spacing={1}>
            <Typography
              fontWeight={500}
              color="#fff"
              fontFamily="Montserrat"
              textTransform="capitalize"
            >
              Eng
            </Typography>
          </Stack>
        )}
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
        sx={{ zIndex: "100000", position: "fixed" }}
        MenuListProps={{
          "aris-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={() => handleLanguageChange("ru")} sx={lang2}>
          <Stack direction="row" spacing={1}>
            <Typography>Русский</Typography>
          </Stack>
        </MenuItem>
        <MenuItem sx={lang3} onClick={() => handleLanguageChange("en")}>
          <Stack direction="row" spacing={1}>
            <Typography>English</Typography>
          </Stack>
        </MenuItem>
      </Menu>
    </Box>
  );
}
