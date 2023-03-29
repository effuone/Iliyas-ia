import React from 'react'
import { useState, useEffect } from 'react'
import { getAllProjects } from '../api/projects'
import NewProjectModal from '../components/NewProjectModal'
const Gallery = () => {

    const [projects, setProjects] = useState([])
    const [isNewProjectModalOpen, setIsNewProjectModalOpen] = useState(false)

    useEffect(() => {
      getAllProjects().then((data) => {
        setProjects(data)
      });
    }, [])

    return (
        <div className="container py-4">
            <section className="mb-4">
                <div className="container">
                    <div className='d-flex justify-content-between mb-3'>
                        <h2 className='mr-30'>Gallery</h2>
                        <button 
                            className="btn btn-primary"
                            onClick={()=>setIsNewProjectModalOpen(true)}
                        >
                            Add new project
                        </button>
                    </div>

                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {projects.map((project, index)=>
                            <div key={index} className="col">
                                <div className="card">
                                    <img
                                        src={project.image}
                                        className="card-img-top"
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">{project.title}</h5>
                                        <p className="card-text">{project.description}</p>
                                        <a href="#" className="btn btn-primary">
                                            View
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
            <NewProjectModal isOpen={isNewProjectModalOpen} setIsOpen={setIsNewProjectModalOpen}/>
        </div>

    )
}

export default Gallery