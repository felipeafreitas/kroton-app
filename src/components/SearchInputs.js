import React from "react";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

function SearchInputs() {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Titulo 3</Card.Title>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>
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
          <div>
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
          <div>
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
        </div>
      </Card.Body>
    </Card>
  );
}

export default SearchInputs;
