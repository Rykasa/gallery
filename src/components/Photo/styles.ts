import styled from "styled-components";

export const Container = styled.div`
  background-color: #00241B;
  padding: 10px;
  border-radius: 2px;
  position: relative;
  overflow: hidden;

  span{
    color: #fff;
    text-align: left;
    font-size: 14px;
    display: inline-block;
    width: 95%;
  }

  .delete-btn{
    position: absolute;
    right: 4px;
    bottom: 2px;
    cursor: pointer;
    opacity: 0.6;

    &:hover{
      opacity: 1;
    }
  }
`;

export const Image = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
`;