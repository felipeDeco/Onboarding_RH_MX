import React, { useState } from 'react';
import './App.css';

// Simple Icons as SVG components
const HomeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="nav-icon"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
);
const BookIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="nav-icon"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
);
const FileIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="nav-icon"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
);
const UserIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="nav-icon"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
);

// Pages
const HomePage = () => (
  <div className="fade-in">
    <header className="app-header">
      <div>
        <p style={{ color: 'var(--text-muted)', marginBottom: '4px' }}>¡Hola, Diego!</p>
        <h1>Bienvenido a TalentoMX</h1>
      </div>
      <div className="glass" style={{ width: '45px', height: '45px', borderRadius: '50%', overflow: 'hidden', border: '2px solid var(--primary)' }}>
        <img src="https://ui-avatars.com/api/?name=Diego+G&background=1a237e&color=fff" alt="Profile" style={{ width: '100%' }} />
      </div>
    </header>
    
    <div className="app-content">
      <section className="glass-dark" style={{ padding: '24px', marginBottom: '24px' }}>
        <h2 style={{ marginBottom: '8px', color: 'var(--secondary)' }}>Tu primer día</h2>
        <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '16px' }}>Estamos emocionados de tenerte aquí. Completa estos pasos iniciales.</p>
        <div style={{ display: 'flex', gap: '10px' }}>
          <div className="glass" style={{ padding: '8px 12px', fontSize: '0.8rem', color: 'var(--primary)', fontWeight: '600' }}>33% Completado</div>
        </div>
      </section>

      <section style={{ marginBottom: '24px' }}>
        <h2 style={{ marginBottom: '16px' }}>Próximas Tareas</h2>
        <div className="glass" style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <input type="checkbox" checked readOnly style={{ width: '20px', height: '20px' }} />
            <span style={{ textDecoration: 'line-through' }}>Firmar contrato digital</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <input type="checkbox" readOnly style={{ width: '20px', height: '20px' }} />
            <span>Ver video de cultura organizacional</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <input type="checkbox" readOnly style={{ width: '20px', height: '20px' }} />
            <span>Curso de inducción LFT</span>
          </div>
        </div>
      </section>

      <section>
        <h2 style={{ marginBottom: '16px' }}>Cultura Colectiva</h2>
        <div className="glass" style={{ overflow: 'hidden', position: 'relative', height: '180px' }}>
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=500&q=80" alt="Team" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(transparent, rgba(0,0,0,0.8))', padding: '20px', color: 'white' }}>
            <h3 style={{ fontSize: '1.1rem' }}>Innovación que trasciende</h3>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem' }}>Conoce nuestra misión y valores en México.</p>
          </div>
        </div>
      </section>
    </div>
  </div>
);

const TrainingPage = () => (
  <div className="fade-in">
    <header className="app-header">
      <h1>Capacitación</h1>
    </header>
    <div className="app-content">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div className="glass" style={{ padding: '16px', display: 'flex', gap: '16px', alignItems: 'center' }}>
          <div style={{ background: '#e8eaf6', padding: '12px', borderRadius: '12px' }}>
             <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
          </div>
          <div style={{ flex: 1 }}>
            <h3 style={{ fontSize: '1rem', marginBottom: '4px' }}>Seguridad y Salud (LFT)</h3>
            <p style={{ fontSize: '0.8rem' }}>Obligatorio según la STPS.</p>
            <div style={{ width: '100%', background: '#eee', height: '6px', borderRadius: '3px', marginTop: '10px' }}>
              <div style={{ width: '0%', background: 'var(--primary)', height: '100%', borderRadius: '3px' }}></div>
            </div>
          </div>
          <button className="btn-primary" style={{ padding: '8px 12px', borderRadius: '8px' }}>Ir</button>
        </div>

        <div className="glass" style={{ padding: '16px', display: 'flex', gap: '16px', alignItems: 'center' }}>
          <div style={{ background: '#fff9c4', padding: '12px', borderRadius: '12px' }}>
             <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fbc02d" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M16 12l-4-4-4 4M12 16V8"></path></svg>
          </div>
          <div style={{ flex: 1 }}>
            <h3 style={{ fontSize: '1rem', marginBottom: '4px' }}>Ética y Conducta</h3>
            <p style={{ fontSize: '0.8rem' }}>Código de integridad corporativa.</p>
            <div style={{ width: '100%', background: '#eee', height: '6px', borderRadius: '3px', marginTop: '10px' }}>
              <div style={{ width: '60%', background: 'var(--primary)', height: '100%', borderRadius: '3px' }}></div>
            </div>
          </div>
          <button className="btn-primary" style={{ padding: '8px 12px', borderRadius: '8px' }}>Ir</button>
        </div>

        <div className="glass" style={{ padding: '16px', display: 'flex', gap: '16px', alignItems: 'center' }}>
          <div style={{ background: '#fce4ec', padding: '12px', borderRadius: '12px' }}>
             <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#d81b60" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
          </div>
          <div style={{ flex: 1 }}>
            <h3 style={{ fontSize: '1rem', marginBottom: '4px' }}>Herramientas Digitales</h3>
            <p style={{ fontSize: '0.8rem' }}>Dominio de stack tecnológico.</p>
            <div style={{ width: '100%', background: '#eee', height: '6px', borderRadius: '3px', marginTop: '10px' }}>
              <div style={{ width: '10%', background: 'var(--primary)', height: '100%', borderRadius: '3px' }}></div>
            </div>
          </div>
          <button className="btn-primary" style={{ padding: '8px 12px', borderRadius: '8px' }}>Ir</button>
        </div>
      </div>
    </div>
  </div>
);

const ResourcesPage = () => (
  <div className="fade-in">
    <header className="app-header">
      <h1>Recursos</h1>
    </header>
    <div className="app-content">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        <div className="glass" style={{ padding: '20px', textAlign: 'center' }}>
          <div style={{ color: 'var(--primary)', marginBottom: '10px' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
          </div>
          <h4 style={{ fontSize: '0.9rem' }}>Beneficios y Nómina</h4>
        </div>
        <div className="glass" style={{ padding: '20px', textAlign: 'center' }}>
          <div style={{ color: 'var(--primary)', marginBottom: '10px' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
          </div>
          <h4 style={{ fontSize: '0.9rem' }}>Días de Vacaciones</h4>
        </div>
        <div className="glass" style={{ padding: '20px', textAlign: 'center' }}>
          <div style={{ color: 'var(--primary)', marginBottom: '10px' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
          </div>
          <h4 style={{ fontSize: '0.9rem' }}>Reglamento Interior</h4>
        </div>
        <div className="glass" style={{ padding: '20px', textAlign: 'center' }}>
          <div style={{ color: 'var(--primary)', marginBottom: '10px' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
          </div>
          <h4 style={{ fontSize: '0.9rem' }}>Ayuda RRHH</h4>
        </div>
      </div>

      <div className="glass" style={{ marginTop: '24px', padding: '20px' }}>
        <h3>Conoce la LFT</h3>
        <p style={{ fontSize: '0.85rem', marginTop: '8px' }}>
          Como colaborador en México, tienes derechos fundamentales protegidos por la Ley Federal del Trabajo. 
          En esta sección encontrarás guías simplificadas sobre:
        </p>
        <ul style={{ fontSize: '0.8rem', marginTop: '12px', paddingLeft: '20px', color: 'var(--text-muted)' }}>
          <li>Jornada laboral y descansos</li>
          <li>Prestaciones de ley (Aguinaldo, Prima vacacional)</li>
          <li>Capacitación y adiestramiento (Art. 153)</li>
        </ul>
      </div>
    </div>
  </div>
);

const ProfilePage = () => (
  <div className="fade-in">
    <header className="app-header">
      <h1>Mi Perfil</h1>
    </header>
    <div className="app-content">
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <div className="glass" style={{ width: '120px', height: '120px', borderRadius: '50%', margin: '0 auto 16px', border: '3px solid var(--primary)', overflow: 'hidden' }}>
          <img src="https://ui-avatars.com/api/?name=Diego+G&background=1a237e&color=fff&size=120" alt="Avatar" />
        </div>
        <h2>Diego González</h2>
        <p>Especialista en Software</p>
        <div style={{ marginTop: '12px', display: 'flex', justifyContent: 'center', gap: '8px' }}>
          <div className="glass" style={{ padding: '4px 12px', fontSize: '0.75rem', fontWeight: 'bold', color: 'var(--primary)' }}>Nivel 1</div>
          <div className="glass" style={{ padding: '4px 12px', fontSize: '0.75rem', fontWeight: 'bold', color: '#4caf50' }}>Activo</div>
        </div>
      </div>

      <div className="glass" style={{ padding: '20px' }}>
        <h3 style={{ marginBottom: '16px' }}>Mis Logros</h3>
        <div style={{ display: 'flex', gap: '16px', overflowX: 'auto', paddingBottom: '10px' }}>
          <div style={{ minWidth: '80px', textAlign: 'center' }}>
            <div style={{ background: '#gold', border: '2px solid gold', borderRadius: '50%', width: '50px', height: '50px', margin: '0 auto 8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>🏆</div>
            <span style={{ fontSize: '0.7rem' }}>Bienvenida</span>
          </div>
          <div style={{ minWidth: '80px', textAlign: 'center', opacity: 0.5 }}>
            <div style={{ background: '#eee', borderRadius: '50%', width: '50px', height: '50px', margin: '0 auto 8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>🔒</div>
            <span style={{ fontSize: '0.7rem' }}>Experto LFT</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="mobile-container">
      {activeTab === 'home' && <HomePage />}
      {activeTab === 'training' && <TrainingPage />}
      {activeTab === 'resources' && <ResourcesPage />}
      {activeTab === 'profile' && <ProfilePage />}

      <nav className="bottom-nav glass">
        <div 
          className={`nav-item ${activeTab === 'home' ? 'active' : ''}`}
          onClick={() => setActiveTab('home')}
        >
          <HomeIcon />
          <span>Inicio</span>
        </div>
        <div 
          className={`nav-item ${activeTab === 'training' ? 'active' : ''}`}
          onClick={() => setActiveTab('training')}
        >
          <BookIcon />
          <span>Cursos</span>
        </div>
        <div 
          className={`nav-item ${activeTab === 'resources' ? 'active' : ''}`}
          onClick={() => setActiveTab('resources')}
        >
          <FileIcon />
          <span>Recursos</span>
        </div>
        <div 
          className={`nav-item ${activeTab === 'profile' ? 'active' : ''}`}
          onClick={() => setActiveTab('profile')}
        >
          <UserIcon />
          <span>Perfil</span>
        </div>
      </nav>
    </div>
  );
}

export default App;
