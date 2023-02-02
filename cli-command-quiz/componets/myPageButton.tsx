import React from 'react'
import { Button } from '@mui/material'
import { useRouter } from 'next/router';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';

function MyPageButton() {
    const router = useRouter()
    const returnToMyPage = () => {
        router.push(`/myPage/${localStorage.getItem('userId')}`)
    }
    return (
        <Button                   
        variant='contained' 
        size='large'
        color='success' 
        sx={{ 
            typography: 'h5'
        }}
        onClick={returnToMyPage}><KeyboardReturnIcon/>MyPage
    </Button>  )
}

export default MyPageButton