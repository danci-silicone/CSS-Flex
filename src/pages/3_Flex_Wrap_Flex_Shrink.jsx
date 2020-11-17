import React from "react";
import styled from "styled-components";
import { GridWrapper, Paragraph1, Paragraph2 } from "./styling";

const Container = styled.div`
  background-color: purple;
  height: 100px;
  width: 900px;

  display: flex; /* or inline-flex */
  flex-direction: column; /* or row-reverse | column | column-reverse; */

  flex-wrap: wrap; /* nowrap | wrap | wrap-reverse; */
`;

const Item1 = styled.div`
  background-color: orange;
  height: 80px;
  width: 270px;
  margin: 10px;

  order: 5;
`;

const Item2 = styled.div`
  background-color: orange;
  height: 80px;
  margin: 10px;

  order: 5;

  flex-shrink: 4; /* default 1 */
`;

export const FlexWrapFlexShrink = () => {
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
        flex-wrap: wrap; /* nowrap | wrap | wrap-reverse; */
      </Paragraph1>
      <Paragraph2>
        <b>Child</b>
        <br />
        flex-shrink: 4; /* default 1 */
      </Paragraph2>
    </GridWrapper>
  );
};
