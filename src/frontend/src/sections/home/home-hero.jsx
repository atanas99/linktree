import {useEffect, useState} from 'react';
import {useTheme} from '@mui/material/styles';
import {Box, Button, Card, CardActionArea, CardContent, Container, Grid, Stack, Typography} from '@mui/material';
import {useRouter} from 'src/routes/hooks';
import {paths} from 'src/routes/paths';

import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import {Autoplay, Pagination} from 'swiper/modules';

import {m} from 'framer-motion';

import {HeroBackground} from './components/hero-background';
import {Iconify} from '../../components/iconify';
import Link from '@mui/material/Link';

import axiosInstance, {endpoints} from 'src/utils/axios';

export function HomeHero({sx, ...other}) {
  const router = useRouter();

  return (
    <Stack
      component="section"
      sx={{
        overflow: 'hidden',
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...sx,
      }}
      {...other}
    >
      <Container
        sx={{
          py: 3,
          gap: 5,
          zIndex: 9,
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          textAlign: 'center',
          position: 'relative',
        }}
      >
        <Box sx={{mt: 6, mb: 4}}>
          <AnimatedButton onClick={() => router.push(paths.linkTree.root)} big/>

          <Typography variant="body1" sx={{mt: 3, fontSize: '1.25rem'}}>
            Check our new{' '}
            <Link
              sx={{color: 'green', cursor: 'pointer', fontWeight: 'bold'}}
              underline="hover"
              onClick={() => router.push(paths.products.edit)}
            >
              product page!
            </Link>
          </Typography>

          <Typography variant="body1" sx={{mt: 1, fontSize: '1.25rem'}}>
            <AmountOfLinktrees/>

          </Typography>
        </Box>

        <FeaturesCarousel/>

        <SocialLinks/>

      </Container>

      <HeroBackground sx={{zIndex: 1}}/>
    </Stack>
  );
}

function AmountOfLinktrees() {
  const [amountOfUsers, setAmountOfUsers] = useState(null);

  useEffect(() => {
    axiosInstance
      .get(endpoints.users.getAmountOfUsers)
      .then((response) => {
        setAmountOfUsers(response.data);
      })
      .catch((error) => {
        console.error('loading amount of linktrees failed:', error);
      });
  }, []);

  return (
    <>
      <Typography variant="body1" sx={{mt: 1, fontSize: '1rem', fontWeight: 'bold'}}>
        {amountOfUsers !== null ? amountOfUsers : 'Loading...'}{' '}
        <Typography component="span" sx={{fontWeight: 'normal'}}>
          linktrees created
        </Typography>
      </Typography>
    </>
  );
}

function FeaturesCarousel() {
  const theme = useTheme();
  const router = useRouter();

  const features = [
    { title: 'Effortless Management', description: 'Create and manage all your links in one place – efficiently and intuitively.' },
    { title: 'Customize Your Design', description: 'Choose your own colors, layouts, and backgrounds to showcase your style.' },
    { title: 'Analytics & Insights', description: 'Track clicks, visitor numbers, and engagement in real time.' },
    { title: 'Social Media Integration', description: 'Seamlessly connect your Instagram, TikTok, Twitter, and other platforms.' },
    { title: 'Security & Privacy', description: 'All data is encrypted – your privacy remains protected.' },
    { title: 'Dedicated Product Page', description: 'Create a unique page for your products and increase engagement.' },
  ];

  return (
    <Container sx={{ my: 5, position: 'relative' }}>
      <Typography variant="h4" align="center" gutterBottom>
        functions:
      </Typography>

      <Swiper modules={[Pagination, Autoplay]} spaceBetween={20} slidesPerView={1} pagination={{ clickable: true }} autoplay={{ delay: 3000 }} style={{ maxWidth: '800px', margin: 'auto' }} className="custom-swiper">
        {features.map((feature, index) => (
          <SwiperSlide key={index}>
            <Card
              sx={{
                p: 2,
                borderRadius: 2,
                textAlign: 'center',
                boxShadow: 2,
                maxWidth: 500,
                height: 140,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                mx: 'auto',
                border: `2px solid ${theme.palette.mode === 'dark' ? 'white' : 'black'}`,
              }}
            >
              <CardContent sx={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <Typography variant="h6">{feature.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {feature.description}
                </Typography>

                {feature.title === 'Dedicated Product Page' && (
                  <Button
                    variant="contained"
                    sx={{
                      mt: 2,
                      fontWeight: 'bold',
                      backgroundColor: 'green',
                      color: 'white',
                      '&:hover': { backgroundColor: 'darkgreen' },
                    }}
                    onClick={() => router.push(paths.products.edit)}
                  >
                    Visit Product Page
                  </Button>
                )}
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}

export function SocialLinks() {
  const theme = useTheme();

  return (
    <Box sx={{textAlign: 'center', mt: 6}}>
      <Typography
        variant="h4"
        sx={{
          mb: 3,
          fontWeight: 'bold',
          color: theme.palette.mode === 'dark' ? 'white' : 'black',
          letterSpacing: 1,
          fontSize: {xs: '1.5rem', sm: '1.8rem', md: '2rem'},
        }}
      >
        Get your links:
      </Typography>

      <Grid container spacing={2} justifyContent="center"
            sx={{position: 'relative', zIndex: 10, pointerEvents: 'auto'}}>
        {socialLinks.map((link) => (
          <Grid item key={link.name}>
            <Card sx={{backgroundColor: '#181818', borderRadius: 2}}>
              <CardActionArea onClick={() => window.open(link.url, '_blank')}>
                <CardContent sx={{display: 'flex', alignItems: 'center', gap: 2}}>
                  <Iconify icon={link.icon} width="28" height="28" color="white"/>
                  <Typography color="white">{link.name}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

function AnimatedButton({onClick, big = false}) {
  return (
    <m.div whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
      <Button
        onClick={onClick}
        variant="contained"
        sx={{
          fontSize: big ? '1.8rem' : '1rem',
          padding: big ? '20px 40px' : '10px 20px',
          borderRadius: '8px',
          fontWeight: 'bold',
          boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
        }}
      >
        get linked!
      </Button>
    </m.div>
  );
}

const socialLinks = [
  {name: 'Instagram', url: 'https://instagram.com', icon: 'fa6-brands:instagram'},
  {name: 'TikTok', url: 'https://www.tiktok.com', icon: 'fa6-brands:tiktok'},
  {name: 'X', url: 'https://twitter.com', icon: 'fa6-brands:x-twitter'},
  {name: 'Pinterest', url: 'https://www.pinterest.com', icon: 'fa6-brands:pinterest'},
  {name: 'LinkedIn', url: 'https://linkedin.com', icon: 'fa6-brands:linkedin'},
  {name: 'Xing', url: 'https://www.xing.com', icon: 'fa6-brands:xing'},
  {name: 'YouTube', url: 'https://www.youtube.com', icon: 'fa6-brands:youtube'},
];

