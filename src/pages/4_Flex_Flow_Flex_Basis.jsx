import React from "react";
import styled from "styled-components";
import { GridWrapper, Paragraph1, Paragraph2, Paragraph3 } from "./styling";

const Container = styled.div`
  background-color: purple;
  height: 100px;
  width: 100%px;

  display: flex; /* or inline-flex */

  flex-flow: row wrap;
`;

const Item1 = styled.div`
  background-color: orange;
  height: 80px;
  width: 270px;
  margin: 10px;

  order: 5; /* default is 0 */
`;

const Item2 = styled.div`
  background-color: orange;
  height: 80px;
  margin: 10px;

  order: 5; /* default is 0 */

  flex-basis: 20%; /* default auto */
`;

export const FlexFlowFlexBasis = () => {
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
        flex-flow: row wrap; /* nowrap | wrap | wrap-reverse; */
      </Paragraph1>
      <Paragraph2>
        <b>Child</b>
        <br />
        flex-basis: auto; /* default auto */
      </Paragraph2>
      <Paragraph3>
        <b>Važno!!!</b> <br />
        Makni paragrafe da bi dobio kako radi zapravo.
      </Paragraph3>
    </GridWrapper>
  );
};
