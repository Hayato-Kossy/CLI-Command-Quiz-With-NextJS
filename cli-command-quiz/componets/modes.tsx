import React from "react";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import Container from '@mui/material/Container';
import PrevStudyReport from "./prevStudyReport";
const Modes = () => {
  const router = useRouter()
  const goToFreeMode = () => {
    router.push(`/freeMode/${localStorage.getItem('userId')}`)
  }
    return (
                <Box
          height='80vh'
          sx={{
            my: 4,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'black'
          }}
        >
          <PrevStudyReport></PrevStudyReport>
        <Button 
        sx={ { 
          marginTop: 10, 
          typography: 'h5'
        }}
        variant='outlined' 
        size='large'
        color='success'
        >
          <a style={{fontFamily:"Impact"}}>ファイルディレクトリクイズ</a>
        </Button>
        <Button 
        sx={ { 
          marginTop: 5, 
          typography: 'h5'
        }}
        variant='outlined' 
        size='large'
        color='success'
        onClick={goToFreeMode}
        >
          フリーモード
        </Button>
      </Box>
    )
}

export default Modes