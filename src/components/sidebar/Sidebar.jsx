import './sidebar.css'
import userImg from './user.jpg'

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarItem">
          <span className="sidebarTitle">
            Hakkımda
          </span>
          <img className='aboutMeImg' src={userImg} alt="" />
          <p>Adım Uğur Can Güleç.
            Son 2 senedir Java Developer olarak kurumsal java projelerinde görev alıyorum. 
          </p>
        </div>
        <div className="sidebarItem">
          <div className="sidebarTitle">
            İlgi Alanlarım
          </div>
          <ul className="sidebarList">
            <li className="sidebarListItem">Web Uygulamaları</li>
            <li className="sidebarListItem">Dev Ops</li>
            <li className="sidebarListItem">Mobil Programlama</li>
            <li className="sidebarListItem">Design Patterns</li>
          </ul>
        </div>
        <div className="sidebarItem">
          <span className="sidebarTitle">Sosyal Medya</span>
          <div className="sidebarSocial">
            <i className="sidebarIcon fa-brands fa-instagram"></i>
            <i className="sidebarIcon fa-brands fa-twitter"></i>
            <i className="sidebarIcon fa-brands fa-linkedin"></i>
          </div>
        </div>
    </div>
  )
}
