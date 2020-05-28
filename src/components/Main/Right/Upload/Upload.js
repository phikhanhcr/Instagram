import React, { useState } from 'react';
import axios from 'axios'
export default function MyUploader() {

  const [image, setImage] = useState("")
  const [loading, setLoading] = useState(false)
 
  const selectImage = async event => {
    const files = event.target.files;
    const data = new FormData()
    data.append('file', files[0])
    data.append('upload_preset', 'Instagram')
    setLoading(true)
    const res = await fetch(
      'https://api.cloudinary.com/v1_1/pklevi/image/upload',
      {
        method: 'POST',
        body: data
      }
    )
    const file = await res.json();
    console.log(file.url)
    setImage(file.secure_url)
    setLoading(false)
  }


  const postStatus = async () => {
   
    var newPost = {
      avatar: "https://instagram.fhan2-3.fna.fbcdn.net/v/t51.2885-15/e35/98274338_318501435800155_6640321408878702086_n.jpg?_nc_ht=instagram.fhan2-3.fna.fbcdn.net&_nc_cat=107&_nc_ohc=ISaDRsc6Z48AX8T4XC8&oh=c9dee2c223f0ec9cac11cc66fd11e86d&oe=5EF078DD",
      img : image 
    }
    axios.post(`http://localhost:3001/api/post`, {newPost})
    .then(res => {
      console.log(res)
      console.log(res.data);
    }).catch(err => {
      console.log(err)
    })
  }

  return (
    <div className="Upload">
      <div className="wrapper-upload">
        <div className="first">
          <h3>Create a new Post</h3>
        </div>
        <div className="second">
          <input type="text" placeholder="What's up , bro ? " />
          <input
            type="file"
            placeholder="Upload"
            onChange={selectImage}
          />
        </div>
        {
          loading ? (
            <h3>Loadding</h3>
          ) : (
              <div>
                <img src={image} />
              </div>
            )
        }
        <div>
          <button onClick={postStatus} className="btn btn-primary">Post</button>
        </div>
      </div>
    </div>

  );

}