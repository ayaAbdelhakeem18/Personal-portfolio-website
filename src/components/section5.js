import React from 'react';
import {AnimationOnScroll} from "react-animation-on-scroll";
import content from '../content/content';

function Section5(props) {
  return (
    <section id='section5'>
      <div className='container-fluid row'>
        <div className='col first_div'>
            <div className='special_img'><img src={content.section5.img.src} alt={content.section5.img.alt} className='img-fluid'/></div>
        </div>
        <div className='col d-flex flex-column justify-content-between sec_div'>
            <h2 className='section_heading headingText'>{content.section5.mainHeading}</h2>
            <div className='row justify-content-between'>
              <div className='col item'>
                <AnimationOnScroll animateIn='animate__animated animate__slow animate__fadeInDown' >
                <h4 className='bold_para '>{content.section5.firstdiv.header}</h4>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn='animate__animated animate__slower animate__fadeInRight'>
                <p className='paragraphtext '>{content.section5.firstdiv.p}</p>
                </AnimationOnScroll>
              </div>
              <div className='col item'>
                 <AnimationOnScroll animateIn='animate__animated animate__slow animate__fadeInDown'>
                <h4 className='bold_para '>{content.section5.seconddiv.header}</h4>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn='animate__animated animate__slower animate__fadeInRight'>
                <p className='paragraphtext '>{content.section5.seconddiv.p}</p>
                </AnimationOnScroll>
              </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Section5
