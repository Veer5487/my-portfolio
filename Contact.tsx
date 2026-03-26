import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:ritiksingh0090@gmail.com" data-cursor="disable">
                ritiksingh0090@gmail.com
              </a>
            </p>
            <h4>Education</h4>
            <p>BA in English Honours (Pursuing)<br />University of Delhi</p>
          </div>

          <div className="contact-box">
            <h4>Social</h4>
            
              href="https://github.com/Veer5487"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            
              href="https://www.linkedin.com/in/hritik-766481327/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            
              href="https://www.instagram.com/ritikrajput5487/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
          </div>

          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Hritik Singh Rajput</span>
            </h2>
            <h5>
              <MdCopyright /> 2025
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;