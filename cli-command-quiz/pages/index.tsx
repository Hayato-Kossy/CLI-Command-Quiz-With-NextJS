import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import GoogleIcon from '@mui/icons-material/Google';
import { signOut } from 'firebase/auth';
import { auth, signIn } from '../src/firebase';
import { useRouter } from 'next/router';
import { Layout } from '../componets/Layout';

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter();

  const [isAuth, setIsAuth] = React.useState(false);

  const logIn = async () => {
    await signIn();
    // router.push(`/mypage/${localStorage.getItem('userId')}`);
    setIsAuth(true);
  };
  const logOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
    });
  };
  return (
    <Layout title='Title'>
      <Container maxWidth='lg'>
        <Box
          height='80vh'
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
            fontWeight: 400,
          }}
          style={{
            color:'#28a745',
          }}
          >
            <a style={{fontFamily:"Arial Black"}}>CLI Command Quiz</a>
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
            >
              フリーモード
            </Button>
          </Box>
          <Box maxWidth='sm' sx={{ marginTop: 5, }}>
            {!isAuth ? (
              <Button onClick={logIn} variant='outlined' size='large'>
                <GoogleIcon />
                Login
              </Button>
            ) : (
              <Button onClick={logOut} variant='outlined' size='large'>
                <GoogleIcon />
                Logout
              </Button>
            )}
          </Box>
        </Box>
      </Container>
    </Layout>  
  )
}
