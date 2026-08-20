
import "./About.css";

function About() {
  return (
    <div className="about">

      <div className="hero">
        <h1>About Me </h1>
        <p>
          Passionate MERN Stack Developer with a dream of building
          modern web applications and working at a top MNC.
        </p>
      </div>

      <div className="about-card">
        <h2>Who Am I?</h2>

        <p>
          Hello! I'm <strong>Rathish</strong>, a passionate MERN Stack
          Developer from Tamil Nadu, India.
        </p>

        <p>
          Although I completed my Bachelor's degree in Biotechnology,
          my passion for technology inspired me to switch into software
          development.
        </p>

        <p>
          Every day I learn new technologies and improve my coding
          skills to become a professional Full Stack Developer.
        </p>
      </div>

      <div className="skills">

        <h2>My Skills</h2>

        <div className="skill-box">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React.js</span>
          <span>Node.js</span>
          <span>Express.js</span>
          <span>MongoDB</span>
          <span>Git & GitHub</span>
        </div>

      </div>

      <div className="journey">

        <h2>My Journey </h2>

        <ul>
          <li> B.Tech Biotechnology Graduate</li>
          <li> Learning MERN Stack Development</li>
          <li> Building Real-world Projects</li>
          <li> Preparing for MNC Interviews</li>
        </ul>

      </div>

      <div className="goal">

        <h2>Career Goal</h2>

        <p>
          My ultimate goal is to become a Software Engineer at a top
          multinational company where I can solve real-world problems,
          work with talented developers, and continuously grow as an
          engineer.
        </p>

      </div>

      <div className="buttons">

        <button
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/rathish-s-bb92402a6/",
              "_blank"
            )
          }
        >
          Connect on LinkedIn
        </button>

        <button
          onClick={() => alert("Thank you for visiting my portfolio ❤️")}
        >
          Say Hello
        </button>

      </div>

    </div>
  );
}

export default About;