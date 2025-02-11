
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import AttachEmailIcon from '@mui/icons-material/AttachEmail'
import { FaMedium } from "react-icons/fa6";
import { FaLinkedin } from 'react-icons/fa';



// components



const ContactSection = () => {

    return (
        <div className="contact">
            

            <a href='https://github.com/efenstakes' title="My Github Link" className="contact_card su_12" target='_blank'>
                <GitHubIcon />
                <p> Github </p>
            </a>
            

            <a href='https://medium.com/@efenstakes101' title="Medium personal blog" className="contact_card su_12" target='_blank'>
                <FaMedium />
                <p> Medium Blog </p>
            </a>


            <a href='https://www.linkedin.com/in/felix-ndunda-0ba841108/' title="LinkedIn link" className="contact_card su_12" target='_blank'>
                <FaLinkedin />
                <p> LinkedIn </p>
            </a>


            <a href='mailto:efenstakes101@gmail.com' title="Email me" className="contact_card su_15">
                <AttachEmailIcon />
                <p> efenstakes101@gmail.com </p>
            </a>
            
        </div>
    )
}

export default ContactSection
