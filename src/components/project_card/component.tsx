import clsx from 'clsx'
import PublicIcon from '@mui/icons-material/Public';
import GitHubIcon from '@mui/icons-material/GitHub';

// models
import { Project } from '../../models/project'


// components


import './component.scss'
import { Fab, Link } from '@mui/material'
import VSpacer from '../v_spacer/component';


type ComponentProps = {
    project: Project
    animationIndex?: number
}
const ProjectCard = ({ project, animationIndex }: ComponentProps) => {
    return (
        <div 
            className={
                clsx([
                    'project_card', 'clickable', [`su_${animationIndex}`]
                ])
            }
        >
            
            <div className='project_card__image_container'>
                <img 
                    src={project.img} 
                    alt="project" 
                    className="project_card__image_container__image" 
                />

                
                <div
                    className={
                        clsx([
                            "column", "ca_center", "ma_center",
                            "project_card__image_container_links",
                            {
                                // "ma_around": project.gitLink && project.link,
                            }
                        ])
                    }
                >


                    {/* link */}
                    {
                        project.link &&
                            <Link href={project.link} target="_blank">
                                
                                <Fab color="primary" aria-label="Link" size='small' style={{ backgroundColor: 'white', boxShadow: 'none' }}>
                                    <PublicIcon style={{ fontSize: '1rem' }} />
                                </Fab>
                            </Link>
                    }

                    {/* github link */}
                    {
                        project.gitLink &&
                            <Link href={project.gitLink} target="_blank">
                                
                                <Fab color="primary" aria-label="Github" size='small' style={{ backgroundColor: 'white', boxShadow: 'none' }}>
                                    <GitHubIcon style={{ fontSize: '1rem' }} />
                                </Fab>
                            </Link>
                    }

                </div>
            </div>
            <VSpacer space={1} />

            {/* name */}
            <p className="text_6 bolder">
                {project.name}
            </p>
            <VSpacer space={.2} />                
            <p className="text_7 project_card__contents__type">
                <small>
                    { project.type }
                </small>
            </p>
            <VSpacer space={.5} /> 


            <p className="">
                {project.description}
            </p>
            <VSpacer space={1} />

        </div>
    )
}

export default ProjectCard
