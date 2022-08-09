import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { AppBar, Box, Divider, Drawer, List, Toolbar } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Main />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
