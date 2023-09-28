

import React from 'react'
import { Project } from '../../models/project'
import { Chip, Fab, Link } from '@mui/material'
import clsx from 'clsx'
import PublicIcon from '@mui/icons-material/Public';
import GitHubIcon from '@mui/icons-material/GitHub';

import './component.scss'
import VSpacer from '../v_spacer/component';

const ProjectDetails = ({ project: { name, description, img, tags, link, gitLink, } }: { project: Project }) => {

    return (
        <div className='project_details_container'>

            {/* title */}
            <h1 className='fd_5 project_details_container__title'>
                Details.
            </h1>
            <VSpacer space={1} />
            
            {/* image */}
            <img 
                src={img} 
                alt="project" 
                className="su_11 project_details_container__image" 
            />
            <VSpacer space={.5} />

            {/* title */}
            <h2 className='su_14'>
                { name }
            </h2>
            <VSpacer space={.2} />
            
            <p className='su_17'>
                { description }
            </p>
            <VSpacer space={1} />

            {/* tech used */}
            <h5 className='su_20'>
                Tools & Tags
            </h5>
            <VSpacer space={.5} />
            <div className='row_wrapped project_details_container__tags'>
            {
                tags.map((tag, index)=> {

                    return (
                        <Chip className={`su_${10+index}`} key={tag} label={tag} style={{ backgroundColor: '#302d2d', color: 'white', borderRadius: 6, }} />
                    )
                })
            }
            </div>
            <VSpacer space={3} />


            {/* links */}
            <div className="row ca_center" style={{ columnGap: '2rem', }}>


                    {/* link */}
                    {
                        link &&
                            <Link href={link} target="_blank" className='su_25'>
                                
                                <Fab color="primary" aria-label="Link" variant='extended' style={{ boxShadow: 'none', textTransform: 'none', }}>
                                    <PublicIcon style={{ fontSize: '1rem', marginRight: '.5rem', }} />
                                    Hosted Link
                                </Fab>
                            </Link>
                    }

                    {/* github link */}
                    {
                        gitLink &&
                            <Link href={gitLink} target="_blank" className='su_29'>
                                
                                <Fab color="primary" aria-label="Github" variant='extended' style={{ boxShadow: 'none', textTransform: 'none', }}>
                                    <GitHubIcon style={{ fontSize: '1rem', marginRight: '.5rem', }} />
                                    Github Link
                                </Fab>
                            </Link>
                    }

                </div>

        </div>
    )
}

export default ProjectDetails
