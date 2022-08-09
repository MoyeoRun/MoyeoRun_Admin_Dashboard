import { Box } from "@mui/material";
import { FC } from "react";
import { Outlet } from "react-router-dom";
import Appbar from "../components/Appbar";

const MainLayout: FC = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Appbar />
      <Outlet />
    </Box>
  );
};

export default MainLayout;
