// import React from "react";
// import {Link} from "react-router-dom";

// function Home(){
//     return(
//     <>
//     <h1>this is home page</h1>
//     <Link to="/About">
//     <button>click here to navigate about</button>
//     </Link>
//     </>
//     )
// }
// export default Home;

/*import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h1>This is Home Page</h1>

      <Link to="/About">
        <button>Click Here To Navigate About</button>
      </Link>
    </>
  );
}

export default Home;*/

import image from "../../assets/rathish.jpeg";
import image2 from "../../assets/portfolio.jpg";
import image3 from "../../assets/portfolio2.jpg";
import image4 from "../../assets/portfolio3.jpg";
import Grid from "@mui/material/Grid";
import { useSelector,useDispatch } from "react-redux";
import { useEffect } from "react";


function Home() {
   const id = useSelector((state) => state.id);

   const count =  useSelector((state) => state);

   useEffect(()=>{
console.log(count)
   },[count])

  const cards = [
    {image:image2,
     title:"title1",
     description:"this is description" 
    },
    {
      image:image3,
      title:"title2",
      description:"this is also description",
    },
    {image:image4,
     title:"title3",
     description:"this is also a description",
    }
  ];

  //const dispatch = useDispatch()
  return (
    <>
    <Grid size={{xs:12,md:4}}>
      <div className="black">
        <div className="imge">
          <img src={image} className="image" alt="rathish" />
        </div>
      </div>
      </Grid>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Grid container spacing={4}
      alignitems="centre"
      justifyContent="space-between"
      >
       
      <div className="profile-container">
        <Grid size={{xs:12,md:4}}>
        <div className="profile">
          <h1 className="name">Rathish</h1>
        </div>
        </Grid>
        <Grid size={{xs:12,md:4}}>
        <div className="spann">
          <span>
            <strong>14  </strong>posts
          </span>
          <span>
            <strong>976 </strong>followers
          </span>
          <span>
            <strong>495 </strong>following
          </span>
        </div>
        </Grid>

        <Grid size={{xs:12,md:4}}>
        <div className="follow-btn">
          <button className="follow" onClick={()=>window.open("https://www.instagram.com/i_am_rathu_?igsh=MWkxZDNxdmsyYjZ1Ng==","_blank")}>
            follow
          </button>
          <br />
          <br />
        </div>
        </Grid>
      </div>
      </Grid>
      
      <div className="para">
        <p>
          This is my portfolio i want to join an MNC company as developer
          basically i am not a cse core student but my dream is to become
          software devoloper
        </p>
        <button className="buttonn">More info➝</button>
      </div>
      <div className="fixbtn ">
      <button className="fixedbtn">Made With Material Tailwind ✨</button>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1 className="h1">Check My Latest Posts</h1>
      <br />
      <br />
      <div className="post-container">

        <Grid container >
        <Grid size={{ lg:4,  xs: 6, md: 3 }}>
          <div className="box1">
            <img src={image2} className="image2" alt="this is my post" />
            <p className="para2"> This is my first post in my portfolio</p>
            <button className="imgbtn1">More info➝</button>
          </div>
        </Grid>
      <Grid size={{  lg:4, xs: 6, md: 3 }}>
          <div className="box2">
            <img src={image3} className="image3" alt="this is my post" />
            <p className="para2"> This is my second post in my portfolio </p>
            <button className="imgbtn1">More info➝</button>
          </div>
        </Grid>

      <Grid size={{ lg:4,  xs: 6, md: 3 }}>
          <div className="box3">
            <img src={image4} className="image4" alt="this is my post" />
            <p className="para2"> This is my third post in my portfolio</p>
            <button className="imgbtn1">More info➝</button>
          </div>
          </Grid>
          <Grid size={{ lg:4,  xs: 6, md: 3 }}>
        <div className="morebtn">
          <button className="morebutton" onClick={()=>{
            document.getElementById("more-posts")?.scrollIntoView({
              behavior:"smooth",
              
            })
          }}>More posts➝</button>
        </div> 
        </Grid>
        
        </Grid>
      </div>
      <div className="header">
        <h1>Say hi</h1>
        <p className="lastp">Any questions or remarks?Write a message...</p>
      </div>
      <div className="last-container">
        <div className="form-box">
          <div className="row">
            <div className="input-box">
              <label>First Name</label>
              <input type="text" placeholder="eg. Lucas" />
            </div>

            <div className="input-box">
              <label>Last Name</label>
              <input type="text" placeholder="eg. Jones" />
            </div>
          </div>

          <div className="input-box">
            <label>Email</label>
            <input type="email" placeholder="eg. lucas@mail.com" />
          </div>

          <div className="input-box">
            <label>Your Message</label>
            <textarea placeholder="Type your message"></textarea>
          </div>
          <div className="btnn">
            <button className="send-btn" onClick={() => alert("Message send")}>
              SEND MESSAGE
            </button>
          </div>
        </div>

        <div className="contactusbox">
          <h1>Contact Information</h1>
          <p>
            Fill up the form and our Team will get back to you within 24 hours.
          </p>

          <span>
            <strong>📞</strong> +91 7904313673
          </span>
          <span>
            <strong>✉️</strong> rathish2252005@mail.com
          </span>
          <span>
            <strong>🎫</strong> Open Support Ticket
          </span>
        </div>
      </div>
      <div className="madebyme">
        <p>@This website is made by Rathish</p>
      </div>
      <br/><br/>
      {cards.map((value,index)=>(
       <div id="more-posts" key={index} className="card">
       <img src ={value.image} alt={value.title} width="200"/>
       <h2>{value.title}</h2>
       <p>{value.description}</p>
       {id}
       </div> 
      ))}
        
    </>
  );
}
export default Home;
