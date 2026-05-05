import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: 'success', message: 'Pesan Anda berhasil dikirim!' });
        setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form
      } else {
        setStatus({ type: 'error', message: data.error || 'Terjadi kesalahan. Silakan coba lagi.' });
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus({ type: 'error', message: 'Gagal terhubung ke server. Pastikan server backend berjalan.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="contact-hero">
        <div className="container">
          <div className="contact-header">
            <h1 className="section-title">Get in Touch</h1>
            <p className="hero-subtitle">
              Mari terhubung! Jangan ragu untuk menghubungi saya untuk kolaborasi atau pertanyaan.
            </p>
            <div className="hero-divider"></div>
          </div>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info-wrapper">
              <div className="contact-card">
                <div className="contact-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="contact-details">
                  <h3>Email</h3>
                  <p>muhammadryandwiyanto@smkwikrama.sch.id</p>
                  <a href="mailto:muhammadryandwiyanto@smkwikrama.sch.id" className="contact-link">
                    Kirim Email
                  </a>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-icon">
                  <i className="fab fa-whatsapp"></i>
                </div>
                <div className="contact-details">
                  <h3>WhatsApp</h3>
                  <p>+62 895621276070</p>
                  <a href="https://wa.me/62895621276070" target="_blank" rel="noopener noreferrer" className="contact-link">
                    Kirim Pesan
                  </a>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-icon">
                  <i className="fab fa-github"></i>
                </div>
                <div className="contact-details">
                  <h3>GitHub</h3>
                  <p>@Ryan-Dwiyanto</p>
                  <a href="https://github.com/Ryan-Dwiyanto" target="_blank" rel="noopener noreferrer" className="contact-link">
                    Lihat Profil
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-form-wrapper">
              <form className="contact-form" onSubmit={handleSubmit}>
                <h3>Kirim Pesan Langsung</h3>
                
                {status.message && (
                  <div className={`form-status ${status.type === 'success' ? 'status-success' : 'status-error'}`} style={{
                    padding: '10px',
                    marginBottom: '15px',
                    borderRadius: '5px',
                    backgroundColor: status.type === 'success' ? 'rgba(46, 213, 115, 0.1)' : 'rgba(255, 71, 87, 0.1)',
                    color: status.type === 'success' ? '#2ed573' : '#ff4757',
                    border: `1px solid ${status.type === 'success' ? '#2ed573' : '#ff4757'}`,
                    fontSize: '0.9rem'
                  }}>
                    {status.message}
                  </div>
                )}

                <div className="form-group">
                  <input type="text" id="name" required placeholder="Nama Anda" value={formData.name} onChange={handleChange} disabled={isSubmitting} />
                </div>
                <div className="form-group">
                  <input type="email" id="email" required placeholder="Email Anda" value={formData.email} onChange={handleChange} disabled={isSubmitting} />
                </div>
                <div className="form-group">
                  <input type="text" id="subject" required placeholder="Subjek" value={formData.subject} onChange={handleChange} disabled={isSubmitting} />
                </div>
                <div className="form-group">
                  <textarea id="message" rows="5" required placeholder="Pesan Anda" value={formData.message} onChange={handleChange} disabled={isSubmitting}></textarea>
                </div>
                <button type="submit" className="submit-btn" disabled={isSubmitting} style={{ opacity: isSubmitting ? 0.7 : 1, cursor: isSubmitting ? 'not-allowed' : 'pointer' }}>
                  {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
                  {!isSubmitting && <i className="fas fa-paper-plane"></i>}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
