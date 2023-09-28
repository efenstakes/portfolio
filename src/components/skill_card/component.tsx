import styled from '@emotion/styled'
import { LinearProgress, linearProgressClasses } from '@mui/material'
import clsx from 'clsx'


// models
import { Skill, Tool } from '../../models/skill'


// components


import './component.scss'
import VSpacer from '../v_spacer/component'


const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    // height: 20,
    borderRadius: 5,
    width: '100%',
    height: '1rem',
    maxWidth: '320px',
    [`&.${linearProgressClasses.colorPrimary}`]: {
    //   background: 'linear-gradient(30deg, red, yellow)',
      background: '#1E1E1E',
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 2,
      background: 'linear-gradient(60deg, #F2A25C 40%, #F2C166)',
    },
  }));


type ComponentProps = {
    skill: Skill
    animationIndex: number
    reverse?: boolean
}
const SkillCard = ({ skill, animationIndex, reverse }: ComponentProps) => {
    const { title, tools, image } = skill

    // return <p>{skill.title}</p>
    return (
        <div
            className={
                clsx([
                    'card', 'skill_card', 'clickable', [`fd_${animationIndex}`],
                    {
                        'skill_card__reverse': reverse
                    }
                ])
            }
        >

            <div className="card__contents">

                <h4 className='text_4 bolder su_8'> {title } </h4>
                <VSpacer space={1} />

                <div className="card__tools_container">
                    {
                        tools?.map((s: Tool, index: number)=> {

                            return (
                                <div 
                                    key={index} 
                                    className={
                                        clsx([
                                            "card__tool",
                                            `su_${index+20}`
                                        ])
                                    }
                                >
                                    <p><small><strong>{ s.tool }</strong></small></p>
                                    <VSpacer space={.5} />

                                    {/* <LinearProgress
                                        variant="determinate"
                                        // color='primary'
                                        value={s.proeffiency}
                                        style={{
                                            width: '100%',
                                            height: '1rem',
                                            maxWidth: '320px',
                                            borderRadius: '4px',
                                            // color: 'red',
                                            backgroundColor: 'black',
                                            color: 'linear-gradient(30deg, red, yellow)'
                                        }} 
                                    /> */}
                                    <BorderLinearProgress
                                        variant="determinate"
                                        value={s.proeffiency}
                                    />
                                </div>
                            )
                        })
                    }
                </div>

                {/* <BorderLinearProgress variant="determinate" value={50} style={{color: 'white'}} /> */}

                {/* <div className='card__contents__tools row_wrapped ca_center'> */}
                    {/* {
                        tools?.map((s: Tool, index: number)=> {

                            return (
                                <div 
                                    key={index} 
                                    className={
                                        clsx([
                                            "card__contents__tools__chip",
                                            `su_${index+10}`
                                        ])
                                    }
                                >
                                    { s }
                                </div>
                            )
                        })
                    } */}
                {/* </div> */}
            </div>

            <img src={image}  className="card__image fd_16"/>
            
        </div>
    )
}

export default SkillCard
