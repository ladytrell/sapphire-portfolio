import resumeFile from "../../assets/doc/Antrell-Kent-CV.pdf";

function Resume() {
    const frontEnd = ['HTML', 'CSS'];

    return (    
      <section id="resume" class="primary-sections about">
        <div class="section-title">
            <h2>Resume</h2>
            <p>
                Download my <a href={ resumeFile }  download>resume</a>
            </p>
            <div>
                <p>
                    Front-end Proficiencies
                </p>
                <ul>{ frontEnd[0] }</ul>
            </div>            
            <div>
                <p>
                    Back-end Proficiencies
                </p>
                <ul></ul>
            </div>
        </div>
     </section>
    );
  }
  
  export default Resume;