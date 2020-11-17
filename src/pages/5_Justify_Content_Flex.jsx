import React from "react";
import styled from "styled-components";
import { GridWrapper, Paragraph1, Paragraph2 } from "./styling";

const Container = styled.div`
  background-color: purple;
  height: 100px;
  width: 100%;

  display: flex; /* or inline-flex */

  justify-content: center;
`;

const Item1 = styled.div`
  background-color: orange;
  height: 80px;
  width: 150px;
  margin: 10px;
`;

const Item2 = styled.div`
  background-color: orange;
  height: 80px;
  margin: 10px;
  /* flex: 1 0 auto; */
`;

export const JustifyContentFlex = () => {
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
        justify-content: flex-start | flex-end | center | space-between |
        space-around | space-evenly | start | end | left | right ... + safe |
        unsafe;
      </Paragraph1>
      <Paragraph2>
        <b>Child</b>
        <br />
        flex: 1 0 auto;
        <br />
        This is the shorthand for flex-grow, flex-shrink and flex-basis
        combined.
        <br />
        It is recommended that you use this shorthand property rather than set
        the individual properties. The shorthand sets the other values
        intelligently.
      </Paragraph2>
    </GridWrapper>
  );
};
