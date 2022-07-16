import './header.css'
import bgImage from './bgimage.jpg'

export default function 
Header() {
  return (
    <div className='header'>
        <div className="headerTitles">
            <span className='headerTitleSm'> "Bilgi sermayemdir, bilim silahımdır, sabır giysimdir, yetinmek en üstün kazancımdır."</span>
            <span className='headerTitleLg'>Seneca</span>
        </div>
        <div>
        <img className='headerImg' src={bgImage} alt=""
         />
        </div>
    </div>
  )
}
