import React from "react";
import Main from "./components/Main";
import Wrapper from "./components/Wrapper";
import Hero from "./components/Hero";


function App() {
  return (
   <div className='App'> 
<Wrapper>
  <Hero />
  <Main />
</Wrapper>
   </div>
  );
}

export default App;
