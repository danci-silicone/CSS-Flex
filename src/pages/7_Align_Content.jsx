import React from "react";
import styled from "styled-components";
import { GridWrapper, Paragraph1 } from "./styling";

const Container = styled.div`
  background-color: purple;
  height: 200%;
  width: 100%;

  display: flex; /* or inline-flex */

  flex-flow: row wrap;
  align-content: stretch;
`;

const Item1 = styled.div`
  background-color: orange;

  width: 250px;
  margin: 10px;
`;

const Item2 = styled.div`
  background-color: orange;
  height: 80px;
  width: 150px;
  margin: 10px;
`;

export const AlignContent = () => {
  return (
    <GridWrapper>
      <Container>
        <Item1>One</Item1>
        <Item2>Two</Item2>
        <Item1>Three</Item1>
        <Item1>Four</Item1>
      </Container>
      <Paragraph1>
        <b>Parent</b>
        <br />
        align-content: stretch; /* flex-start | flex-end | center |
        space-between | space-around | space-evenly | stretch | start | end |
        baseline | first baseline | last baseline + ... safe | unsafe; */
      </Paragraph1>
    </GridWrapper>
  );
};
