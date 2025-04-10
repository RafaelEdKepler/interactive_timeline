import styled from "styled-components";

export const TimeLinePageContainer = styled.div`
  display: flex;
`;

export const TimeLineContainer = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  height: 60px;
  background-color: ${props => props.color};
  width: ${props => props.width}px;
  left: ${props => props.left}px;
  top: ${props => props.top}px;
`;