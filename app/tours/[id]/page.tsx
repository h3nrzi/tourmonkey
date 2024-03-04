import Accordion from '@/app/components/Accordion';
import ImageCollage from '@/app/components/ImageCollage';
import { Box, Container, Paper, Stack, Typography } from '@mui/material';

const TourPage = () => (
  <Container sx={{ width: 900, my: 10 }}>
    <Typography variant="h3" component="h1" mt={3}>
      جهان را در وگاس کاوش کنید
    </Typography>

    <Stack direction="row" mt={3}>
      <img
        className="w-2/3 h-1/2"
        src="https://images.unsplash.com/photo-1618304925090-b68a8c744cbe?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="image"
      />
      <ImageCollage />
    </Stack>

    <Box mb="10">
      <Typography variant="h5" component="h4" mt={4} fontWeight="bold">
        در مورد این بلیط
      </Typography>
      <Typography variant="subtitle1" component="p" mt={2}>
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون
        بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با
        هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
        متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ
        پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط
        سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
        طراحی اساسا مورد استفاده قرار گیرد.
      </Typography>

      <Typography variant="h5" component="h4" mt={4} fontWeight="bold">
        سوالات پر تکرار
      </Typography>
      <Accordion />
    </Box>
  </Container>
);

export default TourPage;
