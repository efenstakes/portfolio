import { IconButton } from '@mui/material'

import GitHubIcon from '@mui/icons-material/GitHub'
import EmailIcon from '@mui/icons-material/Email'
import { FaLinkedin, FaMedium } from "react-icons/fa6";

import './component.scss'


const Appbar = () => {
  return (
    <div className='appbar_md padded_container row ma_space_btn ca_center'>
        
        <p className="appbar__title text_4 bold su_2">
            FELIX
        </p>

        <div className="appbar_right row ma_end ca_center">

            {/* git */}
            <a href='https://github.com/efenstakes' title="My Github Link" className="su_6" style={{ margin: '0 .5rem' }} target='_blank'>
                <IconButton color='primary' aria-label="github">
                    <GitHubIcon />
                </IconButton>
            </a>

            {/* linkedin */}
            <a href='https://www.linkedin.com/in/felix-ndunda-0ba841108/' title="Medium personal blog" className="su_9" style={{ margin: '0 .5rem' }} target='_blank'>
                <IconButton color='primary' aria-label="linkedin">
                    <FaLinkedin />
                </IconButton>
            </a>

            {/* medium */}
            <a href='https://medium.com/@efenstakes101' title="Medium personal blog" className="su_9" style={{ margin: '0 .5rem' }} target='_blank'>
                <IconButton color='primary' aria-label="linkedin">
                    <FaMedium />
                </IconButton>
            </a>

            {/* email me */}
            <a href='mailto:efenstakes101@gmail.com' title="Email me" className="su_11" style={{ margin: '0 .5rem' }}>
                <IconButton color='primary' aria-label="email me">
                    <EmailIcon />
                </IconButton>
            </a>

        </div>

    </div>
  )
}

export default Appbar