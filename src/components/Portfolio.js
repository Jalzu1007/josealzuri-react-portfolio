import React from 'react';
import Project from './Project';

const projects = [
    {
      title: 'MyHealthSpace',
      description: 'Full-Stack web application using MERN, GraphQL, and API.',
      imageSrc: 'my-health-space.jpg',
      deployedLink: 'https://my-health-space-e9d209a11adb.herokuapp.com/',
      githubLink: 'https://github.com/Jalzu1007/myhealthspace.git'
    },
    {
      title: 'Tech Blog',
      description: 'Full-Stack tech blog application.',
      imageSrc: 'tech-blog-project.jpg',
      deployedLink: 'https://tech-blog-jalzu1007-7d5a00d9e01b.herokuapp.com/',
      githubLink: 'https://github.com/Jalzu1007/tech-blog.git'
    },
    {
      title: 'BookMark',
      description: 'Full-Stack book review application.',
      imageSrc: 'book-mark.jpg',
      deployedLink: 'https://the-bookmark-8c8f44b2a0ce.herokuapp.com/',
      githubLink: 'https://github.com/Jalzu1007/bookmark.git'
    },
    {
      title: 'The Recipe Bar',
      description: 'Cocktail recipe and entertainment generator.',
      imageSrc: 'the-recipe-bar.jpg',
      deployedLink: 'https://jalzu1007.github.io/the_recipe_bar/',
      githubLink: 'https://github.com/Jalzu1007/the_recipe_bar.git'
    },
    {
      title: 'Work Day Scheduler',
      description: 'Work Day Scheduler built using JavaScript, jQuery and DayJS.',
      imageSrc: 'work-day-scheduler.jpg',
      deployedLink: 'https://jalzu1007.github.io/work-day-scheduler/',
      githubLink: 'https://github.com/Jalzu1007/work-day-scheduler.git'
    },
    {
      title: 'Password Generator',
      description: 'This is a password generator built on JavaScript.',
      imageSrc: 'password-generator.jpg',
      deployedLink: 'https://jalzu1007.github.io/js-password-generator/',
      githubLink: 'https://github.com/Jalzu1007/js-password-generator.git'
    },
  ];
  
  const Portfolio = () => {
    return (
      <section id="portfolio" className="py-5 text-center d-flex justify-content-center align-items-center">
        <div className="container">
          <h2 className="text-center">Portfolio</h2>
          <div className="row">
            {projects.map((project, index) => (
              <Project
                key={index}
                title={project.title}
                description={project.description}
                imageSrc={project.imageSrc}
                deployedLink={project.deployedLink}
                githubLink={project.githubLink}
              />
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Portfolio;
  