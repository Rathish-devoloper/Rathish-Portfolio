// // //import "./App.css";
// // //import Input from "./components/input/input";
// // //import Button from "./components/button/button";
// // //import Dropdown from "./components/Dropdown/Dropdown";
// // //import {useState,useEffect } from "react";
// // //import CircularColor from "./components/Progress/progress";
                   

// //   // let countNew = 0
// // //function App() {
// //   //const names = ["Rathu", "Harini", "Viji"];
// //   //const[count,setCount] = useState(80);
// //  //const[showProgress,setShowProgress]=
// //    // useState(false);
// //    //useEffect(() => {
// //     //console.log(count);
// //    //},[count]
// //  // );
// //   // function increaseCount (){
    
// //     //countNew =countNew + 5
// //     //`
// //     // console.log(countNew)
   
// //    //}
// //   function App(){
// //   return (
// //     /*<>
// //      <div className="App">
// //         <header className="Appheader">
// //           <div className="loginbox">
// //             <h2 className="hdr_name">Members Login</h2>
// //             <div className="inputt">
// //               <label>email</label>
// //               <input type="email" placeholder="email" />
// //               <label>password</label>
// //               <input type="password" placeholder="password" />
// //               <label>DOB</label>
// //               <input type="date" placeholder="DOB" />
// //               </div>
// //               <div className="btn">
// //               <button onClick={()=>setCount(count+5)}>increment</button>
// //               <button onClick={()=>setCount(count-5)}>decrement</button>
// //               {count}
// //               </div>
// //             <button onClick={() =>increaseCount() }>increasee</button>
// //            {countNew}
// //             <div className="dropdown">
// //               <Dropdown option={names}/>
// //             </div>
// //             <div>
// //             <button onClick={() => setShowProgress(!showProgress)}>loading with RGB </button>
// //             {showProgress&&<CircularColor/>}
// //             </div>
// //           </div>
// //         </header>
// //       </div>
// //     </>*/
     
     
     


/*import Home from "./Pages/Home/Home";
import About from "./Pages/Aboutus/About";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </>
  );
}

export default App;*/

import './App.css'
import Home from "./Pages/Home/Home";
import About from "./Pages/Aboutus/About"
import { Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import Contact from './Pages/Contact/Contact'

function App(){
  return(
    <>
    <Navbar/>
  
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Home" element={<Home />} />
    <Route path="/About" element={<About/>} />
    <Route path="/Contact" element={<Contact/>} />
  </Routes>
    </>
  );
}
export default App;