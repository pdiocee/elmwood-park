import Head from 'next/head';

import Navbar from '@/utils/components/header';
import FooterNav from '@/utils/components/footer';
import ContactForm from '@/utils/components/contactform';
import ContactUsContentContainer from '@/utils/components/contactUsContentContainer';
import GoogleMaps from '@/utils/components/googleMaps';

import Typography from '@mui/material/Typography';

export default function Page() {
  return (
    <div>
      <Head>
        <title>Contact Us</title>
        <meta name="description" content="This is the Contact Us page on Elmwood Park Community League's official website." />
        <link rel="icon" href="favicon.ico" sizes="any"/>
      </Head>
      <header>
      <Navbar />
      </header>
      <main>
      <Typography variant="h2" component="h2" color="secondary" sx={{ padding: '2rem 1rem', textAlign: 'center'}} >Contact Us</Typography>
      <ContactForm />
      <ContactUsContentContainer />
      <GoogleMaps/>
      </main>
      <footer>
        <FooterNav />
      </footer>
    </div>
  )
}