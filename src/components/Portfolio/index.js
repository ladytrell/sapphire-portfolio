function Portfolio() {
    //Array of projects
    const projects = [
        {
            title: 'Color Coded',
            subTitle: 'JavaScript Web App',
            image: 'temp-image2.JPG',
            github:'https://github.com/myersdg/rubyTarker',
            deployed: 'https://myersdg.github.io/rubyTarker/'
        },
        {
            title: 'Budget Tracker',
            subTitle: 'Offline  Web App',
            image: 'dollar-bills-background-pile.jpg',
            github:'https://github.com/ladytrell/bixbite-budget',
            deployed: 'https://blooming-beach-45492.herokuapp.com/'
        },
        {
            title: 'Tech Blog',
            subTitle: 'Web Blog - MySQL Backend',
            image: 'blog-post-concept.webp',
            github:'https://github.com/ladytrell/malachite-mvc',
            deployed: 'https://cryptic-ocean-52081.herokuapp.com/'
        },
        {
            title: 'Sodaline Social',
            subTitle: 'MongoDB Backend',
            image: 'social-media-network.webp',
            github:'https://github.com/ladytrell/sodaline-social',
            deployed: ''
        },
        {
            title: 'Travel Weather',
            subTitle: 'Web App',
            image: 'weather-forecast.webp',
            github:'https://github.com/ladytrell/travel-weather',
            deployed: 'https://ladytrell.github.io/travel-weather/'
        },
        {
            title: 'Live Hire',
            subTitle: 'HandleBars & SQL',
            image: 'oscar-keys-ojVMh1QTVGY-unsplash.jpg',
            github:'https://github.com/ladytrell/entertaining-pen',
            deployed: 'https://gentle-dawn-52689.herokuapp.com/'
        }
    ];

    //dynamically populate projects
    return ( 
        <section id="projects" className="primary-sections my-projects">
        <div className="section-title">
            <h2>Projects</h2>
        </div>
        <div className="projects">
            { projects.map(project => (
                <article className="project">
                    <div className="title-box">                    
                        { project.deployed.length > 0 ?
                            <a href={project.deployed} target="_blank" rel="noreferrer noopener">
                                <h3>{project.title}</h3>                    
                            </a>
                            :
                            <h3>{project.title}</h3> 
                        }
                        <a href={project.github} target="_blank" rel="noreferrer noopener">GitHub</a>
                        <h4>{project.subTitle}</h4>
                    </div>
                    <img src={require(`../../assets/images/${project.image}`)} alt="" />
                </article>
            ))}           
        </div>
    </section>
    );
  }
  
  export default Portfolio;