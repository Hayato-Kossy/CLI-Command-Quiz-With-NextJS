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
    router.push(`/myPage/${localStorage.getItem('userId')}`);
    setIsAuth(true);
  };
  const logOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
    });
  };

  const loginAsGuest = () => {
    const guest = "guest"
    localStorage.setItem("userName", guest);
    localStorage.setItem("userId", guest);
    router.push(`/myPage/${localStorage.getItem('userId')}`);
  }

  return (
    <Layout title='Title'>
      <Container maxWidth='lg' sx={{color:"black"}}>
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
          <Box maxWidth='sm' sx={{ marginTop: 5, }}>
            {!isAuth ? (
              <Button 
              onClick={logIn} 
              variant='contained' 
              size='large'
              color='primary'>
                <GoogleIcon />
                Login
              </Button>
            ) : (
              <Button 
              onClick={logOut} 
              variant='contained' 
              size='large'
              color='primary'>
                <GoogleIcon />
                Logout
              </Button>
            )}
          </Box>
          <Button 
            onClick={loginAsGuest} 
            variant='contained' 
            size='large'
            color='primary'
            sx={{ marginTop: 5 }}>
              Guest
          </Button>
        </Box>
      </Container>
    </Layout>  
  )
}
