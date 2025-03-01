import { useEffect, useState } from 'react'

// models
import { Company } from '../../models/company'

// import img_1 from '../../assets/apf.png'
// import img_2 from '../../assets/klm.jpg'
// import img_3 from '../../assets/gmc.png'
// import img_9 from '../../assets/skillcat.jpg'
// import img_10 from '../../assets/arena.jpg'

import './component.scss'
import Drawer from '@mui/material/Drawer'
import { useWindowWidth } from '@react-hook/window-size'
import SectionTitle from '../section_title/component'
import VSpacer from '../v_spacer/component'
import CompanyInfo from '../company_info/component'
import CompanyCard from '../company_card/component'


const CompaniesSection = () => {
    const width = useWindowWidth()
    const isMobile = width < 1000
    
    const [ selectedCompany, setSelectedCompany ] = useState<Company | null>()

    const companies: Array<Company> = [
        {
            name: 'Heylixir',
            image: "/assets/images/heylixir.png",
            responsibilities: [
                'Builds visualization and analytic tools to assist individuals living with chronic or terminal illnesses monitor their health and wellness.',
                'Designs, plans and develops a social platform to help ill individuals connect with others, stay informed and share their wellness journeys.',
                'Develops and analyzes performance metrics for the Heylixir platforms to help decision making on core features and UX improvements that could be made to critical features.',
                'Is incharge of the deployment pipelines of the Heylixir platform as well as monitoring and updates for high availability and scalability.',
            ],
            skills: [
                'Python', 'AI', 'Golang', 'NodeJS', 'NextJS', 'React', 'AWS', 'Docker', 'Github Actions', 'Serverless', 'GraphQL', 'API', 'CI/CD',
            ],
            when: 'Aug 2023 - Present',
        },
        {
            name: 'The Arena Group',
            image: "/assets/images/arena.jpg",
            responsibilities: [
                'Collaborated with a team of experienced developers and designers to maintain and build a wide ranging set of features for Sports Illustrated, TheStreet and other sites with millions of daily visits Improve system usability and increase site retention by using analytics and designs that are tested to cater for our target customers.',
                'Build better algorithms and utilize tools like AWS SQS, SNS to help serve millions requests a day in a seamless manner for Sports Illustrated and The Street Migrates legacy systems to use new, well maintained and secure APIs that can help scale our services without sacrificing reliability and efficiency',
            ],
            skills: [
                'NodeJS', 'Python', 'NextJS', 'React', 'NextJS', 'AWS', 'Docker', 'TSOA', 'Solidity', 'Rust',
            ],
            when: 'Jul 2022 - Apr 2023'
        },
        {
            name: 'Vibi',
            image: "/assets/images/vibi.png",
            responsibilities: [
                'I led the research, design and development of the Vicci podcast app, ensuring it aligned with the expectations and needs of our target audience.',
                'I was responsible for developing the streaming pipeline, optimizing responsiveness to enhance user retention.',
                'Additionally, I contributed to building a proprietary recommendation model to drive platform engagement beyond conventional methods.',
            ],
            skills: [
                'Flutter', 'React', 'React Native', 'NodeJS', 'Python', 'Angular', 'Ionic', 
                'Docker', 'Figma', 'Adobe XD'
            ],
            when: 'Mar 2021 - May 2022'
        },
        {
            name: 'Great Minds Kenya',
            image: "/assets/images/gmc.png",
            responsibilities: [
                'Did research and redesigned their previous website to enhance its user experience and scale to millions of users every year',
                'Migrated a multi-page user experience into a single page app that improved engagement by 47%',
                'I ensure that their online experiences are intuitive, satisfactory and solve client challenges as per research insights',
            ],
            skills: [
                'NodeJS', 'React', 'Elixir', 'AWS', 'Docker', 'Firebase', 'Figma'
            ],
            when: 'Sep 2020 - Feb 2021'
        },
        {
            name: 'Microsoft AppFactory',
            image: "/assets/images/apf.png",
            responsibilities: [
                'Was responsible for deciding technologies to use in AppFactory',
                'Was responsible for co-ordinating developers and designers on the incubator projects',
                'Lead a Microsoft AppFactory team that developed KLM Go application',
                'Used a plethora of technologies and tools to build an app that could scale and be used in the whole of East Africa',
            ],
            skills: [
                'Flutter', 'React', 'React Native', 'NodeJS', 'Python', 'Angular', 'Ionic', 
                'Docker', 'Figma', 'Adobe XD'
            ],
            when: '2019 Aug - 2019 Dec'
        },
        // {
        //     name: 'KLM Dutch Airlines',
        //     image: "/assets/images/klm.png",
        //     responsibilities: [
        //         'Lead a Microsoft AppFactory team that developed KLM Go application',
        //         'Acted as the Liason ti AppFactory\'s lead',
        //         'Used a plethora of technologies and tools to build an app that could scale and be used in the whole of East Africa',
        //     ],
        //     skills: [
        //         'Flutter', 'NodeJS', 'Angular', 'Ionic', 
        //         'Docker', 'Erlang'
        //     ],
        //     when: '2019 Sep - 2019 Dec'
        // },
    ]


    useEffect(()=> {
        console.log("selectedCompany ", selectedCompany)
    }, [ selectedCompany ])

    return (
        <div className='padded_container_sm companies_container'>
            
            {/* title */}
            <SectionTitle title="COMPANIES" />
            {
                !selectedCompany &&
                    <>
                        <VSpacer space={-.5} />
                        <div className="row ca_center ma_center">
                            <p className="italic text-center text_7">
                                Click a company to see details below.
                            </p>
                        </div>
                    </>
            }
            
            <VSpacer space={2} />

            {/* comapny list */}
            <div className="companies_list">
                {
                    companies.map((company: Company, index: number)=> {

                        return (
                            <CompanyCard
                                key={index}
                                company={company}
                                onClick={
                                    ()=> {
                                        setSelectedCompany(null)
                                        setSelectedCompany(company)
                                    }
                                }
                            />
                        )
                    })
                }
            </div>

            { !selectedCompany && <VSpacer space={3} /> }

            {/* if selected show it hete */}
            {/* {
                selectedCompany &&
                    <CompanyInfoComponent company={selectedCompany} />
            }
            {
                selectedCompany && <VSpacerComponent space={2} />
            }
            {
                selectedCompany &&
                    <div className="row" onClick={ ()=> setSelectedCompany(null) }>
                        <p className="italic text_7">
                            See Less
                        </p>
                    </div>
            } */}
            
            <Drawer
                anchor={ isMobile ? 'bottom' : 'right' }
                open={selectedCompany != null}
                onClose={
                    ()=> setSelectedCompany(null)
                }
            >

                {
                    selectedCompany &&
                        <CompanyInfo
                            company={selectedCompany}
                            close={()=> setSelectedCompany(null)}
                            isMobile={isMobile}
                        />
                }
                
            </Drawer>

        </div>
    )
}

export default CompaniesSection