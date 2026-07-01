import "../contact.css"


const projects = [
  {
    id: 1,
    title: "Restaurant Website",
    description: "A modern responsive restaurant website built with React.",
    image: "https://picsum.photos/500/300?random=1",
    tech: ["React", "CSS", "JavaScript"],
    demo: "#",
    github: "#",
  },
  {
    id: 2,
    title: "Todo App",
    description: "Simple todo application with CRUD functionality.",
    image: "https://picsum.photos/500/300?random=2",
    tech: ["React", "CSS"],
    demo: "#",
    github: "#",
  },
  {
    id: 3,
    title: "Portfolio",
    description: "Personal portfolio with smooth animations and responsive UI.",
    image: "https://picsum.photos/500/300?random=3",
    tech: ["React", "JavaScript", "CSS"],
    demo: "#",
    github: "#",
  },
  {
    id: 4,
    title: "Weather App",
    description: "Weather application using API with a modern interface.",
    image: "https://picsum.photos/500/300?random=4",
    tech: ["React", "API", "CSS"],
    demo: "#",
    github: "#",
  },
];

const Contact = () => {
  return (
    <div>
      <section className="projects">
      <div className="container">
        <h1>My Projects</h1>
        <p className="subtitle">
          Here are some of my favorite projects.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <div className="card" key={project.id}>
              <div className="image-box">
                <img src={project.image} alt={project.title} />
              </div>

              <div className="content">
                <h2>{project.title}</h2>
                <p>{project.description}</p>

                <div className="tech">
                  {project.tech.map((item, index) => (
                    <span key={index}>{item}</span>
                  ))}
                </div>

                <div className="buttons">
                  <a href={project.demo} target="_blank">
                    Live Demo
                  </a>

                  <a href={project.github} target="_blank">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  )
}

export default Contact