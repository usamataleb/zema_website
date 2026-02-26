
const ProjectCard = (props) => {
  return (
    <> 
        <div className="project-card" key={props.index}>
          <img src={props.image} alt="John" style={{width: '100%', maxHeight: '200px'}}/>
          <h1>{props.title}</h1>
          <p className="project-title">{props.description}</p>
          
          <p><button className='project-button'>View</button></p>
        </div>
    </>
  )
}

export default ProjectCard