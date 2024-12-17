
import "./About.css";
import images from "../../constants/images";




const About = () => {
   

  return (
    <div className='about section-p'>
        <div className='container'>
            <div className='about-content'>
                <div className='about-grid grid'>
                    <img src = {images.About_Alex} alt = "" className='about-img mx-auto' />
                    <div className='section-title'>
                        <h3 className='text-brown'>I'm <span className='text-dark'>Navaneeth</span></h3>
                        <p style={{ textIndent: '30px' }} className='text mx-auto'>Full-stack developer dedicated to creating exceptional user experiences. My testing background ensures that every application is reliable, performant, and meets the highest quality standards.<br />Full-stack developer with a rigorous approach to quality assurance. Bringing a tester's mindset to every stage of development, from design to deployment.</p>
                    </div>
                </div>

               
               
            </div>
        </div>
    </div>
  )
}

export default About