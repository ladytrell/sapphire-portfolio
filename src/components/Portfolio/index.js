function Portfolio() {
    return ( 
        <section id="projects" class="primary-sections my-projects">
        <div class="section-title">
            <h2>Projects</h2>
        </div>
        <div class="projects">
            <article class="primary-project">
                <div class="title-box">
                    <h3><a href="https://myersdg.github.io/rubyTarker/" target="">Color Coded</a></h3>
                    <h4>Collaborative</h4>
                </div>
                <a href="https://myersdg.github.io/rubyTarker/" target="">
                    <img src={require("../../assets/images/temp-image2.JPG")} alt="" />
                </a>
            </article>
            <div class="secondary-projects" >  
                <article class="project">
                    <div class="title-box">
                        <h3><a href="https://ladytrell.github.io/run-buddy/" target="">Run Buddy</a></h3>
                        <h4>Project subtitle</h4>
                    </div>
                    <a href="https://ladytrell.github.io/run-buddy/" target="">
                        <img src={require("../../assets/images/temp-image.JPG")} alt="" />
                    </a>
                </article>
                <article class="project">
                    <div class="title-box">
                        <h3><a href="https://gentle-dawn-52689.herokuapp.com/" target="">Live Hire</a></h3>
                        <h4>MPV</h4>
                    </div>
                    <a href="https://gentle-dawn-52689.herokuapp.com/" target="">
                        <img src={require("../../assets/images/oscar-keys-ojVMh1QTVGY-unsplash.jpg")} alt="" />
                    </a>
                </article>
            </div> 
        </div>
    </section>
    );
  }
  
  export default Portfolio;