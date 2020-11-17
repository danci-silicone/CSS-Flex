import React from "react";
import styled from "styled-components";
import { GridWrapper, Paragraph1, Paragraph2 } from "./styling";

const Container = styled.div`
  background-color: purple;
  height: 200%;
  width: 100%;

  display: flex; /* or inline-flex */

  justify-content: center;
  align-items: center;
`;

const Item1 = styled.div`
  background-color: orange;
  height: 80px;
  width: 150px;
  margin: 10px;

  align-self: flex-start;
`;

const Item2 = styled.div`
  background-color: orange;
  height: 80px;
  margin: 10px;

  align-self: flex-end;
`;

export const AlignItemsAlignSelf = () => {
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
        align-items: center; /* stretch | flex-start | flex-end | center |
        baseline | first baseline | last baseline | start | end | self-start |
        self-end + ... safe | unsafe; */
      </Paragraph1>
      <Paragraph2>
        <b>Child</b>
        <br />
        align-self: flex-start; /* auto | flex-start | flex-end | center |
        baseline | stretch; */
      </Paragraph2>
    </GridWrapper>
  );
};
