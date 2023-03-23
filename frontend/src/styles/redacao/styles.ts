import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10px 40px;

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

export const TextArea = styled.textarea`
    height: 400px;
    border: 1px solid gray;
    border-radius: 5px;
    padding: 20px;
`;

export const ButtonsContainer = styled.div`
    display: flex;
    gap: 20px;
`;