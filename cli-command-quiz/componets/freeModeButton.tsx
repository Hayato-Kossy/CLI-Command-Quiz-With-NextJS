import React from 'react'
import { Button } from '@mui/material'
import { useRouter } from 'next/router';

function FreeModeButton() {
    const router = useRouter()
    const goToFreeMode = () => {
      router.push(`/freeMode/${localStorage.getItem('userId')}`)
    }
    return (
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
    )
}

export default FreeModeButton