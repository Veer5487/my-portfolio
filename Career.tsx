import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer Intern</h4>
                <h5>GICSEH (Global Institute of Cyber Security & Ethical Hacking)</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Worked as a Full Stack Developer intern for 1 year. Built and
              deployed web applications using the MERN Stack. Gained hands-on
              experience in modern web technologies, security practices, and
              scalable backend development.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Junior Digital Marketing Executive & Developer (SEO)</h4>
                <h5>AVANTA</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Working as a Junior Digital Marketing Executive, Developer, and
              SEO Specialist. Managing digital strategies, building web
              solutions, and implementing AI-driven SEO techniques to boost
              brand visibility and drive organic growth.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;