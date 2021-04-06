import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import styled from "styled-components";

function CardResult(props) {
  return (
    <CardFlex className="d-flex flex-column border-0 rounded col-xl-3 mb-3">
      <div className="bg-white rounded">
        <Card.Img variant="top" src={props.img} />
        <Card.Body className="d-flex flex-column">
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.texto}</Card.Text>
          <Button variant="outline-primary">Acessar</Button>
        </Card.Body>
      </div>
    </CardFlex>
  );
}
const CardFlex = styled.div`
  min-width: 260px;
  height: auto;
`;

export default CardResult;
