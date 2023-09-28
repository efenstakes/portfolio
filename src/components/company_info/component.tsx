import clsx from 'clsx'

import { Fab, } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';


import './component.scss'


// models
import { Company } from '@/models/company';
import VSpacer from '../v_spacer/component';

// component



type ComponentProps = {
    company: Company
    close: any
    isMobile: boolean
}
const CompanyInfo = ({ company, close, isMobile, }: ComponentProps) => {
    return (
        <div className='company_info'>

            {
                isMobile &&
                    <div className='row ma_center'>
                        <Fab color="primary" aria-label="add" onClick={close}>
                            <CloseIcon />
                        </Fab>
                        <VSpacer space={1} />
                    </div>
            }
        
            <p className='text_4 su_1 bolder'>
                { company.name }
            </p>
            <VSpacer space={.2} />
            <p className='company_info__when su_3 text_7'>
                { company.when }
            </p>
            <VSpacer space={2} />



            <h2 className='su_5'> Achievements </h2>
            <VSpacer space={1} />

            {
                company?.responsibilities?.map((resp, index)=> {

                    return (
                        <div 
                            key={index} 
                            className={
                                clsx([
                                    "company_info__responsibilities", 
                                    "row_wrapped", "ca_center",
                                    [`su_${index+2+15}`]
                                ])
                            }
                        >
                            {/* <div className="company_info__responsibilities__number">
                                { index + 1 }
                            </div> */}
                            <p className='' style={{ fontWeight: 'normal' }}>
                                { resp }
                            </p>
                        </div>
                    )
                })
            }
            <VSpacer space={2} />

    
            <h2 className='su_5'> Tools </h2>
            <VSpacer space={1} />

            <div className="company_info__tools row_wrapped ca_center">
                {
                    company?.skills?.map((skill, index)=> {

                        return (
                            <div 
                                key={index} 
                                className={
                                    clsx([
                                        'chip_md', 'chip_rounded', 'text_7', 'company_info__chip',
                                        [`su_${index+2+15}`]
                                    ])
                                }
                            >
                                { skill }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default CompanyInfo