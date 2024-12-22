import React, { useState } from 'react'

function About() {
    const [state,setState]=useState(false);

    const func =()=>{
        setState(true);
    }       

  return (
    <>
    <button onClick={func}>Click</button>
{state===true &&
    <div>About</div>
}
    <div>About us</div>
    </>
  )
}

export default About;