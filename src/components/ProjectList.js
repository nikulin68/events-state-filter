function ProjectList({ projects }) {
	return (
		<div className="project-list">
			{projects.map(item => <div className="project-list__item" key={item.img}><img src={item.img} alt="" /></div>)}
		</div>
	)
}

export default ProjectList;