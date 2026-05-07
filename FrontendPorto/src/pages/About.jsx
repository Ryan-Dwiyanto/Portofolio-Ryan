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
                  Saya adalah siswa <strong>SMK Wikrama Bogor</strong> jurusan{" "}
                  <strong>Pengembangan Perangkat Lunak dan Gim (PPLG)</strong>.
                  Saya memiliki ketertarikan yang mendalam dalam membangun
                  arsitektur backend yang kokoh, efisien, dan terukur.
                </p>

                <p className="profile-description">
                  Bagi saya, pemrograman bukan sekadar menulis baris kode,
                  melainkan seni memecahkan masalah dan membangun solusi yang
                  memberikan dampak. Saya terus mengeksplorasi teknologi terbaru
                  untuk meningkatkan kapabilitas saya dalam dunia pengembangan
                  perangkat lunak.
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

          <div className="glass-card table-section">
            <div className="section-header-minimal">
              <h3 className="section-subtitle">Technical Specification</h3>
            </div>

            <div className="minimal-table-container">
              <table className="skills-table">
                <thead>
                  <tr>
                    <th>Category</th>
                    <th>Core Technologies</th>
                    <th>Associated Tools</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="cat-cell">Web Development</td>
                    <td>HTML5, CSS3, JavaScript (ES6+), React.js</td>
                    <td>VS Code, Chrome DevTools</td>
                  </tr>
                  <tr>
                    <td className="cat-cell">Backend Systems</td>
                    <td>PHP, Laravel, Node.js, Express.js</td>
                    <td>Postman, Vercel</td>
                  </tr>
                  <tr>
                    <td className="cat-cell">Databases</td>
                    <td>SQL, Database Management, MongoDB</td>
                    <td>TablePlus, phpMyAdmin</td>
                  </tr>
                  <tr>
                    <td className="cat-cell">Mobile & Apps</td>
                    <td>Flutter, Dart</td>
                    <td>Android Studio</td>
                  </tr>
                  <tr>
                    <td className="cat-cell">Architecture</td>
                    <td>OOP, RESTful API Design</td>
                    <td>GitHub, Git</td>
                  </tr>
                  <tr>
                    <td className="cat-cell">Management</td>
                    <td>Time Management, Detail Oriented</td>
                    <td>Notion, Trello, Figma</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="values-minimal-grid">
            <div className="value-minimal-item">
              <h4>Soft Skills & Mindset</h4>
              <p>
                Disiplin, teliti, bertanggung jawab, dan mampu berkolaborasi
                dalam tim secara efektif.
              </p>
            </div>
          </div>

          <div className="cta-section">
            <div className="glass-card cta-card">
              <h3>Tertarik untuk bekerja sama?</h3>
              <p>Mari diskusikan bagaimana saya bisa membantu proyek Anda.</p>
              <a href="/contact" className="cta-button">
                Hubungi Saya
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;