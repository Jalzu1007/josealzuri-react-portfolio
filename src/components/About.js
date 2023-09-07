import React from 'react';

const About = () => {
  return (
    <section id="home" className="py-5 text-center d-flex justify-content-center align-items-center">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-4">
            <img src="./profile.svg" alt="welcome" className="img-fluid custom-img" />
          </div>
          <div className="col-md-4">
          <h2>About Me</h2>
            <p>
            Hello, I'm Jose Alzuri, a dedicated Full-Stack Software Engineer with a deep passion for crafting exceptional web applications. With a strong foundation in both front-end and back-end development, I transform ideas into interactive digital experiences that captivate and engage users.
            </p>
            <p>
            What truly drives me is the power of technology to shape the future. I thrive on the challenges that each project presents and take pride in solving complex problems with elegant, efficient solutions. Whether it's building intuitive user interfaces or architecting robust server systems, I'm committed to delivering excellence in every line of code.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;