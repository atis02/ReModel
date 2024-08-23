import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import {
  Container,
  Box,
  Stack,
  CircularProgress,
  Typography,
} from "@mui/material";
import About from "./Pages/About";
import Advantages from "./Pages/Advantages";
import Missions from "./Pages/Missions";
import Services from "./Pages/Services";
import Licence from "./Pages/Licences";
import Models from "./Pages/OurWorks";
import Footer from "./Pages/Footer";
import OutWorksVideo from "./Pages/OurWorksVideo";
import Parallax from "./Pages/Parallax";
import Navbar from "./Components/Navbar/Navbar";
import { Suspense, useEffect, useState } from "react";
function App() {
  const [loader, setLoader] = useState(false);
  AOS.init({
    duration: 1800,
    offset: 0,
  });
  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {loader ? (
        <Stack
          height="100vh"
          justifyContent="center"
          alignItems="center"
          backgroundColor="#1E1E1E"
          color="#fff"
        >
          <CircularProgress size={80} />
          <Typography fontFamily="Montserrat" mt={2}>
            Loading...
          </Typography>
        </Stack>
      ) : (
        <Suspense fallback={<CircularProgress />}>
          <Box
            sx={{
              background: "#1E1E1E",
            }}
            // sx={{
            //   backgroundImage: "url('/images/bg.jpg')",
            //   backgroundRepeat: "no-repeat",
            //   backgroundSize: "contain",
            // }}
          >
            <Box
              sx={{
                backgroundImage: "url('/images/AllHeight.png')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
              }}
            >
              <Navbar />
              {/* <Stack className="videoContainer">
                <video autoPlay loop muted className="video">
                  <source src="/public/ModelBg.mp4" type="video/mp4" />
                </video>
              </Stack> */}
              <Home />
              <About />
              <Advantages />
              <Missions />
              <Services />
              <Models />
              <OutWorksVideo />
              {/* <Parallax /> */}
              <Footer />
            </Box>
          </Box>
        </Suspense>
      )}
    </>
  );
}

export default App;
