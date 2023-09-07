import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-5 text-center d-flex justify-content-center align-items-center">
    <div className="container section-content">
        <h2 className="text-center">Contact</h2>
        <p>
        I'm always eager to collaborate with like-minded individuals and organizations that share a passion for creating exceptional digital experiences. Whether you have a project in mind or just want to connect and discuss the latest trends in web development, I'd love to hear from you. Let's turn your ideas into reality and shape the future of the web together.
        </p>
        <div className="row">
          <div className="col-md-6 mx-auto">
            <div className="card p-3">
              <div className="card-body">
                <h4>Contact Form</h4>
                <form action="https://formspree.io/f/xdorzbbo" method="POST">
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" name="name" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" id="email" name="email" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea className="form-control" id="message" rows="5" name="message" required></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;