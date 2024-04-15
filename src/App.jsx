import React from "react"
import Navbar from "./Navbar"
import Banner from "./Banner"
import Choice from "./Choice"
import Phase from "./Phase"
import Phase1 from "./phase1"



function App() {

    
   
  return (
 <>
 

 <div
        
        className="min-h-screen   max-w-[100vw]  overflow-hidden  main"
      >
        <div  className=" max-w-[1700px] mx-auto  ">
      <Navbar/>
      <Banner />
      <Choice/>
      <Phase/>
      {/* <Phase1/> */}
      <h1 className="py-20"></h1>
        </div>
        </div>
 


 </>
  )
}

export default App
