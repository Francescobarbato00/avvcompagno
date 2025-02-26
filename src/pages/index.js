import AboutSection from './components/AboutSection';
import Header from './components/Header';
import Home from './components/Home';
import AreeAttivita from './components/AreeAttivita';
import TeamSection from './components/Team';
import StatsSection from './components/StatsSection';
import NewsSection from './components/NewsSection';
import NewsletterSection from './components/NewsletterSection';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
export default function Index() {
  return (
    <div>
      <Chatbot />
      <Header />
      <Home />
      <AboutSection />
      <AreeAttivita />
      <TeamSection />
      <StatsSection />
      <NewsSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
}
