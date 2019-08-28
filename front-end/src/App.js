import React from 'react';
import styled from 'styled-components';




const Sidenav = styled.div`
  height: 100%;
  width: 160px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #f1f1f1;
  overflow-x: hidden;
  padding-top: 20px;
  @media (max-height: 450px){
    padding-top: 15px;
  }
`;

const Sidenav_a = styled.a`
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  &:hover {
    color: #f1f1f1;
    background-color: #ddd;
  }
  @media (max-height: 450px){
    font-size: 18px;
  }
`;

const main_div = styled.div`
  margin-left: 160px; /* Same as the width of the sidenav */
  font-size: 28px; /* Increased text to enable scrolling */
  padding: 0px 10px;
`;




const DashBoard = () => (
  <Sidenav>
        <Sidenav_a>About</Sidenav_a>
        <Sidenav_a>other</Sidenav_a>
      </Sidenav>
);


function App() {
  return (
    <div className="App">
      <span>Front-end Test</span>
      
     <DashBoard></DashBoard>

    </div>
  );
}

export default App;
