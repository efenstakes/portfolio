"use client"
import { useRef } from "react"
import { useWindowWidth } from '@react-hook/window-size';

import Appbar from "@/components/appbar/component"
import VSpacer from "@/components/v_spacer/component"
import Welcome from "@/components/welcome/component"
import CompaniesSection from "@/components/companies_section/component";

import './page.scss'
import ProjectsSection from "@/components/projects_section/component";
import SectionTitle from "@/components/section_title/component";
import SkillsSection from "@/components/skills_section/component";
import ContactSection from "@/components/contact_section/component";

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
        
        {/* companies */}
        <div className='companies__scroll_to' ref={companiesScrollToRef} />
        <CompaniesSection />
        <VSpacer space={8} />

        {/* projects */}
        <ProjectsSection />
        <VSpacer space={8} />

        <SectionTitle title="SKILLS" />
        <VSpacer space={2} />
        <SkillsSection />
        <VSpacer space={8} />

        <div className="contact_section">
            <SectionTitle title="CONTACT ME" isWhite />
            <VSpacer space={2} />
            <ContactSection />
        </div>
        <VSpacer space={2} />

      </div>
    </div>
  )
}

