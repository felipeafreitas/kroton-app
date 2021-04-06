import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import SearchResult from "./components/Searchresult";
import SearchInputs from "./components/SearchInputs";
import HeaderMenu from "./components/HeaderMenu";
import HeaderInfos from "./components/HeaderInfos";



function App() {
  return (
    <div className="App">
      <HeaderMenu />
      <Container>
        <HeaderInfos />
        <SearchInputs />
        <SearchResult />
      </Container>
    </div>
  );
}

export default App;
