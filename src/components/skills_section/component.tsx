
// models
import { Skill } from '../../models/skill'
import SkillCard from '../skill_card/component'


// components


const backend_img = '/assets/images/be.jpg'
const frontend_img = '/assets/images/fr3.png'
const block_img = '/assets/images/block.jpg'
const mobile_img = '/assets/images/mobile.jpeg'
const devops_img = '/assets/images/devops.jpg'



import './component.scss'
import { LinearProgress } from '@mui/material'

import { SiSolidity, SiRust, SiElixir, SiTypescript, SiBabylondotjs, SiSwift, SiFlutter, SiDocker, SiFirebase, SiChai, SiMocha, SiGraphql, SiWebrtc, } from 'react-icons/si'
import { FaHardHat, FaAws, FaGitAlt, } from 'react-icons/fa'
import { BiAnchor, BiLogoPython, BiLogoReact, BiLogoJavascript, BiLogoCss3, } from 'react-icons/bi'
import { TbBrandGolang, TbBrandNodejs, TbBrandNextjs, TbBrandThreejs, TbBrandReactNative, } from 'react-icons/tb'
import { AiFillHtml5, } from 'react-icons/ai'
import React from 'react'
import VSpacer from '../v_spacer/component'


const SkillsSection = () => {
    const toolIcons = new Map<string, React.ReactNode>([
        [ "Solidity", <SiSolidity className='skill_icon' />, ],
        [ "Rust", <SiRust className='skill_icon' /> ],
        [ "HardHat", <FaHardHat className='skill_icon' /> ],
        [ "Anchor", <BiAnchor className='skill_icon' /> ],
        [ "Go", <TbBrandGolang className='skill_icon' />, ],
        [ "NodeJs", <TbBrandNodejs className='skill_icon' /> ],
        [ "Elixir", <SiElixir  className='skill_icon'/> ],
        [ "Python", <BiLogoPython className='skill_icon' /> ],
        [ "NextJS", <TbBrandNextjs className='skill_icon' /> ],
        [ "React", <BiLogoReact className='skill_icon' /> ],
        [ "Material UI", <BiLogoReact className='skill_icon' /> ],
        [ "Jest, Chai", <SiChai className='skill_icon'/> ],
        [ "Mocha", <SiMocha className='skill_icon' /> ],
        [ "Jest", <SiMocha className='skill_icon' /> ],
        [ "GraphQL", <SiGraphql className='skill_icon' /> ],
        [ "Webrtc", <SiWebrtc className='skill_icon' /> ],
        [ "TypeScript", <SiTypescript className='skill_icon' /> ],
        [ "Javascript", <BiLogoJavascript className='skill_icon' /> ],
        [ "HTML5", <AiFillHtml5 className='skill_icon' /> ],
        [ "CSS3", <BiLogoCss3 className='skill_icon' /> ],
        [ "WegGL", <TbBrandThreejs className='skill_icon' /> ],
        [ "Three JS", <TbBrandThreejs className='skill_icon' /> ],
        [ "Babylon JS", <SiBabylondotjs className='skill_icon' /> ],
        [ "Flutter", <SiFlutter className='skill_icon' /> ],
        [ "React Native", <TbBrandReactNative className='skill_icon' /> ],
        [ "Swift", <SiSwift className='skill_icon' /> ],
        [ "SwiftUI", <SiSwift className='skill_icon' /> ],
        [ "Docker", <SiDocker className='skill_icon' /> ],
        [ "AWS", <FaAws className='skill_icon' /> ],
        [ "Git", <FaGitAlt className='skill_icon' /> ],
        [ "Firebase", <SiFirebase className='skill_icon' /> ],
    ])
    const skills: Array<Skill> = [
        {
            title: "Blockchain",
            image: block_img,
            tools: [
                { tool: "Solidity", proeffiency: 98 },
                { tool: "Rust", proeffiency: 90 },
                { tool: "HardHat", proeffiency: 100 },
                { tool: "Anchor", proeffiency: 95 },
            ]
        },
        {
            title: "Backend",
            image: backend_img,
            tools: [
                { tool: "Go", proeffiency: 95 },
                { tool: "Python", proeffiency: 95 },
                { tool: "NodeJs", proeffiency: 99 },
                { tool: "Elixir", proeffiency: 90 },
                { tool: "GraphQL", proeffiency: 95 },
            ]
        },
        {
            title: "Frontend",
            image: frontend_img,
            tools: [
                { tool: "NextJS", proeffiency: 98 },
                { tool: "React", proeffiency: 98 },
                { tool: "TypeScript", proeffiency: 98 },
                { tool: "Javascript", proeffiency: 98 },
                { tool: "HTML5", proeffiency: 100 },
                { tool: "CSS3", proeffiency: 100 },
                { tool: "WegGL", proeffiency: 95 },
                { tool: "Three JS", proeffiency: 95 },
                { tool: "Babylon JS", proeffiency: 80 },
                { tool: "Jest", proeffiency: 100 },
                { tool: "Mocha", proeffiency: 100 },
                { tool: "Material UI", proeffiency: 100 },
                { tool: "GraphQL", proeffiency: 95 },
            ]
        },
        {
            title: "Mobile",
            image: mobile_img,
            tools: [
                { tool: "Flutter", proeffiency: 100 },
                { tool: "React Native", proeffiency: 95 },
                { tool: "SwiftUI", proeffiency: 80 },
                { tool: "Swift", proeffiency: 93 },
            ]
        },
        {
            title: "DevOps & Cloud",
            image: devops_img,
            tools: [
                { tool: "Docker", proeffiency: 98 },
                { tool: "AWS", proeffiency: 90 },
                { tool: "Git", proeffiency: 100 },
                { tool: "Firebase", proeffiency: 98 },
            ]
        }
    ]



    return (
        <div className='section'>
            
            {
                skills.map(({ title, tools }, index: number)=> {

                    return (
                        <div  key={index} className='skills_section'>

                            <h1 className="title_7 su_10 skills_section__title">
                                {title}
                            </h1>
                            <VSpacer space={1.5} />

                            <div className='skills_section_skills'>

                            {
                                tools?.map(({tool}, toolIndex)=> {

                                    return (
                                        <div key={tool} className={`skills_section__card su_${toolIndex+10}`}>
                                            
                                            { toolIcons.get(tool) }

                                            <p>
                                                {tool}
                                            </p>

                                        </div>
                                    )
                                })
                            }
                            </div>
                        </div>
                    )
                })
            }

            {/* {
                skills.map((skill: Skill, index: number)=> {

                    return (
                        <SkillCard
                            key={index}
                            skill={skill}
                            animationIndex={ (index+2)+16 }
                            reverse={ index % 2 === 1 }
                        />
                    )
                })
            } */}

        </div>
    )
}

export default SkillsSection
