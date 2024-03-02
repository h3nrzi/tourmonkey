import { AccessTime } from '@mui/icons-material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

interface Tour {
  id: number;
  name: string;
  duration: number;
  rating: number;
  numberOfReviews: number;
  price: number;
  image: string;
}
interface Props {
  tour: Tour;
}

const TourCard = ({ tour }: Props) => {
  return (
    <Grid item xs={3}>
      <Paper elevation={3}>
        <img className="w-full h-20 object-cover" src={tour.image} alt="tour image" />

        <Box paddingX={1}>
          <Typography variant="subtitle1" component="h2">
            {tour.name}
          </Typography>

          <Stack direction="row" alignItems="center" gap={1}>
            <AccessTime sx={{ width: 15 }} />

            <Typography variant="body2" component="p">
              {tour.duration} ساعت
            </Typography>
          </Stack>

          <Stack direction="row-reverse" alignItems="center" justifyContent="space-between" mt={3}>
            <Rating dir="ltr" name="read-only" value={tour.rating} readOnly precision={0.5} size="small" />

            <Typography variant="body2" component="p">
              {tour.rating}
            </Typography>

            <Typography variant="body2" component="p">
              ({tour.numberOfReviews} دیدگاه)
            </Typography>
          </Stack>

          <Box mt={1.5}>
            <Typography variant="subtitle1" component="h6" fontWeight="bold">
              شروع با قیمت {tour.price} ت
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
};

export default TourCard;
