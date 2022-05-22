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

export const UploadForm = styled.form`
 margin-bottom: 30px;
  background-color: #0E131F;
  padding: 20px;
  border-radius: 10px;

  input[type="submit"]{
    padding: 2px 15px;
    width: 100px;
    background-color: #CAC4CE;
    border: none;
    border-radius: 4px;
    font-size: 14px;
    color: #fff;
    letter-spacing: .5px;
    opacity: .8;
    cursor: pointer;

    &:hover{
      opacity: 1;
    }
  }
`;

export const FileInput = styled.input<{valor: boolean}>`
  color: ${props => props.valor ? '#fff' : 'transparent'};
  margin-right: 20px;

  &::-webkit-file-upload-button{
    padding: 6px;
    background-color: #725AC1;
    border: none;
    border-radius: 4px;
    font-size: 14px;
    color: #fff;
    letter-spacing: .5px;
    opacity: .8;
    cursor: pointer;

    &:hover{
      opacity: 1;
    }
  }
`;
