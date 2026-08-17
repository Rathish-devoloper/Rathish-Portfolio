import "./Contact.css";
import { useSelector } from "react-redux";

function Contact() {
   const id = useSelector((state) => state.id);
   
  return (
    <section className="contact" id="contact">

      <div className="contact-heading">
        <p>CONTACT US</p>
        <h1>Let's Work Together</h1>{id}
        <span>
          Have an idea or an opportunity? I'd love to hear about it.
        </span>
      </div>
          
      <div className="contact-wrapper">

        <div className="contact-left">

          <div className="glass-card">
            <h2>Get In Touch</h2>

            <div className="contact-info">
              <div className="info-box">
                <div className="icon">📧</div>
                <div>
                  <h4>Email</h4>
                  <p>rathish2252005@gmail.com</p>
                </div>
              </div>

              <div className="info-box">
                <div className="icon">📱</div>
                <div>
                  <h4>Phone</h4>
                  <p>+91 79043 13673</p>
                </div>
              </div>

              <div className="info-box">
                <div className="icon">📍</div>
                <div>
                  <h4>Location</h4>
                  <p>Chennai, India</p>
                </div>
              </div>
            </div>

            <div className="social-links">
              <a href="https://github.com/" target="_blank" rel="noreferrer">
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/rathish-s-bb92402a6"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>

              <a
                href="https://www.instagram.com/i_am_rathu_"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </div>

          </div>

        </div>

        <div className="contact-right">

          <form>

            <div className="row">

              <input
                type="text"
                placeholder="Full Name"
              />

              <input
                type="email"
                placeholder="Email Address"
              />

            </div>

            <input
              type="text"
              placeholder="Subject"
            />

            <textarea
              rows="8"
              placeholder="Tell me about your project..."
            ></textarea>

            <button>
              Send Message →
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default Contact;