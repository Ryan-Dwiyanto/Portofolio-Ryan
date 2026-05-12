const Projects = () => {
  return (
    <>
      <section className="projects-hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="section-title">My Projects</h1>
            <p className="hero-subtitle">
              Proyek-proyek backend & fullstack yang saya kembangkan dengan konsep OOP dan best practices
            </p>
            <div className="hero-divider"></div>
          </div>
        </div>
      </section>

      <section className="projects-content">
        <div className="container">
          <div className="projects-grid">
            {/* Aplikasi Kasir Laravel */}
            <div className="project-card featured" data-tech="web">
              <div className="project-badge">Point of Sale</div>
              <div className="project-image">
                <img
                  src="https://images.unsplash.com/photo-1556742044-3c52d6e88c02?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Aplikasi Kasir Laravel"
                />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href="https://github.com/Ryan-Dwiyanto/12309898-Muhammad-Ryan-Dwiyanto-Kasir" className="link-btn github" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-info">
                <h3>Aplikasi Kasir Laravel</h3>
                <p>
                  Sistem Point of Sale (POS) berbasis web yang efisien untuk manajemen transaksi, inventaris barang, dan laporan penjualan real-time.
                </p>
                <div className="project-tech">
                  <span className="tech-tag bg-laravel">Laravel</span>
                  <span className="tech-tag bg-php">PHP</span>
                  <span className="tech-tag">MySQL</span>
                </div>
              </div>
            </div>

            {/* Sistem Manajemen Produk */}
            <div className="project-card" data-tech="backend">
              <div className="project-image">
                <img
                  src="https://images.unsplash.com/photo-1586769852044-692d6e3703a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Sistem Manajemen Produk"
                />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href="https://github.com/Ryan-Dwiyanto/manajemen-produk" className="link-btn github" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-info">
                <h3>Sistem Manajemen Produk</h3>
                <p>
                  RESTful API untuk pengelolaan katalog produk dengan arsitektur MVC, mendukung integrasi database yang fleksibel.
                </p>
                <div className="project-tech">
                  <span className="tech-tag bg-node">Node.js</span>
                  <span className="tech-tag bg-js">Express.js</span>
                  <span className="tech-tag">MVC Architecture</span>
                </div>
              </div>
            </div>

            {/* Secure Code */}
            <div className="project-card" data-tech="backend">
              <div className="project-image">
                <img
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Secure Code Implementation"
                />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href="https://github.com/Ryan-Dwiyanto/Secure-Code" className="link-btn github" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-info">
                <h3>Secure Code Implementation</h3>
                <p>
                  Implementasi aplikasi web dengan fokus pada keamanan siber, enkripsi data, dan perlindungan terhadap celah keamanan umum.
                </p>
                <div className="project-tech">
                  <span className="tech-tag bg-laravel">Laravel</span>
                  <span className="tech-tag">CyberSecurity</span>
                  <span className="tech-tag">Encryption</span>
                </div>
              </div>
            </div>

            {/* BookShelf */}
            <div className="project-card" data-tech="web">
              <div className="project-image">
                <img
                  src="https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="BookShelf"
                />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href="https://github.com/Ryan-Dwiyanto/Bookshelf" className="link-btn github" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-info">
                <h3>BookShelf</h3>
                <p>Aplikasi manajemen koleksi buku pribadi dengan fitur pelacakan status pembacaan dan penyimpanan lokal.</p>
                <div className="project-tech">
                  <span className="tech-tag bg-js">JavaScript</span>
                  <span className="tech-tag">Local Storage</span>
                </div>
              </div>
            </div>

            {/* Jurnalku Flutter */}
            <div className="project-card" data-tech="mobile">
              <div className="project-image">
                <img
                  src="https://images.unsplash.com/photo-1687360449466-1778c34a8864?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Jurnalku App"
                />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href="https://github.com/Ryan-Dwiyanto/Jurnalku_trio" className="link-btn github" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-info">
                <h3>Jurnalku (Flutter)</h3>
                <p>
                  Antarmuka aplikasi jurnal harian yang modern dan responsif, dibangun menggunakan framework Flutter.
                </p>
                <div className="project-tech">
                  <span className="tech-tag bg-flutter">Flutter</span>
                  <span className="tech-tag bg-dart">Dart</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
