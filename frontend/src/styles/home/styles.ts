import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;

  h1,
  h2 {
    padding: 0;
    margin: 0;
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;

export const Subtitle = styled.h2`
  font-size: 15px;
`;
