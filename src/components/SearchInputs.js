import React from "react";
import styled from "styled-components";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

function SearchInputs() {
  return (
    <CardFlex className="shadow-sm mb-5 mt-5 bg-white rounded pl-3">
      <Card.Body>
        <Card.Title className="mb-3">Titulo 3</Card.Title>
        <div className="d-flex row flex-wrap">
          <div className="mr-3">
            <Card.Subtitle className="mb-2 text-muted">
              Pergunta 1 ?
            </Card.Subtitle>
            <InputGroup className="mb-3">
              <InputGroup.Prepend></InputGroup.Prepend>
              <FormControl
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
              />
            </InputGroup>
          </div>
          <div className="mr-3">
            <Card.Subtitle className="mb-2 text-muted">
              Pergunta 2 ?
            </Card.Subtitle>
            <InputGroup className="mb-3">
              <InputGroup.Prepend></InputGroup.Prepend>
              <FormControl
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
              />
            </InputGroup>
          </div>
          <div className="mr-3">
            <Card.Subtitle className="mb-2 text-muted">
              Pergunta 3 ?
            </Card.Subtitle>
            <InputGroup className="mb-3">
              <InputGroup.Prepend></InputGroup.Prepend>
              <FormControl
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
              />
            </InputGroup>
          </div>
          <Button>
            <i class="fas fa-search"></i>
          </Button>
        </div>
      </Card.Body>
    </CardFlex>
  );
}

const CardFlex = styled.div``;

export default SearchInputs;
