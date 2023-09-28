"use client"
import { useRef } from "react"
import { useWindowWidth } from '@react-hook/window-size';

import Appbar from "@/components/appbar/component"
import VSpacer from "@/components/v_spacer/component"
import Welcome from "@/components/welcome/component"

import './page.scss'

export default function Home() {
  const width = useWindowWidth()
  const isMobile = width < 800
  
  let welcomeScrollToRef = useRef<HTMLDivElement>(null)
  let companiesScrollToRef = useRef<HTMLDivElement>(null)
  
  const scrollToCompanies = ()=> {
    if( !companiesScrollToRef.current || companiesScrollToRef.current == null ) return

    companiesScrollToRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="home_page">
      <Appbar />
      
      
      <div className='home_page__content'>
        <VSpacer space={ isMobile ? 4 : 0 } />

        {/* welcome */}
        <div className='welcome__scroll_to' ref={welcomeScrollToRef} />
        <Welcome scrollToCompanies={scrollToCompanies} />
        <VSpacer space={8} />
        
      </div>
    </div>
  )
}

