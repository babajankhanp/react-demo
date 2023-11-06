
import styled from 'styled-components';
import React from 'react'

const Home = () => {
    console.log("hello")
  return (
<HomeContainer>
    <HomeTitle>Welcome to the Home Page</HomeTitle>
  </HomeContainer>
  )
}

const HomeContainer = styled.div`
  background-image: url('../assests/pill.jpeg'); // No need for ".." in the URL
  height: 100vh;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;


const HomeTitle = styled.h1`
  color: white;
  font-size: 2rem;
`;

export default Home;
