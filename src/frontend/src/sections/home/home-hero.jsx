import { useTheme } from '@mui/material/styles';
import {
  Box,
  Stack,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardActionArea,
  CardContent,
} from '@mui/material';
import { useRouter } from 'src/routes/hooks';
import { paths } from 'src/routes/paths';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

import { m } from 'framer-motion';

import { Icon } from '@iconify/react';

import { HeroBackground } from './components/hero-background';

export function HomeHero({ sx, ...other }) {
  const theme = useTheme();
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
        }}
      >

        <Box sx={{ mt: 6, mb: 4 }}>
          <AnimatedButton onClick={() => router.push(paths.linkTree.create)} big />
        </Box>


        <FeaturesCarousel />


        <SocialLinks />
      </Container>

      <HeroBackground sx={{ zIndex: 1 }} />
    </Stack>
  );
}


function FeaturesCarousel() {
  const theme = useTheme();

  const features = [
    { title: 'Effortless Management', description: 'Create and manage all your links in one place – efficiently and intuitively.' },
    { title: 'Customize Your Design', description: 'Choose your own colors, layouts, and backgrounds to showcase your style.' },
    { title: 'Analytics & Insights', description: 'Track clicks, visitor numbers, and engagement in real time.' },
    { title: 'Social Media Integration', description: 'Seamlessly connect your Instagram, TikTok, Twitter, and other platforms.' },
    { title: 'Security & Privacy', description: 'All data is encrypted – your privacy remains protected.' },
  ];

  return (
    <Container sx={{ my: 5, position: 'relative' }}>
      <Typography variant="h4" align="center" gutterBottom>
       functions:
      </Typography>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        style={{ maxWidth: '800px', margin: 'auto' }}
        className="custom-swiper"
      >
        {features.map((feature, index) => (
          <SwiperSlide key={index}>
            <Card
              sx={{
                p: 2,
                borderRadius: 2,
                textAlign: 'center',
                boxShadow: 2,
                maxWidth: 500,
                height: 120,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                mx: 'auto',
                border: `2px solid ${theme.palette.mode === 'dark' ? 'white' : 'black'}`, // Dynamische Umrandung
              }}
            >
              <CardContent sx={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <Typography variant="h6">{feature.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>

      <Box display="flex" justifyContent="center" sx={{ mt: 2, position: 'relative', zIndex: 10 }}>
        <Box className="swiper-pagination" />
      </Box>
    </Container>
  );
}


function AnimatedButton({ onClick, big = false }) {
  return (
    <m.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <Button
        onClick={onClick}
        variant="contained"
        sx={{
          fontSize: big ? '1.8rem' : '1rem',
          padding: big ? '20px 40px' : '10px 20px',
          borderRadius: '8px',
          fontWeight: 'bold',
          backgroundColor: '#1976d2 !important',
          color: 'white !important',
          boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
          '&:hover': {
            backgroundColor: '#1565c0 !important',
          },
        }}
      >
       get linked!
      </Button>
    </m.div>
  );
}




const socialLinks = [
  { name: 'Instagram', url: 'https://instagram.com', icon: "fa6-brands:instagram" },
  { name: 'TikTok', url: 'https://www.tiktok.com', icon: "fa6-brands:tiktok" },
  { name: 'Twitter', url: 'https://twitter.com', icon: "fa6-brands:twitter" },
  { name: 'Pinterest', url: 'https://www.pinterest.com', icon: "fa6-brands:pinterest" },
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: "fa6-brands:linkedin" },
  { name: 'Xing', url: 'https://www.xing.com', icon: "fa6-brands:xing" },
  { name: 'YouTube', url: 'https://www.youtube.com', icon: "fa6-brands:youtube" },
];

function SocialLinks() {
  const theme = useTheme(); // Theme Hook für Light/Dark Mode

  return (
    <Box sx={{ textAlign: 'center', mt: 6 }}>
      <Typography
        variant="h4"
        sx={{
          mb: 3,
          fontWeight: 'bold',
          color: theme.palette.mode === 'dark' ? 'white' : 'black', // Dynamische Farbe
          letterSpacing: 1,
          fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2rem' },
        }}
      >
        Get your links:
      </Typography>

      <Grid container spacing={2} justifyContent="center" sx={{ position: 'relative', zIndex: 10, pointerEvents: 'auto' }}>
        {socialLinks.map((link) => (
          <Grid item key={link.name}>
            <Card sx={{ backgroundColor: '#181818', borderRadius: 2 }}>
              <CardActionArea onClick={() => window.open(link.url, '_blank')}>
                <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Icon icon={link.icon} width="28" height="28" color="white" />
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


