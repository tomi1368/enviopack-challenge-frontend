import styled from "styled-components";

export const FlexContainer = styled("div")`
  display: flex;
  align-items: ${(props) => (!!props.align ? props.align : "stretch")};
  justify-content: ${(props) => (!!props.justify ? props.justify : "stretch")};
  flex-direction: ${(props) => (!!props.direction ? props.direction : "row")};
  flex-wrap: ${(props) => (!!props.wrap ? props.wrap : "nowrap")};
  gap: ${(props) => props.gap};
  ${(props) => !!props.style && props.style};
`;
