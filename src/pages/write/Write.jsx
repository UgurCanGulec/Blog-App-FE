import './write.css'
import defaultPostImg from './defaultPostImg.jpg'
import { useState } from 'react'

const Write = () => {
    
    const [image, setImage] = useState(defaultPostImg)

    const uploadImage = e => {
       const reader = new FileReader()
       reader.onload = () => {
        debugger
        if (reader.readyState === 2) {
            setImage(reader.result)
        }
       }
       reader.readAsDataURL(e.target.files[0])
    }

  return (
    <div className='write'>
        <img src={image} alt="" className="writeImg" />
        <form className="witeForm">
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                    <i className="writeIcon fa-solid fa-plus"></i>
                </label>
                <input type="file" onChange={uploadImage} id='fileInput' style={{display:"none"}}/>
                <input type="text" placeholder='Başlık' className='writeInput' autoFocus={true} />
                <button className="writeSubmit">Yayınla</button>
            </div>
            <div className="writeFormGroup">
                <textarea placeholder='Anlatmaya başla :)' type="text" className='writeInput writeText'>
                </textarea>
            </div>
        </form>
    </div>
  )
}

export default Write