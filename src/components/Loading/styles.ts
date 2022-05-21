import styled from "styled-components";

export const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 90px;

  .loading{
    animation: spin 2s infinite ease-in-out;
  }

  @keyframes spin{
    from{
      transform: rotate(0)
    }
    to {
      transform: rotate(365deg)
    }
  }
`;