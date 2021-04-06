import React from "react";
import styled from "styled-components";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import Icon1 from "../assets/img/icon1.svg";
import HeaderInfoCard from "./HeaderInfoCard";

function HeaderInfos() {
  return (
    <Container>
      <HeaderInfoCard />
      <HeaderInfoCard />
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
