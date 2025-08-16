import React from "react";
import emocionalImg from './assets/img/emocional.jpg';
import fisicaImg from './assets/img/fisica.jpg';
import genecologicaImg from './assets/img/Ginecológica.jpg';
import nutricaoImg from './assets/img/nutrição.jpg';
import pelvicaImg from './assets/img/pelvica.jpg';

export default function AreasSaude() {
  // Simulando as imagens importadas (substitua pelos seus imports reais)
  const emocional = emocionalImg;
  const fisica = fisicaImg;
  const genecologica = genecologicaImg;
  const nutricao = nutricaoImg;
  const pelvica = pelvicaImg;

  const areas = [
    {
      nome: "Saúde Ginecológica",
      imagem: genecologica
    },
    {
      nome: "Saúde Física", 
      imagem: fisica
    },
    {
      nome: "Saúde Emocional",
      imagem: emocional
    },
    {
      nome: "Saúde Pélvica",
      imagem: pelvica
    },
    {
      nome: "Saúde Nutricional",
      imagem: nutricao
    }
  ];

  return (
    <section className="py-5" style={{ backgroundColor: "#ffffff" }}>
      <div className="container">
        {/* Título Principal */}
        <div className="text-center mb-5">
          <h2
            className="mb-4"
            style={{
              fontSize: "2.5rem",
              fontWeight: "300",
              color: "#2c2c2c",
              lineHeight: "1.2",
              letterSpacing: "-0.5px",
              maxWidth: "600px",
              margin: "0 auto"
            }}
          >
            Tudo que você <span style={{ fontWeight: "600", color: "#e91e63" }}>precisa para
              viver</span> de forma
            saudável !
          </h2>

          <div
            style={{
              width: "100px",
              height: "2px",
              backgroundColor: "#e91e63",
              margin: "0 auto"
            }}
          ></div>
        </div>

        {/* Grid de Áreas */}
        <div className="row g-4 justify-content-center mb-5">
          {areas.map((area, i) => (
            <div className="col-lg-2 col-md-4 col-6" key={i}>
              <div
                className="text-center p-1"
                style={{
                  backgroundColor: "transparent",
                  borderRadius: "12px",
                  transition: "all 0.3s ease",
                  cursor: "pointer"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#f8f9fa";
                  e.currentTarget.style.transform = "translateY(-5px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                {/* Imagem da Área */}
                <div className="mb-3">
                  <img
                    src={area.imagem}
                    alt={area.nome}
                    style={{
                      width: "150px",
                      height: "150px",
                      borderRadius: "50%",
                      objectFit: "cover",
                      border: "3px solid #e91e63",
                      transition: "all 0.3s ease",
                      boxShadow: "0 4px 15px rgba(233,30,99,0.2)"
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = "scale(1.05)";
                      e.target.style.boxShadow = "0 8px 25px rgba(233,30,99,0.3)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = "scale(1)";
                      e.target.style.boxShadow = "0 4px 15px rgba(233,30,99,0.2)";
                    }}
                  />
                </div>

                {/* Título da Área */}
                <h5
                  className="mb-0"
                  style={{
                    fontSize: "0.95rem",
                    fontWeight: "500",
                    color: "#333",
                    lineHeight: "1.3"
                  }}
                >
                  {area.nome}
                </h5>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Minimalista */}
        <div className="text-center">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <p
                className="mb-4"
                style={{
                  fontSize: "1.1rem",
                  color: "#666",
                  lineHeight: "1.6",
                  fontWeight: "300"
                }}
              >
                Uma abordagem completa para o bem-estar feminino.<br />
                Descubra como integrar saúde física, mental e emocional.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}