import React from 'react';
import '../styles/Startups.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const successStories = [
  {
    title: "Tech Innovators Inc.",
    desc: "Revolutionizing software development with cutting-edge AI solutions.",
    img: "https://images.inc.com/uploaded_files/image/1920x1080/getty_522302116_2000134220009280265_299511.jpg"
  },
  {
    title: "Eco Solutions Ltd.",
    desc: "Leading the way in sustainable energy solutions for a greener future.",
    img: "https://th.bing.com/th/id/OIP.MtPGROtETIlgAqYonESYaQHaDw?w=293&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"
  },
  {
    title: "Digital Dynamics Co.",
    desc: "Transforming digital marketing with data-driven strategies.",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
  }
];

const currentStartups = [
  {
    title: "HealthTech Innovations",
    desc: "Developing wearable tech for personalized health monitoring.",
    img: "https://th.bing.com/th/id/OIP.rXC1xwAmiRZ7MUc-qYvlngHaEL?w=277&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"
  },
  {
    title: "EduGrowth Solutions",
    desc: "Creating innovative platforms for online learning and skill development.",
    img: "https://th.bing.com/th/id/OIP.5PRPhf-N7kIz3QBx7_G61wHaEK?w=301&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"
  },
  {
    title: "AgriTech Pioneers",
    desc: "Revolutionizing agriculture with precision farming technologies.",
    img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "FinTech Ventures",
    desc: "Building next-gen financial tools for seamless transactions.",
    img: "https://images.unsplash.com/photo-1556742031-c6961e8560b0?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "SmartCity Systems",
    desc: "Designing smart solutions for urban living and sustainability.",
    img: "https://images.unsplash.com/photo-1497493292307-31c376b6e479?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Creative Minds Studio",
    desc: "Fostering creativity and innovation in digital content creation.",
    img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=80"
  }
];

const Startups = () => {
  return (
    <>
      <Header />
      <div className="startup-page">
        <header className="page-header">Startups</header>
        <section className="section">
          <h2>Success Stories</h2>
          <div className="card-grid">
            {successStories.map((s, i) => (
              <div className="card" key={i}>
                <img src={s.img} alt={s.title} />
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <h2>Current Startups</h2>
          <div className="card-grid">
            {currentStartups.map((s, i) => (
              <div className="card" key={i}>
                <img src={s.img} alt={s.title} />
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="button-group">
          <button className="btn green">Apply Now</button>
          <button className="btn gray">Learn More</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Startups;
