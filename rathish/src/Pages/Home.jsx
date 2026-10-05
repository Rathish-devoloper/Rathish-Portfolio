import React, { useEffect, useRef } from "react";
import profileImage from "../../src/assets/WhatsApp Image 2026-10-05 at 6.22.25 PM.jpeg";
import "./Home.css";

function Home() {
      const cursorRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);

    const name = form.get("name");
    const email = form.get("email");
    const message = form.get("message");

    const subject = encodeURIComponent(
      `Portfolio Contact - ${name}`
    );

    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    window.location.href =
      `mailto:rathish2252005@mail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="portfolio">
    <div
        ref={cursorRef}
        className="cursor-glow"
      ></div>
      {/* NAVBAR */}
      <header className="navbar">
        <div className="nav-container">

          <button
            className="logo"
            onClick={() => scrollToSection("home")}
          >
            R<span>.</span>
          </button>

          <nav>
            <button onClick={() => scrollToSection("home")}>
              Home
            </button>

            <button onClick={() => scrollToSection("about")}>
              About
            </button>

            <button onClick={() => scrollToSection("skills")}>
              Skills
            </button>

            <button onClick={() => scrollToSection("projects")}>
              Projects
            </button>

            <button onClick={() => scrollToSection("contact")}>
              Contact
            </button>
          </nav>

          <a
            href="mailto:rathish2252005@mail.com"
            className="nav-button"
          >
            Let's Talk
          </a>

        </div>
      </header>


      {/* HERO */}
      <section id="home" className="hero">

        <div className="hero-container">

          <div className="hero-content">

            <p className="small-title">
              HELLO, I'M
            </p>

            <h1>
              Rathish<span>.</span>
            </h1>

            <h2>
              MERN Stack Developer
            </h2>

            <p className="hero-description">
              Aspiring Software Developer focused on building
              modern, responsive and user-friendly web applications
              using JavaScript and the MERN stack.
            </p>

            <div className="hero-buttons">

              <button
                className="primary-button"
                onClick={() => scrollToSection("projects")}
              >
                View My Work →
              </button>

              <button
                className="secondary-button"
                onClick={() => scrollToSection("contact")}
              >
                Let's Connect
              </button>

            </div>

            <div className="hero-stats">

              <div>
                <strong>01</strong>
                <span>Developer</span>
              </div>

              <div>
                <strong>02</strong>
                <span>MERN Stack</span>
              </div>

              <div>
                <strong>03</strong>
                <span>Problem Solver</span>
              </div>

            </div>

          </div>


          {/* PROFILE PHOTO */}
          <div className="hero-image-wrapper">

            <div className="image-background"></div>

            <div className="profile-card">

              <img
                src={profileImage}
                alt="Rathish"
                className="profile-image"
              />

              <div className="image-info">
                <span>RATHISH</span>
                <small>SOFTWARE DEVELOPER</small>
              </div>

            </div>

            <div className="floating-label">
              MERN
            </div>

            <div className="floating-year">
              2026
            </div>

          </div>

        </div>

      </section>


      {/* ABOUT */}
      <section id="about" className="section">

        <div className="section-container">

          <div className="section-heading">
            <span>01</span>
            <div>
              <p>GET TO KNOW ME</p>
              <h2>About Me</h2>
            </div>
          </div>


          <div className="about-grid">

            <div className="about-text">

              <h3>
                From Biotechnology to
                <span> Software Development.</span>
              </h3>

              <p>
                I am Rathish, a B.Tech Biotechnology graduate
                with a strong interest in software development.
                My goal is to build a career as a professional
                software developer.
              </p>

              <p>
                I have completed MERN Stack development training
                and continuously work on improving my JavaScript,
                React, Node.js, Express.js and MongoDB skills.
              </p>

              <p>
                I enjoy turning ideas into functional and
                user-friendly web applications and solving
                problems through code.
              </p>

            </div>


            <div className="about-details">

              <div className="detail-box">
                <span>Education</span>
                <strong>B.Tech Biotechnology</strong>
              </div>

              <div className="detail-box">
                <span>Current Focus</span>
                <strong>MERN Stack Development</strong>
              </div>

              <div className="detail-box">
                <span>Experience</span>
                <strong>MERN Developer Intern</strong>
              </div>

              <div className="detail-box">
                <span>Goal</span>
                <strong>Software Developer</strong>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* SKILLS */}
      <section id="skills" className="section dark-section">

        <div className="section-container">

          <div className="section-heading">
            <span>02</span>
            <div>
              <p>WHAT I WORK WITH</p>
              <h2>Skills</h2>
            </div>
          </div>


          <div className="skills-grid">

            <div className="skill-card">
              <div className="skill-number">01</div>
              <h3>JavaScript</h3>
              <p>
                Modern JavaScript, ES6+, functions, arrays,
                objects, DOM and problem solving.
              </p>
            </div>

            <div className="skill-card">
              <div className="skill-number">02</div>
              <h3>React.js</h3>
              <p>
                Components, props, state, hooks, routing
                and responsive interfaces.
              </p>
            </div>

            <div className="skill-card">
              <div className="skill-number">03</div>
              <h3>Node.js</h3>
              <p>
                Backend development using Node.js and
                REST API architecture.
              </p>
            </div>

            <div className="skill-card">
              <div className="skill-number">04</div>
              <h3>Express.js</h3>
              <p>
                Creating APIs, middleware, authentication
                and backend application structure.
              </p>
            </div>

            <div className="skill-card">
              <div className="skill-number">05</div>
              <h3>MongoDB</h3>
              <p>
                Database design, CRUD operations and
                MongoDB integration with backend applications.
              </p>
            </div>

            <div className="skill-card">
              <div className="skill-number">06</div>
              <h3>HTML & CSS</h3>
              <p>
                Responsive layouts, modern UI design,
                Flexbox, Grid and animations.
              </p>
            </div>

            <div className="skill-card">
              <div className="skill-number">07</div>
              <h3>Git & GitHub</h3>
              <p>
                Version control, repositories and
                managing software projects.
              </p>
            </div>

            <div className="skill-card">
              <div className="skill-number">08</div>
              <h3>REST APIs</h3>
              <p>
                Building and consuming APIs using
                Axios, Express and JSON.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* PROJECTS */}
      <section id="projects" className="section">

        <div className="section-container">

          <div className="section-heading">
            <span>03</span>
            <div>
              <p>MY RECENT WORK</p>
              <h2>Projects</h2>
            </div>
          </div>


          <div className="projects-grid">

            <article className="project-card featured-project">

              <div className="project-top">
                <span>01 / FULL STACK</span>
                <span>2026</span>
              </div>

              <h3>HostelMate</h3>

              <p>
                A full-stack hostel management application
                built using React.js, Node.js, Express.js
                and MongoDB.
              </p>

              <div className="project-tech">
                <span>React</span>
                <span>Node.js</span>
                <span>Express</span>
                <span>MongoDB</span>
              </div>

            </article>


            <article className="project-card">

              <div className="project-top">
                <span>02 / FRONTEND</span>
                <span>2026</span>
              </div>

              <h3>Personal Portfolio</h3>

              <p>
                A responsive developer portfolio designed
                to showcase my skills, projects and
                professional journey.
              </p>

              <div className="project-tech">
                <span>React</span>
                <span>JavaScript</span>
                <span>CSS</span>
              </div>

            </article>


            <article className="project-card">

              <div className="project-top">
                <span>03 / NEXT BUILD</span>
                <span>2026</span>
              </div>

              <h3>More Projects</h3>

              <p>
                Continuously building new projects to
                strengthen my development skills and
                gain real-world experience.
              </p>

              <div className="project-tech">
                <span>MERN</span>
                <span>APIs</span>
                <span>Git</span>
              </div>

            </article>

          </div>

        </div>

      </section>


      {/* EXPERIENCE */}
      <section className="section dark-section">

        <div className="section-container">

          <div className="section-heading">
            <span>04</span>
            <div>
              <p>MY JOURNEY</p>
              <h2>Experience</h2>
            </div>
          </div>


          <div className="experience">

            <div className="experience-line"></div>

            <div className="experience-item">

              <div className="experience-dot"></div>

              <div className="experience-date">
                2026
              </div>

              <div className="experience-content">

                <h3>MERN Stack Developer Intern</h3>

                <h4>Cookdin Private Limited</h4>

                <p>
                  Working as a MERN Stack Developer Intern,
                  gaining practical experience in software
                  development, coding, debugging, testing,
                  application development and documentation.
                </p>

              </div>

            </div>


            <div className="experience-item">

              <div className="experience-dot"></div>

              <div className="experience-date">
                2026
              </div>

              <div className="experience-content">

                <h3>B.Tech Biotechnology</h3>

                <h4>Engineering Graduate</h4>

                <p>
                  Completed my undergraduate degree in
                  Biotechnology and transitioned my career
                  towards software development through
                  focused MERN Stack learning.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* CONTACT */}
      <section id="contact" className="section contact-section">

        <div className="section-container">

          <div className="contact-grid">

            <div className="contact-info">

              <p className="contact-label">
                HAVE A PROJECT OR OPPORTUNITY?
              </p>

              <h2>
                Let's build something
                <span> great.</span>
              </h2>

              <p>
                I'm currently looking forward to opportunities
                where I can grow as a software developer and
                contribute to meaningful projects.
              </p>


              <div className="contact-details">

                <a href="mailto:rathish2252005@mail.com">
                  <small>EMAIL</small>
                  <strong>
                    rathish2252005@mail.com
                  </strong>
                </a>

                <a href="tel:+917904313673">
                  <small>PHONE</small>
                  <strong>
                    +91 7904313673
                  </strong>
                </a>

                <a
                  href="https://www.instagram.com/i_am_rathu_/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <small>INSTAGRAM</small>
                  <strong>@i_am_rathu_</strong>
                </a>

              </div>

            </div>


            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >

              <div className="form-row">

                <div className="input-group">
                  <label>Your Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="input-group">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>

              </div>


              <div className="input-group">

                <label>Message</label>

                <textarea
                  name="message"
                  rows="6"
                  placeholder="Tell me about your project..."
                  required
                ></textarea>

              </div>


              <button
                type="submit"
                className="submit-button"
              >
                SEND MESSAGE →
              </button>

            </form>

          </div>

        </div>

      </section>


      {/* FOOTER */}
      <footer className="footer">

        <div className="footer-container">

          <div>
            <strong>Rathish<span>.</span></strong>
            <p>Software Developer</p>
          </div>

          <p>
            © 2026 Rathish. All rights reserved.
          </p>

          <button
            onClick={() => scrollToSection("home")}
            className="top-button"
          >
            ↑
          </button>

        </div>

      </footer>

    </div>
  );
}

export default Home;