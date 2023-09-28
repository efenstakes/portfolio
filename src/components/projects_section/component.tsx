import { useEffect, useState } from 'react'
import clsx from 'clsx'


// models
import { Project } from '../../models/project'



// assets
// import covid from '../../assets/covid.jpg'
// import lifeboat from '../../assets/foster.jpg'
// import gmc from '../../assets/gmc.png'
// import k11 from '../../assets/k11.png'
// import pizza_inn from '../../assets/pin2.png'
// import klm from '../../assets/klm.png'
// import ashleysImg from '../../assets/ashleys.png'
// import covidOverImg from '../../assets/covid-over.png'
// import gitImg from '../../assets/git.png'
// import f1MeetsFuriousImg from '../../assets/f1.png'
// import goCyberImg from '../../assets/cyber.png'
// import glitchImg from '../../assets/glitch.png'
// import videoCallerImg from '../../assets/video-caller.jpg'
// import awsLambdaImg from '../../assets/aws-lambda.png'


import './component.scss'
import Drawer from '@mui/material/Drawer'
import { useWindowWidth } from '@react-hook/window-size'

import VSpacer from '../v_spacer/component'
import SectionTitle from '../section_title/component'
import ProjectCard from '../project_card/component'
import ProjectDetails from '../project_details/component'

const covid = '/assets/images/covid.jpg'
const lifeboat = '/assets/images/foster.jpg'
const gmc = '/assets/images/gmc.png'
const k11 = '/assets/images/k11.png'
const pizza_inn = '/assets/images/pin2.png'
const klm = '/assets/images/klm.png'
const ashleysImg = '/assets/images/ashleys.png'
const covidOverImg = '/assets/images/covid-over.png'
const gitImg = '/assets/images/git.png'
const f1MeetsFuriousImg = '/assets/images/f1.png'
const goCyberImg = '/assets/images/cyber.png'
const glitchImg = '/assets/images/glitch.png'
const videoCallerImg = '/assets/images/video-caller.jpg'
const awsLambdaImg = '/assets/images/aws-lambda.png'
const ProjectsSection = () => {
    const width = useWindowWidth()
    const isMobile = width < 1000
    const [selectedFilter, setSelectedFilter] = useState<string>('Web')
    const [onDisplay, setOnDisplay] = useState<Array<Project>>([])
    const [selectedProject, setSelectedProject] = useState<Project | null>(null)


    const filters: Array<string> = [
        'Web', 'Backend', '3D / WelGL', 'Mobile', 'Web3',
    ]
    const projects: Array<Project> = [
        {
            name: "Ashley\'s Furniture",
            img: ashleysImg,
            description: "Ashley\'s Furniture 3D concept site",
            tags: [ "NextJS", "ReactJS", "TypeScript", "JavaScript", "3D", "Threejs", "Webgl", "Web" ],
            link: "https://ashleys-8a17b.web.app/",
            gitLink: "https://github.com/efenstakes/ashleys"
        },
        {
            name: "Covid Times",
            img: covidOverImg,
            description: "Covid over celebration site",
            tags: [ "NextJS", "ReactJS", "TypeScript", "JavaScript", "3D", "Threejs", "Webgl" ],
            link: "https://a-covid-era.web.app/",
            gitLink: "https://github.com/efenstakes/ashleys"
        },
        {
            name: "MetaLinks API",
            img: gitImg,
            description: "MetaLinks Api which indexes blockchain data of the metalinks smart contract and serves the data through a GraphQL API",
            tags: [ "GraphQL", "Solidity", "NodeJS", "TypeScript", "JavaScript", "Web3JS", "API" ],
            gitLink: "https://github.com/efenstakes/MetalinksAPI"
        },
        {
            name: "Walmart E-commerce API",
            img: gitImg,
            description: "Ashley\'s Furniture 3D concept site",
            tags: [ "Golang", "Go", "Docker", "API" ],
            gitLink: "https://github.com/efenstakes/walmart-api-go"
        },
        {
            name: "Video Caller React Native",
            img: videoCallerImg,
            description: "A WebRTC video calling application built with react native and nodeJS.",
            tags: [ "React Native", "Expo", "TypeScript", "JavaScript", "Websockets", "API", "Mobile", ],
            gitLink: "https://github.com/efenstakes/video-caller-react-native"
        },
        
        {
            name: "Video Caller Flutter",
            img: videoCallerImg,
            description: "A WebRTC video calling application built with react native and nodeJS.",
            tags: [ "Flutter", "Dart", "TypeScript", "JavaScript", "Websockets", "API", "Mobile", ],
            gitLink: "https://github.com/efenstakes/go-messenger-mobile",
            // gitLink: "https://github.com/efenstakes/video-caller-flutter",
        },
        {
            name: "Immigration Registry",
            img: gitImg,
            description: "An immigration registry API to facilitate legal, healthy and organized immigration.",
            tags: [ "NodeJS", "Express", "TypeScript", "JavaScript", "Websockets", "API", ],
            gitLink: "https://github.com/efenstakes/immigration-registry",
        },
        {
            name: "AWS Lambda Websockets",
            img: awsLambdaImg,
            description: "A websocket API built on AWS Lambda.",
            tags: [ "NodeJS", "Express", "TypeScript", "JavaScript", "Websockets", "API", ],
            gitLink: "https://github.com/efenstakes/serverless-websockets-aws",
        },
        
        {
            name: "MetaLinks Contract",
            img: gitImg,
            description: "MetaLinks smart contract code built with solidity. Metalinks is synonymous to LinkTree with the added advantage of having decentralized access allowing anyone to build an interface an utilize the smart contract openly.",
            tags: [ "Solidity", "GraphQL", "NodeJS", "TypeScript", "JavaScript", "Web3JS", ],
            gitLink: "https://github.com/efenstakes/metalinks"
        },
        {
            name: "Formula 1 Meets Fast & Furious",
            img: f1MeetsFuriousImg,
            description: "Formula One Meets Fast & Furious site",
            tags: [ "NextJS", "ReactJS", "TypeScript", "JavaScript", "3D", "Threejs", "Webgl" ],
            gitLink: "https://github.com/efenstakes/formula-one-meets-fast-furious",
            link: "https://formulaone-meets-fastfurious.web.app/",
        },
        {
            name: "Go Cyber",
            img: goCyberImg,
            description: "Formula One Meets Fast & Furious site",
            tags: [ "NextJS", "ReactJS", "TypeScript", "JavaScript", "3D", "Threejs", "Webgl" ],
            gitLink: "https://github.com/efenstakes/go-cyber",
            link: "https://go-cyber-4ff4f.web.app/",
            type: 'inprogress',
        },
        {
            name: "Glitch",
            img: glitchImg,
            description: "Glitch site",
            tags: [ "NextJS", "ReactJS", "TypeScript", "JavaScript", "3D", "Threejs", "Webgl" ],
            gitLink: "https://github.com/efenstakes/good-witch",
            link: "https://glitch-zone.web.app/",
        },
        {
            name: 'Great Minds Kenya',
            img: gmc,
            gitLink: 'https://greatmindsnairobi.co.ke',
            description: 'Great Minds Kenya consultncy website.',
            img_styles: {
                objectFit: 'contain',
                // transform: ''
            },
            type: 'Commercial',
            tags: [ 'web', 'ux/ui design', ],
        },
        {
            name: 'KLM Go',
            img: klm,
            gitLink: 'https://github.com/efenstakes/KLMGo',
            description: 'KLM Dutch Airlines GLM Go app.',
            img_styles: {
                // objectFit: 'contain',
                // transform: ''
            },
            type: 'Open Source',
            tags: [ 'web', 'flutter', 'ux/ui design', ],
        },
        {
            name: 'K11',
            img: covid,
            link: 'https://github.com/efenstakes/k11',
            description: 'A COVID-19 passport application that allows people to monitor their tests, vaccinations and location.',
            img_styles: {},
            type: 'Open Source',
            tags: [ 'mobile', 'flutter', 'ux/ui design', 'open source' ],
        },
        {
            name: 'K11 Server',
            img: covid,
            link: 'https://github.com/efenstakes/k11.server',
            description: 'A COVID-19 passport application server that allows people to monitor their tests, vaccinations and location.',
            img_styles: {},
            type: 'Open Source',
            tags: [ 'web', 'nodejs', 'open source' ],
        },
        {
            name: 'LifeBoat',
            img: lifeboat,
            link: 'https://github.com/efenstakes/LifeBoat',
            description: 'A foster care management system server for governments and NGOs.',
            img_styles: {},
            tags: [ 'nodejs', 'javascript', 'open source', ],
            type: 'Open Source',
        },
        {
            name: 'Kiloko',
            img: covid,
            link: 'https://github.com/TheGoodCollective/Kiloko',
            description: 'A COVID-19 tracking application that allows people to monitor their location and get COVID news.',
            img_styles: {},
            type: 'Open Source',
            tags: [ 'mobile', 'flutter', 'ux/ui design', 'open source' ],
        },
        {
            name: 'Pizza Inn Web',
            img: pizza_inn,
            gitLink: 'https://github.com/efenstakes/pizza_inn',
            description: 'A Pizza Inn website redesign for a better experience.',
            img_styles: {},
            type: 'Open Source',
            tags: [ 'web', 'react', 'html', 'css3', 'ux/ui design', ],
        },
        {
            name: 'Pizza Inn Mobile',
            img: pizza_inn,
            gitLink: 'https://github.com/efenstakes/pizza_inn_mobile',
            description: 'A Pizza Inn mobile application concept design and implementation.',
            img_styles: {},
            type: 'Open Source',
            tags: [ 'mobile', 'flutter', 'ux/ui design', ],
        },
    ]


    useEffect(()=> {
        let newDisplay = projects.filter(p=> {
            return p.tags.includes(selectedFilter.toLowerCase())
        })
        setOnDisplay(newDisplay)
    }, [ ])

    useEffect(()=> {
        let newDisplay = projects.filter(p=> {
            if( selectedFilter === "Web" ) {
                return p.tags.includes(selectedFilter.toLowerCase()) 
                        ||
                        p.tags.includes("NextJS")
                        ||
                        p.tags.includes("ReactJS")
            }
            
            if( selectedFilter === "3D / WelGL" ) {
                return p.tags.includes(selectedFilter.toLowerCase()) 
                        ||
                        p.tags.includes("Webgl")

            }
            
            if( selectedFilter === "Backend" ) {
                return p.tags.includes(selectedFilter.toLowerCase()) 
                        ||
                        p.tags.includes("API")

            }
            
            if( selectedFilter === "Web3" ) {
                return p.tags.includes(selectedFilter.toLowerCase()) 
                        ||
                        p.tags.includes("Web3JS")

            }

            return p.tags.includes(selectedFilter.toLowerCase()) || p.tags.includes(selectedFilter)
        })
        setOnDisplay([])
        setOnDisplay(newDisplay)
    }, [ selectedFilter ])


    return (
        <div className='padded_container_sm projects__container'>
            <VSpacer space={2} />
            
            <SectionTitle title="PROJECTS" isWhite={true} />
            <VSpacer space={2} />
            
            {/* filters */}
            <div className="projects__container__chip_list row_wrapped ma_center ca_center">
                {
                    filters.map((filter: string, index: number)=> {
                        const isSelected: boolean = filter === selectedFilter

                        return (
                            <div 
                                key={index} 
                                className={
                                    clsx([
                                        'chip_md', 
                                        'text_7', 
                                        'chip_rounded',
                                        'clickable',
                                        [`fd_${20+(index+2)}`],
                                        {
                                            'chip_outlined': !isSelected,
                                            'projects__container__chip_list__chip__outlined': isSelected,
                                            'projects__container__chip_list__chip': !isSelected,
                                        }
                                    ])
                                }
                                style={{
                                    // backgroundColor: isSelected ? '#0ed1e8' : 'white',
                                    // color: isSelected ? 'white' : 'black',
                                }}
                                onClick={ ()=> setSelectedFilter(filter) }
                            >
                                { filter }
                            </div>
                        )
                    })
                }
            </div>
            <VSpacer space={3.2} />

            {/* projects */}
            <div className="projects__container__project_list">
                {
                    onDisplay.map((project: Project, index: number)=> {

                        return (
                            <div
                                key={index}
                                onClick={ ()=> setSelectedProject(project) }
                            >
                                <ProjectCard
                                    key={index}
                                    project={project}
                                />
                            </div>
                        )
                    })
                }
            </div>
            <VSpacer space={2} />

            <Drawer
                anchor={ isMobile ? 'bottom' : 'right' }
                open={selectedProject != null}
                onClose={
                    ()=> setSelectedProject(null)
                }
            >

                {
                    selectedProject && <ProjectDetails project={selectedProject} />
                }
                
            </Drawer>
        </div>
    )
}

export default ProjectsSection