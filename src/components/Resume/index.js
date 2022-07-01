import resumeFile from "../../assets/doc/Antrell-Kent-CV.pdf";

function Resume() {
    const frontEnd = ['HTML', 'CSS', 'BootStrap', 'Responsive Design', 'React'];
    const backEnd = ['Node', 'SQL', 'MongDB'];

    return (    
      <section id="resume" className="primary-sections">
        <div className="section-title">
            <h2>Resume</h2>
        </div>
        <div>
            <p>
                Download my <a href={ resumeFile }  download>resume</a>
            </p>
            <div>
                <h3>
                    Front-end Proficiencies
                </h3>
                <ul>
                   {frontEnd.map(skill => (
                        <li>{skill}</li>
                    ))}
                </ul>
            </div>            
            <div>
                <h3>
                    Back-end Proficiencies
                </h3>
                <ul>
                   {backEnd.map(skill => (
                        <li>{skill}</li>
                    ))}
                </ul>
            </div>
        </div>
     </section>
    );
  }
  
  export default Resume;