import React from 'react';
import "animate.css";
import {AnimationOnScroll } from "react-animation-on-scroll"
import content from '../content/content';

export default function Section2() {
  return (
    <section id='section2'>
      <div className='container-fluid row'>
        <div className='col d-flex flex-column justify-content-between '>
            <h2 className='headingText section_heading'>{content.section2.mainHeading}</h2>
            <div>
              <AnimationOnScroll animateIn='animate__animated animate__slow animate__fadeInUp'>
              <p className='bold_para ' style={{marginBottom:"20px"}}>{content.section2.bold_Paragraph}</p>
              </AnimationOnScroll>
              <AnimationOnScroll animateIn='animate__animated animate__slow animate__fadeInLeft'>
              <p className='paragraphtext '>{content.section2.text_Paragraph}</p>
              </AnimationOnScroll>
            </div>
        </div>
        <div className='col'>
          <div className='special_img'>
            <img src={content.section2.img.src} alt={content.section2.img.alt} className='img-fluid'/>
          </div>
        </div>
        </div>
    </section>
  )
}
