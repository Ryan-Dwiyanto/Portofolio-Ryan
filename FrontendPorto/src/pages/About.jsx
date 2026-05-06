const About = () => {
  return (
    <>
      <section className="about-hero">
        <div className="container">
          <div className="about-header">
            <h1 className="section-title">Tentang Saya</h1>
            <div className="hero-divider"></div>
          </div>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="profile-card">
            <div className="profile-image">
              <div className="image-placeholder">
                <span>MR</span>
              </div>
            </div>
            <div className="profile-info">
              <h2 className="profile-name">Muhammad Ryan Dwiyanto</h2>
              <div className="profile-badge">Backend Developer</div>
              <p className="profile-intro">
                Saya adalah siswa <strong>SMK Wikrama Bogor</strong> jurusan{' '}
                <strong>Pengembangan Perangkat Lunak dan Gim (PPLG)</strong>. 
                Saya memiliki ketertarikan yang mendalam dalam membangun aplikasi backend yang efisien, 
                serta merancang sistem yang fungsional dan rapi. Saya sangat menikmati proses 
                memecahkan masalah kompleks melalui kode dan selalu antusias untuk terus belajar teknologi baru.
              </p>
            </div>
          </div>

          <div className="skills-grid">
            <div className="skill-card">
              <h3>Technical Skills</h3>
              <ul className="skills-list">
                <li>HTML, CSS, JavaScript</li>
                <li>PHP (Laravel)</li>
                <li>SQL & Database Management</li>
                <li>Object Oriented Programming (OOP)</li>
                <li>Flutter</li>
              </ul>
            </div>

            <div className="skill-card">
              <h3>Tools & Platforms</h3>
              <ul className="skills-list">
                <li>GitHub</li>
                <li>Figma</li>
                <li>Notion</li>
                <li>Trello</li>
              </ul>
            </div>

            <div className="skill-card full-width">
              <h3>Soft Skills & Pengalaman</h3>
              <ul className="skills-list">
                <li>Disiplin dan memiliki manajemen waktu yang baik</li>
                <li>Teliti dalam mengerjakan tugas dan memperhatikan detail</li>
                <li>Bertanggung jawab terhadap pekerjaan dan target yang diberikan</li>
                <li>Mampu bekerja secara mandiri maupun dalam tim</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
