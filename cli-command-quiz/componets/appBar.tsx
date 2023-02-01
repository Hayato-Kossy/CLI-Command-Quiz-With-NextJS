import * as React from "react";
import { Button, Box, AppBar, Toolbar, IconButton, MenuItem } from "@mui/material";
import { GitHub, Twitter, Instagram, Menu, Home } from '@mui/icons-material';
import { useRouter } from "next/router";
import { HomeButton } from "./homeButton";
import 'bootstrap/dist/css/bootstrap.min.css';

export const HomeAppBar = () => {
    return (
        <div style={{ flexGrow: 1}}>
        <AppBar position="relative" style={{backgroundColor:"#565565"}}>
          <Toolbar>
            <IconButton
            //   className={classes.menuButton}
            //   color="success"
              aria-label="Menu"
            >
              <Menu fontSize="large"/>
            </IconButton>
            <strong>ファイルディレクトリクイズ一覧</strong>
            <div style={{ flexGrow: 1 }}></div>
            <HomeButton></HomeButton>
          </Toolbar>
        </AppBar>
      </div>
    )
}