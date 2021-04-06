import React from "react";
import styled from "styled-components";

import HeaderInfoCard from "./HeaderInfoCard";

import infos from "../infos.json";

function HeaderInfos() {
  return (
    <Container>
      {infos.map((element) => {
        return (
          <HeaderInfoCard
            img={element.img}
            title={element.title}
            text={element.text}
          />
        );
      })}
    </Container>
  );
}

export default HeaderInfos;

const Container = styled.div`
  display: flex;
  @media (max-width: 992px) {
    display: flex;
    flex-wrap: nowrap;
    height: 300px;
    overflow-x: auto;
    width: auto;
  }
`;
