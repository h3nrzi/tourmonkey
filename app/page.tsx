import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import TourCard from './components/TourCard';

const HomePage = () => {
  return (
    <Container>
      <Grid container spacing={5}>
        <TourCard />
        <TourCard />
        <TourCard />
        <TourCard />
      </Grid>
    </Container>
  );
};

export default HomePage;
