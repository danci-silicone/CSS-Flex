import React from "react";
import styled from "styled-components";
import { GridWrapper, Paragraph1, Paragraph2 } from "./styling";

const Container = styled.div`
  background-color: purple;
  height: 100px;
  width: 100%;

  display: flex; /* or inline-flex */
`;

const Item = styled.div`
  background-color: orange;
  height: 80px;
  width: 300px;
  margin: 10px;

  order: 5; /* default is 0 */
`;

export const DisplayOrder = () => {
  return (
    <GridWrapper>
      <Container>
        <Item>1</Item>
        <Item>2</Item>
        <Item>3</Item>
      </Container>
      <Paragraph1>
        <b>Parent</b>
        <br />
        display: flex; /* flex | inline-flex */
      </Paragraph1>
      <Paragraph2>
        <b>Child</b>
        <br />
        order: 5; /* default is 0 */
      </Paragraph2>
    </GridWrapper>
  );
};
