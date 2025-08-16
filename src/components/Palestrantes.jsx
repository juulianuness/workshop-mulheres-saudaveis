import React from "react";
import biancaImg from './assets/img/bianca.png';
import lucianaImg from './assets/img/Luciana.jpg';
import marthaImg from './assets/img/martha.png';
import rosimarImg from './assets/img/rosi.jpg';
import jaquelineImg from './assets/img/Jaqueline.png';


export default function Palestrantes() {
    const speakers = [
        {
            nome: "Martha Luchesi",
            cargo: "Ginecologista",
            especialidade: "Saúde da Mulher",
            foto:marthaImg,
        },
        {
            nome: "Bianca Motta",
            cargo: "Educadora Física",
            especialidade: "Atividade Física e Bem-estar",
            foto:biancaImg,
        },
        {
            nome: "Luciana Garcia",
            cargo: "Nutricionista",
            especialidade: "Nutrição e Saúde",
            foto: lucianaImg,
        },
        {
            nome: "Rosimar Caetano",
            cargo: "Fisioterapeuta",
            especialidade: "Fisioterapia Preventiva",
            foto: rosimarImg,
        },
        {
            nome: "Jaqueline Vieira",
            cargo: "Psicóloga",
            especialidade: "Saúde Emocional",
            foto: jaquelineImg,
        },
    ];

    return (
        <section 
            className="py-5 position-relative overflow-hidden mt-5" 
            style={{ 
                background: "#f8f9fa",
                minHeight: "100vh"
            }}
        >
            {/* Background decorativo */}
            <div 
                className="position-absolute"
                style={{
                    top: "-10%",
                    right: "-5%",
                    width: "300px",
                    height: "300px",
                    background: "radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)",
                    borderRadius: "50%",
                    filter: "blur(40px)"
                }}
            />
            

            <div className="container position-relative">
                {/* Título da Seção */}
                <div className="row">
                    <div className="col-12">
                        <div className="text-center mb-5">
                            <div className="d-inline-block position-relative">
                                <h2
                                    className="fw-bold mb-3 position-relative"
                                    style={{
                                        fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
                                        letterSpacing: "-0.02em",
                                        
                                        color:"#d63384",
                                    }}
                                >
                                    Nossas Palestrantes
                                </h2>
                                <div 
                                    className="position-absolute"
                                    style={{
                                        bottom: "-8px",
                                        left: "50%",
                                        transform: "translateX(-50%)",
                                        width: "80px",
                                        height: "4px",
                                        background: "linear-gradient(90deg, #d63384, #ff6b9d)",
                                        borderRadius: "2px"
                                    }}
                                />
                            </div>
                            <p 
                                className=" text-black mt-4 opacity-75"
                                style={{
                                    fontSize: "1.1rem",
                                    maxWidth: "600px",
                                    margin: "0 auto",
                                    
                                }}
                            >
                                Conheça as especialistas que irão compartilhar conhecimento e experiência
                            </p>
                        </div>
                    </div>
                </div>

                {/* Cards dos Palestrantes */}
                <div className="row g-4 justify-content-center">
                    {speakers.map((speaker, i) => (
                        <div className="col-lg-4 col-md-6 col-sm-10" key={i}>
                            <div
                                className="card h-100 border-0 position-relative overflow-hidden"
                                style={{
                                    borderRadius: "24px",
                                    background: "rgba(255, 255, 255, 0.95)",
                                    backdropFilter: "blur(20px)",
                                    boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
                                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                                    transform: "perspective(1000px) rotateX(0deg)",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = "perspective(1000px) rotateX(5deg) translateY(-12px)";
                                    e.currentTarget.style.boxShadow = "0 20px 60px rgba(0,0,0,0.2)";
                                    e.currentTarget.style.background = "rgba(255, 255, 255, 1)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = "perspective(1000px) rotateX(0deg) translateY(0)";
                                    e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.1)";
                                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.95)";
                                }}
                            >
                                {/* Container da imagem */}
                                <div                                     
    className="position-relative overflow-hidden"                                     
    style={{ height: "300px", borderRadius: "24px 24px 0 0" }}                                 
>                                     
    <img                                         
        src={speaker.foto}                                         
        className="w-100 h-100 object-fit-cover"                                         
        alt={speaker.nome}                                         
        style={{                                             
            transition: "all 0.4s ease",                                             
            filter: "grayscale(20%) contrast(1.1)",                                         
        }}                                         
        onMouseEnter={(e) => {                                             
            e.currentTarget.style.transform = "scale(1.08)";                                             
            e.currentTarget.style.filter = "grayscale(0%) contrast(1.2)";                                         
        }}                                         
        onMouseLeave={(e) => {                                             
            e.currentTarget.style.transform = "scale(1)";                                             
            e.currentTarget.style.filter = "grayscale(20%) contrast(1.1)";                                         
        }}                                     
    />                                                                          

    {/* Overlay gradiente sutil */}                                     
    <div                                         
        className="position-absolute top-0 start-0 w-100 h-100"                                         
        style={{                                             
            background: "linear-gradient(180deg, transparent 0%, transparent 60%, rgba(0,0,0,0.1) 100%)",                                         
        }}                                     
    />                                      

    {/* Badge especialidade - movido para a base */}                                     
    <div className="position-absolute bottom-0 end-0 m-3">                                         
        <span                                             
            className="badge px-3 py-2 fw-semibold"                                             
            style={{                                                 
                background: "linear-gradient(135deg, #d63384, #ff6b9d)",                                                 
                fontSize: "0.75rem",                                                 
                borderRadius: "10px",                                                 
                textShadow: "0 1px 2px rgba(0,0,0,0.2)",                                                 
                boxShadow: "0 4px 15px rgba(214,51,132,0.3)"                                             
            }}                                         
        >                                             
            {speaker.especialidade}                                         
        </span>                                     
    </div>                                 
</div>

                                {/* Conteúdo do Card */}
                                <div className="card-body p-4">
                                    <h5
                                        className="card-title fw-bold mb-2"
                                        style={{
                                            fontSize: "1.4rem",
                                            color: "#2c3e50",
                                            lineHeight: "1.3"
                                        }}
                                    >
                                        {speaker.nome}
                                    </h5>
                                    <p
                                        className="card-text mb-0"
                                        style={{
                                            fontSize: "1rem",
                                            color: "#6c757d",
                                            fontWeight: "500"
                                        }}
                                    >
                                        {speaker.cargo}
                                    </p>

                                    {/* Linha decorativa animada */}
                                    <div className="mt-3 position-relative overflow-hidden" style={{ height: "3px", borderRadius: "2px", background: "#f1f3f4" }}>
                                        <div
                                            className="position-absolute h-100"
                                            style={{
                                                background: "linear-gradient(90deg, #d63384, #ff6b9d)",
                                                width: "0%",
                                                borderRadius: "2px",
                                                transition: "width 0.6s ease 0.2s"
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.width = "100%";
                                            }}
                                        />
                                    </div>
                                </div>

                                {/* Efeito de borda luminosa */}
                                <div
                                    className="position-absolute top-0 start-0 w-100 h-100 pointer-events-none"
                                    style={{
                                        
                                        borderRadius: "24px",
                                        opacity: "0",
                                        transition: "opacity 0.3s ease"
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.opacity = "1";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.opacity = "0";
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}