import React, { useState } from 'react'
import {Link} from 'gatsby'
import starIcon from '../../assets/images/star-icon.png'
import { Carousel, Modal } from 'react-bootstrap';



const RecentProjects = ({recentProjects,projects}) => {

   
    const [showCarousel, setShowCarousel] = useState(false)
    const [activeGallary, setActiveGallary] = useState([])

   

    const {subTitle, title, shortText}= recentProjects

    const addGallary = images => {
        
        setActiveGallary(images)
        setShowCarousel(true)
      }
    
    return (
        <section className="projects-area project-custom-area bg-color pt-70 pb-70">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">
                        <img src={starIcon} alt="project" /> {subTitle}
                    </span>
                    <h2>{title}</h2>
                    <p>{shortText}</p>
                </div>

                <div className="row justify-content-center">
                    {
                        projects?.slice(0,6).map((project, idx) => {
                            return(
                                <div className="col-lg-4 col-md-6 d-flex" key={idx}>
                                    <div className="single-projects-box">
                                        {/* <div className="image"> */}
                                            <img 
                                                src={project.image?.formats?.small?.url || project.image?.url} 
                                                onClick={() => addGallary(project.lightBox)}
                                                alt="Project Image" 
                                                className='project-image'
                                            />
                                            {/* <Link className="link-btn" to={`/projects/${project.slug}`}>
                                                <i className='bx bx-plus'></i>
                                            </Link> */}
                                        {/* </div> */}
                                        <div className="content mt-auto">
                                            <h3>
                                                {/* <Link to={`/projects/${project.slug}`}> */}
                                                    {project?.title}
                                                {/* </Link> */}
                                            </h3>
                                            <span>{project?.subTitle}</span>
                                        </div>
                                    </div>
                                </div>
                           )
                        })
                    }
                </div>
            </div>
            <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="fusi-modal"
        show={showCarousel}
        onHide={() => setShowCarousel(false)}
      >
        <Modal.Body>
          <Carousel>
            {activeGallary.map(image => (
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={image.url}
                  alt="Image Two"
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Modal.Body>
      </Modal>
        </section>
    )
}

export default RecentProjects;