import React from "react";
import styled from "styled-components";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function HeaderInfoCard(props) {
  return (
    <CardFlex className="shadow-sm mt-5 bg-white rounded col-11 col-xl-6 mr-3 p-3">
      <div className="d-flex flex-column">
        <div className="d-flex flex-row align-items-center">
          <ImgIcon src={props.img} />
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text className="">{props.text}</Card.Text>
          </Card.Body>
        </div>
        <Button variant="primary mt-3">Botão para detalhes...</Button>
      </div>
    </CardFlex>
  );
}

const CardFlex = styled.div``;
const ImgIcon = styled.img`
  width: 105px;
  height: 105px;
`;

export default HeaderInfoCard;
