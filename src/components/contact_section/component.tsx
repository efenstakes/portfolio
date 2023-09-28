
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import AttachEmailIcon from '@mui/icons-material/AttachEmail'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'


// components



const ContactSection = () => {

    return (
        <div className="contact">
            

            <a href='https://github.com/efenstakes' className="contact_card su_12" target='_blank'>
                <GitHubIcon />
                <p> Efenstakes Git </p>
            </a>
            <a href='https://www.linkedin.com/in/felix-ndunda-0ba841108/' className="contact_card su_14" target='_blank'>
                <LinkedInIcon />
                <p> Felix Ndunda </p>
            </a>

            <a href='mailto:efenstakes101@gmail.com' className="contact_card su_15">
                <AttachEmailIcon />
                <p> efenstakes101@gmail.com </p>
            </a>

            <a href='tel:+254714335322' className="contact_card su_16">    
                <LocalPhoneIcon />
                <p> +254-799-91-9960 </p>
            </a>
            
        </div>
    )
}

export default ContactSection
