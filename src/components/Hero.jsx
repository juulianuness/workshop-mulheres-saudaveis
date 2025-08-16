import React from "react";
import principalImg from './assets/img/principal.svg'; // Mudando para .svg
import LogoImg from './assets/img/logo-psi.svg';

export default function Hero() {
  return (
    <section 
      className="mt-0 position-relative overflow-hidden" 
      style={{ minHeight: '100vh' }}
    >
      {/* Fundo gradiente sutil */}
      <div 
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          background: 'linear-gradient(135deg, #fafafa 0%, #ffffff 100%)',
          zIndex: '0'
        }}
      />

      <div className="container position-relative" style={{ zIndex: '2' }}>

        <div className="row align-items-center" style={{ minHeight: '100vh' }}>
          {/* Coluna do Texto - Lado Esquerdo */}
          <div className="col-lg-5 col-md-6">
            <div className="pe-lg-4">
              <h1
                className="mb-4 mt-5"
                style={{
                  fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
                  fontWeight: '300',
                  color: '#2c2c2c',
                  lineHeight: '1.1',
                  letterSpacing: '-1px',
                  textShadow: '0 2px 10px rgba(0,0,0,0.05)'
                }}
              >
                Imersão<br />
                <span style={{ fontWeight: '700', color: '#e91e63' }}>
                  Mulheres Saudáveis
                </span>
              </h1>

              <p
                className="mb-4"
                style={{
                  fontSize: '1.1rem',
                  color: '#555',
                  lineHeight: '1.7',
                  fontWeight: '300',
                  maxWidth: '400px'
                }}
              >
                Um dia com muito conhecimento, informações e orientações práticas 
                para você mulher, se cuidar melhor e ter mais qualidade de vida e bem estar.
              </p>

              <div className="mb-5">
                <button
                  className="btn px-5 py-3"
                  style={{
                    backgroundColor: '#e91e63',
                    border: 'none',
                    borderRadius: '50px',
                    fontSize: '1rem',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    transition: 'all 0.3s ease',
                    color: 'white',
                    boxShadow: '0 4px 20px rgba(233,30,99,0.3)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#d81b60';
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 6px 25px rgba(233,30,99,0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = '#e91e63';
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 4px 20px rgba(233,30,99,0.3)';
                  }}
                  onClick={() => document.getElementById('lotes')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Garantir Vaga
                </button>
              </div>

              {/* Informações do Evento - Layout Vertical */}
              <div className="row g-4 mb-5 mt-5">
                <div className="col-4">
                  <div>
                    <div
                      style={{
                        fontSize: '0.8rem',
                        color: '#e91e63',
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        marginBottom: '8px',
                        fontWeight: '600'
                      }}
                    >
                      Data
                    </div>
                    <div style={{ fontSize: '1rem', color: '#333', fontWeight: '600' }}>
                      18 de Outubro
                    </div>
                  </div>
                </div>

                <div className="col-4">
                  <div>
                    <div
                      style={{
                        fontSize: '0.8rem',
                        color: '#e91e63',
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        marginBottom: '8px',
                        fontWeight: '600'
                      }}
                    >
                      Horário
                    </div>
                    <div style={{ fontSize: '1rem', color: '#333', fontWeight: '600' }}>
                      8:30 às 18h
                    </div>
                  </div>
                </div>

                <div className="col-4">
                  <div>
                    <div
                      style={{
                        fontSize: '0.8rem',
                        color: '#e91e63',
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        marginBottom: '8px',
                        fontWeight: '600'
                      }}
                    >
                      Local
                    </div>
                    <div style={{ fontSize: '1rem', color: '#333', fontWeight: '600' }}>
                      Espaço Blue House
                    </div>
                    <div style={{ fontSize: '0.85rem', color: '#666' }}>
                      Santa Cruz - RJ
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna da Imagem - Lado Direito */}
          <div className="col-lg-7 col-md-6">
            <div className="position-relative">
              {/* Logo acima da imagem */}
              <div className="text-center mb-3 mt-2">
                <img
                  src={LogoImg}
                  alt="Logo Jaqueline Vieira"
                  style={{
                    height: '92px',
                    objectFit: 'contain',
                    opacity: '0.9',
                    transition: 'opacity 0.3s ease',
                    backgroundColor: 'transparent' // Força transparência
                  }}
                  onMouseEnter={(e) => e.target.style.opacity = '1'}
                  onMouseLeave={(e) => e.target.style.opacity = '0.9'}
                />
              </div>

              {/* Imagem SVG sem fundo */}
              <div className="text-center mb-4">
                <img
                  src={principalImg}
                  alt="Mulher Saudável"
                  className="img-fluid"
                  style={{
                    maxHeight: '700px',
                    width: '100%',
                    maxWidth: '500px',
                    borderRadius: '20px',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.08)',
                    transition: 'transform 0.3s ease',
                    objectFit: 'contain', // Mudei para contain para SVGs
                    backgroundColor: 'transparent', // Remove qualquer fundo
                    border: 'none' // Remove bordas que possam criar fundo
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.02)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}