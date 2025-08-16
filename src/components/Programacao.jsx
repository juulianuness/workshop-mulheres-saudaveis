import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Programacao() {
  const schedule = [
     { hora: "8:30", evento: "Credenciamento e Café", descritivo: "", respons: "" },
    { hora: "9:30", evento: "Abertura", descritivo: "", respons: "Psi Jaqueline Vieira" },
    { hora: "10:00", evento: "Palestra", descritivo: "Ginecologista", respons: "Dr Marta Luchesi" },
    { hora: "11:30", evento: "Almoço", descritivo: "", respons: "" },
    { hora: "13:00", evento: "Palestra", descritivo: "Profissional de Educação Física", respons: "Bianca Motta" },
    { hora: "13:45", evento: "Palestra", descritivo: "Fisioterapeuta", respons: "Rosimar Caetano" },
    { hora: "15:00", evento: "Coffee Break", descritivo: "", respons: "" },
    { hora: "15:30", evento: "Palestra", descritivo: "Nutricionista", respons: "Luciana Garcia" },
    { hora: "16:45", evento: "Palestra", descritivo: "Psicóloga", respons: "Jaqueline Vieira" },
    { hora: "18:00", evento: "Sorteios e Encerramento", descritivo: "", respons: "" },
  ];

  return (
    <section className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
      <Container>
        <Row>
          <Col xs={12}>
            <div className="text-center mb-5">
              <h2 className="fw-bold mb-3" style={{ 
                color: '#2c3e50',
                fontSize: 'clamp(2rem, 4vw, 2.8rem)',
                letterSpacing: '-0.5px'
              }}>
                Programação
              </h2>
              
            </div>
            
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
              {schedule.map((item, i) => (
                <div 
                  key={i}
                  className="d-flex align-items-center w-100 py-1 px-4 mb-3"
                  style={{ 
                    borderRadius: '12px',
                    boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                    backgroundColor: '#ffffff',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.12)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.06)';
                  }}
                >
                  {/* Hora */}
                  <div
                    className="fw-bold text-white d-flex align-items-center justify-content-center flex-shrink-0"
                    style={{
                      backgroundColor: '#d63384',
                      width: "clamp(70px, 12vw, 80px)",
                      height: "clamp(50px, 10vw, 60px)",
                      borderRadius: '8px',
                      fontSize: "clamp(0.9rem, 2.5vw, 1.1rem)",
                      letterSpacing: '0.5px',
                      marginRight: 'clamp(5px, 3vw, 24px)'
                    }}
                  >
                    {item.hora}
                  </div>
                  
                  {/* Conteúdo principal */}
                  <div className="flex-grow-1 min-width-0">
                    <h5 className="mb-1 fw-semibold lh-sm" style={{ 
                      color: '#2c3e50',
                      fontSize: 'clamp(1rem, 3.5vw, 1.3rem)',
                      marginBottom: '4px'
                    }}>
                      {item.evento}
                    </h5>
                    {item.descritivo && (
                      <span className="text-muted d-block" style={{
                        fontSize: 'clamp(0.8rem, 2.2vw, 0.9rem)',
                        fontWeight: '500'
                      }}>
                        {item.descritivo}
                      </span>
                    )}
                  </div>
                  
                  {/* Responsável */}
                  {item.respons && (
                    <div className="text-end flex-shrink-0 ms-3 d-none d-sm-block">
                      <div className="text-muted" style={{ fontSize: '0.8rem', marginBottom: '2px' }}>
                        Apresentado por:
                      </div>
                      <div className="fw-semibold" style={{ 
                        color: '#495057',
                        fontSize: 'clamp(0.1rem, 2.2vw, 0.95rem)'
                      }}>
                        {item.respons}
                      </div>
                    </div>
                  )}
                  
                  {/* Responsável mobile */}
                  {item.respons && (
                    <div className="d-sm-none ms-3 flex-shrink-0">
                      <div className="fw-semibold text-end" style={{ 
                        color: '#495057',
                        fontSize: 'clamp(0.8rem, 2.5vw, 0.9rem)',
                        lineHeight: '1.3'
                      }}>
                        {item.respons}
                      </div>
                      {item.especialidade && (
                        <div className="text-muted text-end small">
                          {item.especialidade}
                        </div>
                      )}
                    </div>
                  )}
                  
                  {/* Indicador visual para intervalos */}
                  {!item.respons && (
                    <div className="ms-3 flex-shrink-0">
                      <div className="text-muted text-center" style={{ 
                        fontSize: 'clamp(0.8rem, 2.5vw, 0.9rem)',
                        fontStyle: 'italic'
                      }}>
                        
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}