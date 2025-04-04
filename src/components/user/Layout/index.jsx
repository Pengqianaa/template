import React, { Suspense } from "react";
import { Box, Container } from "@mui/material";
import Header from "../../components/user/Header";
import Footer from "../../components/admin/Footer";
import LoadingSpinner from "../../components/common/LoadingSpinner";

const UserLayout = ({ children }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header />
      <Container component="main" sx={{ flexGrow: 1, py: 3 }}>
        <Suspense fallback={<LoadingSpinner />}>{children}</Suspense>
      </Container>
      <Footer />
    </Box>
  );
};

export default UserLayout;