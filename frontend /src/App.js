import React, { Component } from 'react';
import './App.css';
import styled from "styled-components"; 

const Page = styled.div`
  width: 100%;
  margin: auto 0;
  border: 1px solid red;
  display: flex;
  align-items: center;
  flex-direction: column;
`
const Header = styled.div`
  border: 1px solid black;
  width: 90%;
  height: 300px;
`
const Body = styled.div`
  width: 90%;
  height: auto;
  border: 1px solid blue; 
  display: flex; 
  flex-direction: row;
  @media(max-width: 600px){
    flex-direction: column;
  }
`
const NewsColumn = styled.section`
  background: lightgray;
  width: 25%;
  height: auto; 
  margin: 10px;
  display: flex;
  align-items: center;
  flex-direction: column; 
  flex-wrap: none;
  @media(max-width: 900px){
    width: 20%;
  }
  @media(max-width: 600px){
    width: 100%;
  }
`
const NewsBox = styled.section`
  background: lightgray;
  width: 50%;
  height: auto;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  @media(max-width: 600px){
    width: 100%;
  }
`
const BoxCard = styled.div`
  background: gray;
  width: 90%;
  height: 250px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  @media(max-width: 900px){
    width: 40%;
  }
  @media(max-width: 600px){
    width: 100%;
  }
`

class App extends Component {
  render() {
    return (
      <Page>
        <Header />
        <Body>
          <NewsColumn>
            <BoxCard />
            </NewsColumn>
          <NewsBox>
          <BoxCard />
            </NewsBox>
          <NewsColumn>
          <BoxCard />
            </NewsColumn>
        </Body>
      </Page>
    );
  }
}

export default App;
