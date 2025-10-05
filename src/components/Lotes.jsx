import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

export default function Lotes() {
  const lots = [
    { tipo: "1° Lote", preco: "R$ --", ate: "22/09", link: "https://pay.kiwify.com.br/Esvjo0D" },
    { tipo: "2° Lote", preco: "R$ 47,00", ate: "04/10", link: "https://pay.kiwify.com.br/kzXPqay" },
    { tipo: "3° Lote", preco: "R$ 57,00", ate: "11/10", link: "https://pay.kiwify.com.br/jadZvcz" },
  ];

  return (
    <section id="lotes" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-2">Compre seu ingresso. </h2>
        <div className="text-center">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <p
                className="mb-5"
                style={{
                  fontSize: "1.1rem",
                  color: "#666",
                  lineHeight: "1.6",
                  fontWeight: "300"
                }}
              >
                "Participe presencialmente, local com acessibilidade. <br /> 
                Não Perca essa Oportunidade! Cuide de você para cuidar melhor do outro!"
              </p>


            </div>
          </div>
        </div>

          <Row>
            {lots.map((l, i) => (
              <Col md={4} className="mb-3" key={i}>
                <Card className="h-100 text-center shadow-sm p-3">
                  <Card.Title>{l.tipo}</Card.Title>
                  <Card.Text>{l.preco}</Card.Text>
                  <Card.Text><small>Até {l.ate}</small></Card.Text>
                  <Button href={l.link} variant="danger" size="sm">Comprar</Button>
                </Card>
              </Col>
            ))}
          </Row>

      </Container>
    </section>
  );
}
