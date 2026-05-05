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
            {/* Website Shop */}
            <div className="project-card featured" data-tech="web">
              <div className="project-badge">E-Commerce</div>
              <div className="project-image">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Website Shop"
                />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href="#" className="link-btn" target="_blank" rel="noopener noreferrer" title="Live Demo">
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                    <a href="#" className="link-btn github" title="GitHub">
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-info">
                <h3>Website Shop</h3>
                <p>
                  Membuat website e-commerce yang mencakup halaman beranda, katalog produk, proses pembelian, dan pembayaran.
                </p>
                <div className="project-tech">
                  <span className="tech-tag bg-html">HTML</span>
                  <span className="tech-tag bg-css">CSS</span>
                  <span className="tech-tag">Responsive</span>
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
                    <a href="https://github.com/Ryan-Dwiyanto/Bookshelf" className="link-btn github">
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-info">
                <h3>BookShelf</h3>
                <p>Sistem manajemen buku untuk menandai buku yang ingin atau sudah dibaca.</p>
                <div className="project-tech">
                  <span className="tech-tag bg-js">JavaScript</span>
                  <span className="tech-tag bg-css">CSS</span>
                  <span className="tech-tag">Local Storage</span>
                </div>
              </div>
            </div>

            {/* Sistem Manajemen Produk */}
            <div className="project-card" data-tech="backend">
              <div className="project-image">
                <img
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Sistem Manajemen Produk"
                />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href="https://github.com/Ryan-Dwiyanto/manajemen-produk/" className="link-btn github">
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-info">
                <h3>Sistem Manajemen Produk</h3>
                <p>
                  Aplikasi backend berbasis Node.js menggunakan framework Express.js yang berfungsi sebagai REST API untuk mengelola data produk.
                </p>
                <div className="project-tech">
                  <span className="tech-tag bg-node">Node.js</span>
                  <span className="tech-tag bg-js">Express.js</span>
                  <span className="tech-tag">REST API</span>
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
                    <a href="https://github.com/Ryan-Dwiyanto/Jurnalku_trio" className="link-btn github">
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-info">
                <h3>Jurnalku (Flutter – View)</h3>
                <p>
                  Membuat tampilan antarmuka (UI) aplikasi Jurnalku menggunakan Flutter dengan desain modern dan responsive.
                </p>
                <div className="project-tech">
                  <span className="tech-tag bg-flutter">Flutter</span>
                  <span className="tech-tag bg-dart">Dart</span>
                  <span className="tech-tag">UI/UX</span>
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
