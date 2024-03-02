import { AccessTime } from '@mui/icons-material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const TourCard = () => {
  return (
    <Grid item xs={3}>
      <Paper elevation={3}>
        <img
          className="w-full h-20 object-cover"
          src="https://images.unsplash.com/photo-1707343848552-893e05dba6ac?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="tour image"
        />

        <Box paddingX={1}>
          <Typography variant="subtitle1" component="h2">
            در آبشار غوطه ور شوید
          </Typography>

          <Stack direction="row" alignItems="center" gap={1}>
            <AccessTime sx={{ width: 15 }} />

            <Typography variant="body2" component="p">
              5 ساعت
            </Typography>
          </Stack>

          <Stack direction="row-reverse" alignItems="center" justifyContent="space-between" mt={3}>
            <Rating dir="ltr" name="read-only" value={3.5} readOnly precision={0.5} size="small" />

            <Typography variant="body2" component="p">
              4.5
            </Typography>

            <Typography variant="body2" component="p">
              (نظرات ۶۵۵)
            </Typography>
          </Stack>

          <Box mt={1.5}>
            <Typography variant="subtitle1" component="h6" fontWeight="bold">
              شروع با قیمت ۲۰۰۰۰۰۰ ت
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
};

export default TourCard;
