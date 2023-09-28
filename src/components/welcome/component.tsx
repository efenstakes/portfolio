import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

// import img from '../../assets/1.jpg'
import VSpacer from '../v_spacer/component'


import './component.scss'



type WelcomeProps = {
    scrollToCompanies: ()=> void,
}
const Welcome = ({ scrollToCompanies, }: WelcomeProps) => {
    
    const img = '/assets/images/1.jpg'
    return (
        <div className='column ma_center ca_center welcome'>
            
            <div className="welcome__underlay"></div>

            <VSpacer space={-1} />

            {/* image */}
            <div className="welcome_image__container row ma_center">
                <p className="fd_10 welcome_image__container__text">
                    FELIX
                </p>
                <img
                    className="su_2 welcome_image__container__image" 
                    src={img} 
                />
            </div>
            {/* <p className="fd_10 welcome_image__container__text">
                FELIX
            </p> */}
            {/* <div className="welcome_image__container">
                <img
                    className="su_2 welcome_image__container__image" 
                    src={img} 
                />
            </div> */}
            {/* <VSpacerComponent space={.5} /> */}

            {/* roles */}
            <p className="welcome__text welcome__text_1 su_4 title_6 bolder">
                I Transform
            </p>

            {/* hintline */}
            <p className="welcome__text welcome__text_2 su_6 text_3 bolder">
                IDEAS INTO PRODUCTS
            </p>
            <VSpacer space={.5} />

            {/* name */}
            <p className="welcome__text text_7 su_9 welcome__my_name">
                And I'm Felix
            </p>

            <div
                className="welcome__side_go_down row ma_center ca_center"
                onClick={()=> scrollToCompanies()}
            >
                <KeyboardArrowDownIcon className='welcome__side_icon' sx={{ fontSize: '2rem', }} />
            </div>
        </div>
    )
}

export default Welcome