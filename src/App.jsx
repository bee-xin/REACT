import { useState } from "react";
import Header from "./header"
import Section from "./section"
import About from "./About";

function App() {

  const sangram=100;
  const [state,setState]= useState();

  const func=()=>{

  }

  return (
    <>
    <Header/>
    <Section/>
    <About/>
    </>
  )
}

export default App