import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import GoogleIcon from '@mui/icons-material/Google';
// import { signOut } from 'firebase/auth';
// import { auth, signIn } from '../src/firebase';
import { useRouter } from 'next/router';
import { Layout } from '../componets/Layout';

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout title='Title'>
      <Container maxWidth='lg'>
        <Box
          height='50vh'
          sx={{
            my: 4,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box sx={{ 
            typography: 'h1', 
            fontWeight: 900,
          }}
          style={{
            color:'#28a745',
          }}
          >
            {/* フォントの適用に失敗 */}
            <a className='font-logo'>CLIコマンドクイズ</a>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Button 
            sx={ { 
              marginTop: 10, 
              typography: 'h5'
            }}
            variant='outlined' 
            size='large'
            color='success'
            >
              ファイルディレクトリクイズ
            </Button>
            <Button 
            sx={ { 
              marginTop: 5, 
              typography: 'h5'
            }}
            variant='outlined' 
            size='large'
            color='success'
            >
              フリーモード
            </Button>
          </Box>
          {/* <Box maxWidth='sm' sx={{ py: 2 }}>
            {!isAuth ? (
              <Button onClick={logIn} variant='outlined' size='large'>
                <GoogleIcon />
                Login/Signin
              </Button>
            ) : (
              <Button onClick={logOut} variant='outlined' size='large'>
                <GoogleIcon />
                Logout
              </Button>
            )}
          </Box> */}
        </Box>
      </Container>
    </Layout>  
  )
}
