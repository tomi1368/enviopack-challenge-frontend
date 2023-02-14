import styled from "styled-components";

export const GridStructure = styled("div")`
  display: grid;
  width: 90%;
  grid-template-columns: ${(props) =>
    `repeat(auto-fill, minmax(${props.width}, 1fr))`};
  justify-content: center;
  max-width: ${(props) => props.maxWidth};
  margin: 0 auto;
  gap: 20px;
`;
