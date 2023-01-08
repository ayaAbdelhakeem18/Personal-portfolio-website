import React from 'react';
import {AnimationOnScroll } from "react-animation-on-scroll"
import content from '../content/content';


export default function Section3() { 
  return (
    <section id='section3'>
     <div className='container-fluid'>
      <h2 className='headingText section_heading'>{content.section3.mainHeading}</h2>
      <div className='d-flex justify-content-between content'>
        <div className='img item'><img src={content.section3.item1.src} alt={content.section3.item1.alt} className='img-fluid'/></div>
        <div className=' item'>
          <AnimationOnScroll animateIn='animate__animated animate__slow animate__fadeInDown'>
            <h3 className='bold_para '>{content.section3.item2.heading}</h3>
            </AnimationOnScroll>
            <ul className='paragraphtext'>
              {content.section3.item2.list.map((elle,i)=>{
                return(
                <AnimationOnScroll animateIn='animate__animated animate__slow animate__fadeInLeft' key={i}>
                  <li className='list-ele ' >{elle}</li>
                </AnimationOnScroll>  
                )
              })}
            </ul>
        </div>
        <div className='item'>
        <AnimationOnScroll animateIn='animate__animated animate__slow animate__fadeInDown'>
            <h3 className='bold_para'>{content.section3.item3.heading}</h3>
        </AnimationOnScroll>    
            <ul className=' paragraphtext'>
            {content.section3.item3.list.map((elle,i)=>{
                return(
                  <AnimationOnScroll animateIn='animate__animated animate__slow animate__fadeInLeft' key={i}>  
                  <li className='list-ele'>{elle}</li>
                  </AnimationOnScroll>
                )
              })}
            </ul>
        </div>
      </div>
      </div>
    </section>
  )
}
