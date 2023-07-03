import React, { useState } from 'react';
import styled from 'styled-components';
import MainCategory from './MainCategory';
import Ranking from './Ranking';
import Recommend from './Recommend';
import CookingTip from './CookingTip';

function Body(props){
  const { user } = props;
  const [rankRecipe, setRankRecipe] = useState([
    { id: 1, img: './images/recipe_thumbnail.jpg', title: '소세지 오므라이스', starRate: '5.0', starCount: '999+', opinionCount: '499+', rank: 1 },
    { id: 2, img: './images/recipe_thumbnail.jpg', title: '소세지 오므라이스', starRate: '5.0', starCount: '999+', opinionCount: '499+', rank: 2 },
    { id: 3, img: './images/recipe_thumbnail.jpg', title: '소세지 오므라이스', starRate: '5.0', starCount: '999+', opinionCount: '499+', rank: 3 },
    { id: 4, img: './images/recipe_thumbnail.jpg', title: '소세지 오므라이스스스스스스스스스스스', starRate: '5.0', starCount: '999+', opinionCount: '499+', rank: 4 },
    { id: 5, img: './images/recipe_thumbnail.jpg', title: '소세지 오므라이스', starRate: '5.0', starCount: '999+', opinionCount: '499+', rank: 5 },
    { id: 6, img: './images/recipe_thumbnail.jpg', title: '소세지 오므라이스', starRate: '5.0', starCount: '999+', opinionCount: '499+', rank: 6 },
    { id: 7, img: './images/recipe_thumbnail.jpg', title: '소세지 오므라이스', starRate: '5.0', starCount: '999+', opinionCount: '499+', rank: 7 },
    { id: 8, img: './images/recipe_thumbnail.jpg', title: '소세지 오므라이스', starRate: '5.0', starCount: '999+', opinionCount: '499+', rank: 8 },
    { id: 9, img: './images/recipe_thumbnail.jpg', title: '소세지 오므라이스', starRate: '5.0', starCount: '999+', opinionCount: '499+', rank: 9 },
    { id: 10, img: './images/recipe_thumbnail.jpg', title: '소세지 오므라이스', starRate: '5.0', starCount: '999+', opinionCount: '499+', rank: 10 },
    { id: 11, img: './images/recipe_thumbnail.jpg', title: '소세지 오므라이스', starRate: '5.0', starCount: '999+', opinionCount: '499+', rank: 11 },
  ]);
  const [tip, setTip] = useState([
    { id: 1, img: './images/tip_thumbnail.jpg', title: '팁 제목', heartCount: '999+', opinionCount: '499+' },
    { id: 2, img: './images/tip_thumbnail.jpg', title: '팁 제목', heartCount: '999+', opinionCount: '499+' },
    { id: 3, img: './images/tip_thumbnail.jpg', title: '팁 제목', heartCount: '999+', opinionCount: '499+' },
    { id: 4, img: './images/tip_thumbnail.jpg', title: '팁 제목', heartCount: '999+', opinionCount: '499+' },
    { id: 5, img: './images/tip_thumbnail.jpg', title: '팁 제목', heartCount: '999+', opinionCount: '499+' },
    { id: 6, img: './images/tip_thumbnail.jpg', title: '팁 제목', heartCount: '999+', opinionCount: '499+' },
    { id: 7, img: './images/tip_thumbnail.jpg', title: '팁 제목', heartCount: '999+', opinionCount: '499+' },
    { id: 8, img: './images/tip_thumbnail.jpg', title: '팁 제목', heartCount: '999+', opinionCount: '499+' },
  ]);
  return(
    <StyledBody>
      <Contents>
        {/* <BannerArea>
          <MainBanner />
            <BannerText>
              음식에 대한 사랑처럼{'\n'}
              {'     '}진실된 사랑은 없다.
            </BannerText>
        </BannerArea> */}
        <MainCategory />
        <Ranking rankRecipe={rankRecipe} />
        <Recommend user={user} />
        <CookingTip tip={tip}/>
      </Contents>
    </StyledBody>
  );
}

const StyledBody = styled.div`
  width: 100%;
`;
const Contents = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  @media screen and (max-width: 767px){
    max-width: 400px;
  }
`;
const BannerArea = styled.div`
  position: relative;
  width: 100%;
  padding-top: 25%;
  margin-top: 20px;
  @media screen and (max-width: 767px){
    padding-top: 40%;
    margin-top: 10px;
  }
`;
const MainBanner = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 10px;
  background: url('./images/banner.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  width: 100%;
  @media screen and (max-width: 767px){
    height: 100%;
  }
`;
const BannerText = styled.p`
  font-weight: bold;
  color: white;
  line-height: 1.5;
  white-space: pre-wrap;
  padding: 20px;
  display: block;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(0, -50%);
  @media screen and (max-width: 767px){
    font-size: 1rem;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px){
    font-size: 1.8rem;
  }
  @media screen and (min-width: 1024px){
    font-size: 2rem;
    word-spacing: 5px;
  }
`;

export default Body;