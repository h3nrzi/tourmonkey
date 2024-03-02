import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography/Typography';

import TourCard from './components/TourCard';
import cities from './data.json';

const HomePage = () => {
  return (
    <Container sx={{ my: '50px' }}>
      {cities.map((city) => (
        <React.Fragment key={city.id}>
          <Typography variant="h4" component="h2" mt={5} mb={3}>
            تورهای برتر {city.name}
          </Typography>

          <Grid container spacing={5}>
            {city.tours.map((tour, i) => (
              <TourCard tour={tour} key={i} />
            ))}
          </Grid>
        </React.Fragment>
      ))}
    </Container>
  );
};

export default HomePage;
