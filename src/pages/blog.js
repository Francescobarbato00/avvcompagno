
import Header from './components/Header';
import NewsletterSection from './components/NewsletterSection';
import Footer from './components/Footer';
import ArticleSection from './components/ArticleSection';
import Chatbot from './components/Chatbot';
export default function Index() {
  return (
    <div>
      <Chatbot/>
      <Header />
      <ArticleSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
}
