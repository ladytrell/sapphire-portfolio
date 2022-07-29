import portrait from "../../assets/images/portrait.jpg";

function About() {
  return (    
    <section id="about" className="primary-sections about section-box">
      <div className="section-title">
          <h2>About me</h2>
          <img id="portrait" src={portrait} style={{ maxHeight: 200 }} alt="head shot of Antrell Kent" />
      </div>
      <article> 
          <p>
              Software engineer specializing in design, development and implementation of applications in C and C++ programming language. Success based on knowledge of the software development cycle and ability to work with both local onsite teams and global partners to identify requirements, implement designs, and test the final product.
          </p>
          <p>
              Currently serve as an engineer providing technical support for a an enterprise backup storage operating system. Focus on providing excellent customer experience.  Isolate and resolve customer issues.
          </p>
          <p>
              Returning to my first love of coding via the platform of the web.  I am excited about producing projects that are not limited to use in an enterprise environment, but still allow for limitless growth and technical challenge.  
          </p>
      </article>
    </section>
  );
}

export default About;