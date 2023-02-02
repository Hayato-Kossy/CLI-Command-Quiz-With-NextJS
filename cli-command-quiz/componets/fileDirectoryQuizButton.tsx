import React from 'react'
import { Button } from '@mui/material'
import { useRouter } from 'next/router';

function FileDirectoryQuizButton() {
    const router = useRouter()
    const goToFileDirectoryQuiz = () => {
      router.push(`/fileDirectoryQuiz/${localStorage.getItem('userId')}`)
    }
    return (
        <Button 
        sx={ { 
        marginTop: 10, 
        typography: 'h5'
        }}
        variant='outlined' 
        size='large'
        color='success'
        onClick={goToFileDirectoryQuiz}
        >
        <a style={{fontFamily:"Impact"}}>ファイルディレクトリクイズ</a>
        </Button>  
    )
}

export default FileDirectoryQuizButton