import * as React from "react";
import { Button, Box, AppBar, Toolbar, IconButton, MenuItem } from "@mui/material";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from '@mui/icons-material';

export const HomeButton = () => {
    const router = useRouter()
    const returnToHome = () => {
        router.push("/")
    }
    return (
                <Button                   
                  variant='contained' 
                  size='large'
                  color='success' 
                  sx={{ 
                      typography: 'h5'
                  }}
                  onClick={returnToHome}><Home/>Home
                </Button>
    )
}