import React from 'react';
import styled from 'styled-components';
import Header from '../component/Header/Header';
import Body from '../component/Main/Body';
import Footer from '../component/Footer/Footer';

function MainPage(props) {
  const { user } = props;
  return (
    <div>
      <Wrap>
        <Header user={user} />
        <Body user={user} />
      </Wrap>
      <Footer />
    </div>
  );
}

const Wrap = styled.div`
  width: 100%;
  height: auto;
  min-height: calc(100vh - 250px - 170px);
`;

export default MainPage;
