import React from 'react';

const technologies = [
  { name: 'JavaScript', color: '#F0DB4F' },
  { name: 'React', color: '#61DAFB' },
  { name: 'Node.js', color: '#43853D' },
  { name: 'MongoDB', color: '#47A248' },
  { name: 'Express.js', color: '#000' },
  { name: 'Redux', color: '#764ABC' },
  { name: 'HTML5', color: '#E44D26' },
  { name: 'CSS3', color: '#264de4' },
  { name: 'Git', color: '#F05032' },
  { name: 'Bootstrap', color: '#563D7C' },
  { name: 'Sequelize', color: '#3C3C3B' },
  { name: 'Handlebars.js', color: '#F7931E' },
  { name: 'JSON', color: '#000' },
  { name: '.ENV', color: '#000' },
  { name: 'Bulma', color: '#00D1B2' },
  { name: 'MySQL', color: '#4479A1' },
  { name: 'GraphQL', color: '#E535AB' },
  { name: 'Mongoose', color: '#880000' },
  { name: 'MERN', color: '#000' },
  { name: 'Agile', color: '#000' },
  { name: 'GitHub', color: '#000' },
  { name: 'Bash', color: '#000' },
  { name: 'Apollo', color: '#311C87' },
];

const Resume = () => {
  return (
    <section id="resume" className="py-5 text-center">
      <div className="container">
        <h2 className="text-center">Resume</h2>
        <div className="row">
          <div className="col-md-8 mx-auto">
            <div className="card p-3">
              <div className="card-body">
                {/* ... (other content) ... */}
                <h4>Download Resume</h4>
                <p>
                  Click the link below to download my resume in PDF format:
                </p>
                <a
                  href="/Simon_Pereira_Resume.pdf"
                  download="Simon_Pereira_Resume.pdf"
                  className="btn btn-primary"
                >
                  Download Resume
                </a>
              </div>
            </div>
            <div className="card mt-4 p-3">
              <div className="card-body">
                <h4 className="tech-h4">Technologies I Know</h4>
                <div className="row">
                  {technologies.map((tech, index) => (
                    <div key={index} className="col-md-4 mb-3">
                      <div
                        className="p-3 text-center"
                        style={{ backgroundColor: tech.color, color: '#fff' }}
                      >
                        {tech.name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;