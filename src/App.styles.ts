import styled from 'styled-components'

export const Container = styled.div`
  background-color: #39393A;
  min-height: 100vh;
  `;

export const Area = styled.div`
  max-width: 950px;
  margin: 0 auto;
  padding: 30px;
`;

export const ImageList = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
`;