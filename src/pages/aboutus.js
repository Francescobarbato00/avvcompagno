import Header from './components/Header';
import Footer from './components/Footer';
import Screen from './components/Screen';
import ProfileSection from './components/ProfileSection';
import Team from './components/Team';
import NewsletterSection from './components/NewsletterSection';
import ValoriSection from './components/ValoriSection';
import Chatbot from './components/Chatbot';

export default function AboutUs() {
  return (
    <div>
      <Chatbot/>
      <Header />
      <Screen />
      <ProfileSection />
      <Team />
      <ValoriSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
}
