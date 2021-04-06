import React from "react";
import styled from 'styled-components'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import Icon1 from "../assets/img/icon1.svg";

function HeaderInfoCard() {
  return (
    <CardFlex className="shadow-sm mt-5 bg-white rounded col-11 col-xl-6 mr-3 p-3">
      <div className="d-flex flex-column">
        <div className="d-flex flex-row">
          <img src={Icon1} style={{ width: "105px" }} />
          <Card.Body>
            <Card.Title>Título 1</Card.Title>
            <Card.Text>
              Voluptate dolore laborum est consectetur eu ea voluptate.
            </Card.Text>
          </Card.Body>
        </div>
        <Button variant="primary mt-3">Botão para detalhes...</Button>
      </div>
    </CardFlex>
  );
}

const CardFlex = styled.div``

export default HeaderInfoCard;
