import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function CardResult(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.texto}</Card.Text>
        <Button variant="outline-primary">Acessar</Button>
      </Card.Body>
    </Card>
  );
}

export default CardResult;
