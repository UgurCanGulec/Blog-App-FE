import './header.css'
import bgImage from './bgimage.jpg'

export default function 
Header() {
  return (
    <div className='header'>
        <div className="headerTitles">
            <span className='headerTitleSm'> ugurcangulec.com</span>
            <span className='headerTitleLg'>Blog</span>
        </div>
        <div>
        <img className='headerImg' src={bgImage} alt=""
         />
        </div>
    </div>
  )
}
