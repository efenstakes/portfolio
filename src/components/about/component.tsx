import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

// import img from '../../assets/1.jpg'
import VSpacer from '../v_spacer/component'


import './component.scss'
import SectionTitle from '../section_title/component'


const About = () => {
    
    return (
        <div className='column ma_center ca_center ca_center about_section'>
        
            {/* image */}
            {/* <p className="title_5 fd_10">
                About Me
            </p>
            <VSpacer space={1} /> */}

            <SectionTitle title='About Me' />
            <VSpacer space={1} />

            <p className='su_12 about_section__description'>
                I am an experienced and passionate engineer, I have had the honor of working with top-tier companies such as Sports Illustrated, The Street, Microsoft AppFactory, KLM Dutch Airlines, SkillCat, The Arena Group and currently Heylixir.
            </p>
            <VSpacer space={.8} />

            <p className='su_16 about_section__description'>
                I bring a wealth of expertise in engineering, testing, and maintaining web and mobile platforms that are both scalable and capable of serving millions of users. Throughout my career, I have worked on high-traffic financial, sports, telemedicine and fashion platforms, including Sports Illustrated, TheStreet, Parade, and Fashionista, each of which receives millions of daily visitors.
            </p>

        </div>
    )
}

export default About
