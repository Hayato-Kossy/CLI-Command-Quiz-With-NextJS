import * as React from "react";
import { Button, Box, AppBar, Toolbar, IconButton, MenuItem } from "@mui/material";
import { GitHub, Twitter, Instagram, Menu, Home } from '@mui/icons-material';
import { useRouter } from "next/router";
import { HomeButton } from "./homeButton";
import MyPageButton from "./myPageButton";
import 'bootstrap/dist/css/bootstrap.min.css';

export const HomeAppBar = () => {
    return (
        <div style={{ flexGrow: 1}}>
        <AppBar position="relative" style={{backgroundColor:"#565565"}}>
          <Toolbar>
            <MyPageButton></MyPageButton>

            <div style={{ flexGrow: 1 }}></div>
            <HomeButton></HomeButton>
          </Toolbar>
        </AppBar>
      </div>
    )
}