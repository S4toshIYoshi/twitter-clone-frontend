import Head from 'next/head';
import LogoutView from '@/views/logout/LogoutView';
import { Container } from '@mui/material';

const Logout = () => {
  return (
    <>
      <Head>
        <title>Join in to Twitter</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <LogoutView />
      </Container>
    </>
  );
};

export default Logout;
