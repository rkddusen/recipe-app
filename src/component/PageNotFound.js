import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

function PageNotFound() {
  const navigate = useNavigate();

  const moveHome = () => {
    navigate(`./`);
  }
  return (
    <StyledPage>
      <Content>
        <PageNotFoundImg />
        <GoHome onClick={moveHome}>홈으로 돌아가기 {'>'}</GoHome>
      </Content>
    </StyledPage>
  );
}

const StyledPage = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 100px;
`;
const Content = styled.div`
  text-align: center;
`;
const PageNotFoundImg = styled.div`
  width: 800px;
  height: 500px;
  background-image: url('./images/PageNotFound.png');
  background-size: 100%;
  background-repeat: no-repeat;
`;
const GoHome = styled.p`
  font-size: 20px;
  cursor: pointer;
`;

export default PageNotFound;
