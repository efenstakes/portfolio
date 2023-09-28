
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


const SkillsSection = () => {
    const skills: Array<Skill> = [
        {
            title: "Blockchain",
            image: block_img,
            tools: [
                { tool: "Solidity", proeffiency: 98 },
                { tool: "Rust", proeffiency: 90 },
                { tool: "The Graph", proeffiency: 90 },
                { tool: "HardHat", proeffiency: 100 },
                { tool: "Anchor", proeffiency: 95 },
            ]
        },
        {
            title: "Backend",
            image: backend_img,
            tools: [
                { tool: "Go", proeffiency: 95 },
                { tool: "NodeJs", proeffiency: 99 },
                { tool: "Elixir", proeffiency: 90 },
                { tool: "Python", proeffiency: 95 },
                { tool: "PhP", proeffiency: 95 },
            ]
        },
        {
            title: "Frontend",
            image: frontend_img,
            tools: [
                { tool: "NextJS", proeffiency: 98 },
                { tool: "React", proeffiency: 98 },
                { tool: "TypeScript & Javascript", proeffiency: 98 },
                { tool: "HTML5, CSS3", proeffiency: 100 },
                { tool: "WegGL", proeffiency: 95 },
                { tool: "Three JS & Babylon JS", proeffiency: 95 },
            ]
        },
        {
            title: "Mobile",
            image: mobile_img,
            tools: [
                { tool: "Flutter", proeffiency: 100 },
                { tool: "React Native", proeffiency: 95 },
                { tool: "SwiftUI", proeffiency: 70 },
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
                { tool: "Heroku", proeffiency: 95 },
            ]
        }
    ]



    return (
        <div className='section padded_container'>
            
            {
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
            }

        </div>
    )
}

export default SkillsSection
