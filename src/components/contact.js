import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import content from '../content/content'

export default function Contact(props) {
  return (
    <section id='contact'>
      <div className='container-fluid row'>
        <div className='col d-flex flex-column justify-content-between'>
          <h2 className='section_heading headingText'>{content.contact.mainHeading}</h2>
          <div className='contact-info'>
            <h4 className=' bold_para headingText '>ADDRESS</h4>
            <AnimationOnScroll animateIn="animate__animated animate__slow animate__fadeInLeft">
            <p className=' paragraphtext '>{content.contact.contact_info.address}</p>
            </AnimationOnScroll>
            <h4 className=' bold_para headingText '>PHONE</h4>
            <AnimationOnScroll animateIn="animate__animated animate__slow animate__fadeInLeft">
            <p className=' paragraphtext '>{content.contact.contact_info.phone}</p>
            </AnimationOnScroll>
            
            <h4 className=' bold_para headingText '>EMAIL</h4>
            <p className=' paragraphtext '>{content.contact.contact_info.email}</p>

            <div className='social_icons d-flex'>
            <i class="fa-brands fa-facebook"> <a href={content.contact.contact_info.facebook_link}/></i>
            <i class="fa-brands fa-instagram"><a href={content.contact.contact_info.instagram_link} /></i>
            <i class="fa-brands fa-twitter">  <a href={content.contact.contact_info.twitter_link}/></i>
            </div>
          </div>
        </div>
        <div className='col position-relative'>
            <div className='bigimg'><img src={content.contact.bigimg.src} alt={content.contact.bigimg.alt} className="img-fluid"/></div>
            <div className='smallimg special_img framed_img'><img src={content.contact.smallimg.src} alt={content.contact.smallimg.alt} className="img-fluid"/></div>
        </div>
      </div>
    </section>
  )
}
