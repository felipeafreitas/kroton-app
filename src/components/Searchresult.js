import React from "react";
import styled from "styled-components";

import data from "../data.json";
import img from "../assets/img/student.svg";
import CardResult from "./CardResult";

function Searchresult() {
  return (
    <div>
      <h1> Título 4</h1>
      <ContainerResults>
        {data.map((element) => {
          return (
            <CardResult
              img={element.img}
              title={element.title}
              texto={element.texto}
            />
          );
        })}
      </ContainerResults>
    </div>
  );
}

export default Searchresult;

const ContainerResults = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-height: 342px;

  @media (max-width: 992px) {
    display: flex;
    flex-wrap: nowrap;
    height: 300px;
    overflow-x: auto;
    width: auto;
  }
`;
