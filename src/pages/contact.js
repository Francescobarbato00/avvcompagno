import Header from './components/Header';
import Footer from './components/Footer';
import ContactSection from './components/ContactSection';
import NewsletterSection from './components/NewsletterSection';
import Chatbot from './components/Chatbot';

export default function Contact() {
  return (
    <div>
      <Chatbot/>
      <Header />
      <ContactSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
}
