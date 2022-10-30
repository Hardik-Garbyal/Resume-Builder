import React from 'react'

import '../../styles/home.css'
import Header from "./Header/Header";
import Body from "./Body/Body";

const Home = ()=>{

    return (
        <div className="App">
          <Header />
          <Body />
        </div>
      );
}

export default Home