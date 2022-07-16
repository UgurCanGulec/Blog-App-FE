import './post.css'
import postImg from './postImg.jpg'

export default function Post() {
  return (
    <div className='post'>
        <img className='postImg' src={postImg} alt="" />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Yazılım</span>
                <span className="postCat">Bilişim</span>
            </div>
            <span className="postTitle">Java'nın Geleceği</span>
            <hr/>
            <span className="postDate">1 hour ago</span>
        </div>
        <p className='postDesc'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque,
             repellat nobis voluptates quas doloribus, qui beatae esse nemo aliquam earum magnam? Voluptatibus
              ab sit minus delectus nobis minima at molestiae.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque,
             repellat nobis voluptates quas doloribus, qui beatae esse nemo aliquam earum magnam? Voluptatibus
              ab sit minus delectus nobis minima at molestiae.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque,
             repellat nobis voluptates quas doloribus, qui beatae esse nemo aliquam earum magnam? Voluptatibus
              ab sit minus delectus nobis minima at molestiae.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque,
             repellat nobis voluptates quas doloribus, qui beatae esse nemo aliquam earum magnam? Voluptatibus
              ab sit minus delectus nobis minima at molestiae.
        </p>
    </div>
  )
}
