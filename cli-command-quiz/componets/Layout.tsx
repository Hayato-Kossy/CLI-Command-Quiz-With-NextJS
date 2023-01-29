import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import Head from 'next/head';
import React, { FC, ReactNode, useState } from 'react';
// import Copyright from '../src/Copyright';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArchiveIcon from '@mui/icons-material/Archive';
import { GitHub, Twitter } from '@mui/icons-material';

//ページのタイトルとchildren
type Props = {
  title: string;
  children: ReactNode;
};
//全てのページで共通して使えるレイアウトを作成
//デフォルトのタイトルは'Home'に設定
export const Layout: FC<Props> = ({ children, title = '' }) => {
  const [value, setValue] = useState(0);

  return (
    <div className='flex min-h-screen flex-col items-center justify-center'>
      <Head>
        <title>{title}</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>{children}</main>
      <Paper
        sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label='Twitter' icon={<Twitter />} />
          <BottomNavigationAction label='Github' icon={<GitHub />} />
          <BottomNavigationAction label='logout' icon={<ArchiveIcon />} />
        </BottomNavigation>
      </Paper>
    </div>
  );
};