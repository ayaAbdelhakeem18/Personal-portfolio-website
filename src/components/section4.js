import React from 'react';
import {AnimationOnScroll} from "react-animation-on-scroll";
import content from '../content/content';

function Section4(props) {
  return (
    <section id='section4'>
      <div className='container-fluid'>
        <h2 className='headingText section_heading'>{props.mainHeading}</h2>
        <div className='row work-samples'>
          {content.section4.work_list.map((elle,i)=>{
            return(
              <div key={i} className='col'>
               <div className='framed_img img_item'><img src={elle.img} alt={elle.name} className="img-fluid"/></div>
               <AnimationOnScroll animateIn='animate__animated animate__slow animate__fadeInUp'>
               <div className='info'>
                <h4 className='headingText bold_para'>{elle.name}</h4>
                <hr></hr>
                <pre> Dimensions : {elle.dimension}</pre>
                <hr></hr>
                <pre> Concept : {elle.concept}</pre>
                <hr></hr>
                <pre> Year : {elle.year}</pre>
               </div>
              </AnimationOnScroll> 
              </div>
            )
          })}
        </div>
        <div className='row special-work justify-content-between'>
          <div className='img col'><img src={content.section4.special_section.section_img.src} alt={content.section4.special_section.section_img.alt} className='img-fluid'/></div>
          <div className='col '>  
          <div className='special_img framed_img'><img src={content.section4.special_section.special_work.img} alt={content.section4.special_section.special_work.name} className="img-fluid"/></div>
          <AnimationOnScroll animateIn='animate__animated animate__slow animate__fadeInRight'>
               <div className='info'>
               <h4 className='headingText bold_para'>{content.section4.special_section.special_work.name}</h4>
                <hr></hr>
                <pre> Dimensions : {content.section4.special_section.special_work.dimension}</pre>
                <hr></hr>
                <pre> Concept : {content.section4.special_section.special_work.concept}</pre>
                <hr></hr>
                <pre> Year : {content.section4.special_section.special_work.year}</pre>
               </div>
           </AnimationOnScroll>    
          </div>

        </div>
        <div className='row quote'>
          <div className='col'>
            <q className='headingText '>{content.section4.quote_section.quote}</q>
          </div>
          <div className='col'>
            <div className='img'><img src={content.section4.quote_section.section_img.src} alt={content.section4.quote_section.section_img.alt} className='img-fluid'/></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section4;