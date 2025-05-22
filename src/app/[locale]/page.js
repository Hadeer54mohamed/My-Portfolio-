import About from './about/page';
import Hero from '../../components/HeroBanner';
import Contact from './contact/page';
import Service from './service/page';
import Blog from './blog/page';
import LanguageSwitcher from '../../components/LanguageSwitcher';

export default function Home() {

  return (
    <main className="space-y-20 p-6">
     

      <section>
        
        <Hero />
      </section>

      <section>
        <About />
      </section>

      <section>
        <Service />
      </section>

      <section>
        <Blog />
      </section>

      <section>
        <Contact />
      </section>
    </main>
  );
}
