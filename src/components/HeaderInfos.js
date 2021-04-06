import React from "react";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import Icon1 from "../assets/img/icon1.svg";

function HeaderInfos() {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <div style={{ display: "flex" }}>
          <img src={Icon1} style={{ width: "105px" }} />
          <Card.Body>
            <Card.Title>Título 1</Card.Title>
            <Card.Text>
              Voluptate dolore laborum est consectetur eu ea voluptate. Duis
              minim minim labore non adipisicing aliquip est excepteur ullamco
              tempor adipisicing et. Ad laborum voluptate esse quis pariatur
              duis aute aliqua mollit.
            </Card.Text>
            <Button variant="primary">Botão para detalhes...</Button>
          </Card.Body>
        </div>
      </Card>
    </div>
  );
}

export default HeaderInfos;
