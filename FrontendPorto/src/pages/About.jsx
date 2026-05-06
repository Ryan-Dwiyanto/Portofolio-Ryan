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
                <h3 className="section-subtitle">Technical Mastery</h3>
              </div>
              <div className="skills-tags">
                <span className="skill-tag">HTML5 / CSS3</span>
                <span className="skill-tag">JavaScript (ES6+)</span>
                <span className="skill-tag">PHP / Laravel</span>
                <span className="skill-tag">SQL & Database</span>
                <span className="skill-tag">OOP</span>
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">Express.js</span>
                <span className="skill-tag">Flutter</span>
              </div>
            </div>

            <div className="glass-card skills-section">
              <div className="section-header">
                <h3 className="section-subtitle">Tools & Platforms</h3>
              </div>
              <div className="skills-tags">
                <span className="skill-tag tool">GitHub</span>
                <span className="skill-tag tool">Figma</span>
                <span className="skill-tag tool">Notion</span>
                <span className="skill-tag tool">Trello</span>
                <span className="skill-tag tool">VS Code</span>
                <span className="skill-tag tool">Vercel</span>
              </div>
            </div>

            <div className="glass-card values-section full-width">
              <div className="section-header">
                <h3 className="section-subtitle">Soft Skills & Pengalaman</h3>
              </div>
              <div className="values-grid">
                <div className="value-item">
                  <span className="value-icon">⏰</span>
                  <div className="value-content">
                    <h4>Manajemen Waktu</h4>
                    <p>Disiplin dan mampu mengelola prioritas dengan sangat baik.</p>
                  </div>
                </div>
                <div className="value-item">
                  <span className="value-icon">🔍</span>
                  <div className="value-content">
                    <h4>Ketelitian</h4>
                    <p>Fokus pada detail dalam setiap baris kode dan desain yang dikerjakan.</p>
                  </div>
                </div>
                <div className="value-item">
                  <span className="value-icon">✅</span>
                  <div className="value-content">
                    <h4>Tanggung Jawab</h4>
                    <p>Berkomitmen penuh terhadap target dan kualitas hasil pekerjaan.</p>
                  </div>
                </div>
                <div className="value-item">
                  <span className="value-icon">👥</span>
                  <div className="value-content">
                    <h4>Kolaborasi</h4>
                    <p>Mampu bekerja secara harmonis baik mandiri maupun dalam tim.</p>
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
