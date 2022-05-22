import styled from "styled-components";

export const Loading = styled.div`
  position: fixed;
  z-index: 100;
  left: 50%;
  transform: translateX(-50%);

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