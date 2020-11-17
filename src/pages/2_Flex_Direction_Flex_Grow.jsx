import React from "react";
import styled from "styled-components";
import { GridWrapper, Paragraph1, Paragraph2 } from "./styling";

const Container = styled.div`
  background-color: purple;
  height: 300px;
  width: 100%;

  display: flex; /* or inline-flex */
  flex-direction: column; /* or row-reverse | column | column-reverse; */
`;

const Item1 = styled.div`
  background-color: orange;
  height: 80px;
  width: 150px;
  margin: 10px;

  order: 5; /* default is 0 */
`;

const Item2 = styled.div`
  background-color: orange;
  height: 80px;
  margin: 10px;

  order: 5; /* default is 0 */
  flex-grow: 4; /* default 0 */
`;

export const FlexDirectionFlexGrow = () => {
  return (
    <GridWrapper>
      <Container>
        <Item1>1</Item1>
        <Item2>2</Item2>
        <Item1>3</Item1>
        <Item1>4</Item1>
      </Container>
      <Paragraph1>
        <b>Parent</b>
        <br />
        flex-direction: row; /* row | row-reverse | column | column-reverse */
      </Paragraph1>
      <Paragraph2>
        <b>Child</b>
        <br />
        flex-grow: 4; /* default 0 */
      </Paragraph2>
    </GridWrapper>
  );
};
