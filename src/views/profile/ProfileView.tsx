import React, { FC } from 'react';
import Posts from '@/components/Post/Posts';
import { Alert, Box, CircularProgress, Grid, useTheme } from '@mui/material';
import { menuList } from '@/data/configMenu/configMenu';
import Header from '@/components/Header';
import Menu from '@/components/menu/Menu';
import News from '@/components/news/News';
import UnderLine from '@/common/UnderLine';
import WhoToFollow from '@/components/whoToFollow/WhoToFollow';
import { useGetTweetUserQuery } from '@/services/Query/timeline/tweetTimeline.query';

const ProfileView: FC = () => {
  const theme = useTheme();
  const { data, isLoading, isError } = useGetTweetUserQuery();

  return (
    <Grid
      container
      gap={2}
      sx={{ justifyContent: 'center', flexWrap: 'nowrap' }}
    >
      <Grid item sx={{ width: { md: '75px', lg: '200px' } }}>
        <Menu menuList={menuList} />
      </Grid>
      <Grid
        item
        sx={{
          width: { xs: '300px', sm: '600px', md: '600px' },
          borderLeft: `1px solid ${theme.palette.border?.main}`,
          borderRight: `1px solid ${theme.palette.border?.main}`,
        }}
      >
        <Header title="Profile" />
        <UnderLine />

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {isLoading && <CircularProgress />}
          {isError && <Alert severity="error">Ошибка загрузки постов</Alert>}
        </Box>

        <Posts posts={data} />
      </Grid>
      <Grid
        item
        sx={{
          display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex' },
          flexDirection: 'column',
          gap: '30px',
          width: '350px',
        }}
      >
        <News />
        <WhoToFollow />
      </Grid>
    </Grid>
  );
};

export default ProfileView;