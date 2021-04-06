import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";

import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import SearchResult from "./components/Searchresult";
import SearchInputs from "./components/SearchInputs";
import HeaderMenu from "./components/HeaderMenu";
import HeaderInfos from "./components/HeaderInfos";

function App() {
  return (
    <FullContainer>
      <HeaderMenu />
      <Container>
        <HeaderInfos />
        <SearchInputs />
        <SearchResult />
        <div className="d-flex flex-column text-center text-warning font-weight-bold">
          <p>
            <a>+ Carregar mais cursos</a>
          </p>
        </div>
      </Container>
    </FullContainer>
  );
}

export default App;

const FullContainer = styled.div`
  background-color: #e5e5e5;
`;
