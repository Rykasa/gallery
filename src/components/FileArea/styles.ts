import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 30px;
  background-color: #0E131F;
  padding: 20px;
  border-radius: 10px;
`;

export const FileInput = styled.input<{valor: boolean}>`
  color: ${props => props.valor ? '#fff' : 'transparent'};
  margin-right: 20px;
 

  &::-webkit-file-upload-button{

  }
`;