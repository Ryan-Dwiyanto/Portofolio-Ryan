const About = () => {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="container">
          <div className="about-header">
            <span className="subtitle">Discover My Story</span>
            <h1 className="section-title">Tentang Saya</h1>
            <div className="hero-divider"></div>
          </div>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="glass-card profile-section">
            <div className="profile-grid">
              <div className="profile-image-container">
                <div className="profile-image-wrapper">
                  <div className="image-placeholder">
                    <span>RD</span>
                  </div>
                  <div className="image-decoration"></div>
                </div>
              </div>
              <div className="profile-text">
                <div className="name-header">
                  <h2 className="profile-name">Muhammad Ryan Dwiyanto</h2>
                  <span className="profile-badge">Backend Enthusiast</span>
                </div>
                <p className="profile-intro">
                  Saya adalah siswa <strong>SMK Wikrama Bogor</strong> jurusan{' '}
                  <strong>Pengembangan Perangkat Lunak dan Gim (PPLG)</strong>. 
                  Saya memiliki ketertarikan yang mendalam dalam membangun arsitektur backend yang kokoh, 
                  efisien, dan terukur. 
                </p>
                <p className="profile-description">
                  Bagi saya, pemrograman bukan sekadar menulis baris kode, melainkan seni memecahkan masalah 
                  dan membangun solusi yang memberikan dampak. Saya terus mengeksplorasi teknologi terbaru 
                  untuk meningkatkan kapabilitas saya dalam dunia pengembangan perangkat lunak.
                </p>
                <div className="profile-stats">
                  <div className="stat-item">
                    <span className="stat-value">1+</span>
                    <span className="stat-label">Years Learning</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-value">10+</span>
                    <span className="stat-label">Projects</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-value">5+</span>
                    <span className="stat-label">Tech Stack</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="sections-grid">
            <div className="glass-card skills-section">
              <div className="section-header">
                <i className="icon-skill"></i>
                <h3>Technical Mastery</h3>
              </div>
              <div className="skills-tags">
                <span className="skill-tag">JavaScript (ES6+)</span>
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">Express.js</span>
                <span className="skill-tag">PHP / Laravel</span>
                <span className="skill-tag">SQL / MongoDB</span>
                <span className="skill-tag">REST API</span>
                <span className="skill-tag">Git / GitHub</span>
                <span className="skill-tag">React.js</span>
              </div>
            </div>

            <div className="glass-card values-section">
              <div className="section-header">
                <i className="icon-values"></i>
                <h3>Core Principles</h3>
              </div>
              <div className="values-list">
                <div className="value-item">
                  <span className="value-icon">🎯</span>
                  <div className="value-content">
                    <h4>Precision</h4>
                    <p>Menulis kode yang bersih dan terdokumentasi dengan baik.</p>
                  </div>
                </div>
                <div className="value-item">
                  <span className="value-icon">⚡</span>
                  <div className="value-content">
                    <h4>Efficiency</h4>
                    <p>Optimasi performa adalah prioritas utama dalam setiap sistem.</p>
                  </div>
                </div>
                <div className="value-item">
                  <span className="value-icon">🤝</span>
                  <div className="value-content">
                    <h4>Collaboration</h4>
                    <p>Percaya bahwa tim yang solid menghasilkan karya yang luar biasa.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="cta-section">
            <div className="glass-card cta-card">
              <h3>Tertarik untuk bekerja sama?</h3>
              <p>Mari diskusikan bagaimana saya bisa membantu proyek Anda.</p>
              <a href="/contact" className="cta-button">Hubungi Saya</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
