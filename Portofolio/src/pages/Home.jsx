import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleExplore = () => {
    navigate('/projects');
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Hi, I'm <span className="gradient-text">Ryan</span>
        </h1>
        <p className="hero-subtitle">Web Developer | Back-End Developer</p>
        <button className="cta-button" onClick={handleExplore}>
          <span>Explore My Work</span>
          <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Home;
