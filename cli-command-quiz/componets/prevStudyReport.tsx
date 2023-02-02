import React from 'react'
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import Typography from '@mui/material';
function PrevStudyReport() {
  return (
        <Box
        sx={{
            display: 'flex',
            // flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'black',
            color: 'success'
          }}
        >   
        <Button 
        sx={ { 
            marginTop: 5, 
            typography: 'h5'
          }}
          variant='outlined' 
          size='large'
          color='success'> 
          前回の学習記録 
          </Button>     
        </Box>
)
}

export default PrevStudyReport