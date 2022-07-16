import './topbar.css'
import profile from './profile.jpg'

export default function TopBar() {
  return (
    <div className='top'>
        <div className='topLeft'>
            <i className="topIcon fa-brands fa-instagram"></i>
            <i className="topIcon fa-brands fa-twitter"></i>
            <i className="topIcon fa-brands fa-linkedin"></i>
        </div>
        <div className='topCenter'>
            <ul className="topList">
                <li className='topListItem'>ugurcangulec.com</li>
                <li className='topListItem'>java</li>
                <li className='topListItem'>spring</li>
                <li className='topListItem'>unit testing</li>
                <li className='topListItem'>reactjs</li>
                <li className='topListItem'>devops</li>
                <li className='topListItem'>hakkımda</li>
            </ul>
        </div>
        <div className='topRight'>
        <img
        className='topImg'
        src={profile}
        alt=""
        />
          <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
          <ul className="topList">
            <li className='rightTopChild'>ekle</li>
            <li className='rightTopChild'>çıkış</li>
          </ul>
        </div>
    </div>
  )
}
