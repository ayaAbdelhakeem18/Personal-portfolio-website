import "animate.css";
import content from "../content/content";
export default function Home() {
  return (
    <header id='home'>
      <div className='container-fluid '>
       <div className='row'>
        <div className='col imgs position-relative'>
         <div className='bigimg' ><img src={content.header.imgOne.src} alt={content.header.imgOne.alt} className="img-fluid"/></div>
         <div className='smallimg '><img src={content.header.imgTwo.src} alt={content.header.imgTwo.alt} className="img-fluid" /></div>
       </div>
       <div className='col position-relative'>
      <div className='heading-class'>
       <h1 className="section_heading headingText">{content.header.name}</h1>
      </div>
        <div className='info'>
          <h2 className="bold_para headingText animate__animated animate__fadeInDown">{content.header.role}</h2>
          <p className="paragraphtext animate__animated animate__slow animate__fadeInRight">{content.header.description}</p>
        </div>
        <div><button className='btn'><a href="mailto:aya.abdelhakeem18@gmail.com?subject=subject text">{content.header.button}</a></button></div>
       </div>
       </div>
    </div>
  </header>
  )
}
