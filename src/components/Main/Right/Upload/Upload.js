import React, { Component, useState } from 'react';
import axios from 'axios'
import { Redirect , Link } from 'react-router-dom'
export default class MyUploader extends Component {
  constructor(props) {
    super(props)
    this.state = {
      image: "",
      setImage: "",
      description : "",
      loading: false,
      setLoading: false,
      uploading : false
    }
  }
  selectImage = async event => {
    const files = event.target.files;
    const data = new FormData()
    data.append('file', files[0])
    data.append('upload_preset', 'Instagram')
    this.setState({
      loading: true
    })
    const res = await fetch(
      'https://api.cloudinary.com/v1_1/pklevi/image/upload',
      {
        method: 'POST',
        body: data
      }
    )
    const file = await res.json();
    console.log("fuke " + file.url)
    this.setState({
      setImage: file.secure_url,
      loading: false
    })

  }
  postStatus = async (event) => {
    event.preventDefault()
    const res = await axios.get('http://localhost:3001/api/user')
    let data = res.data;
    const username = localStorage.getItem('token');
    const currentUser = data.filter(ele => {
      return ele.username === username
    })
    var newPost = {
      avatar: "https://instagram.fhan2-3.fna.fbcdn.net/v/t51.2885-15/e35/98274338_318501435800155_6640321408878702086_n.jpg?_nc_ht=instagram.fhan2-3.fna.fbcdn.net&_nc_cat=107&_nc_ohc=ISaDRsc6Z48AX8T4XC8&oh=c9dee2c223f0ec9cac11cc66fd11e86d&oe=5EF078DD",
      img: this.state.setImage,
      description : this.state.description,
      by : currentUser[0]._id
    }
    console.log(" file day " + this.state.setImage)
    axios.post(`http://localhost:3001/api/post`, { newPost })
      .then(res => {
        console.log(res)
        console.log(res.data);
        this.setState({
          uploading : true
        })
      }).catch(err => {
        console.log(err)
      })
  }

  typeDescription = async (event) => {
    this.setState({
      description : event.target.value
    })

  }

  render() {
    const { image, setImage, loading, setLoading , uploading } = this.state;
    if(uploading) {
      return <Redirect to="/" />
    }
    return (
      <div className="Upload">
        <div className="wrapper-upload">
          <div className="first">
            <h3>Create a new Post</h3>
          </div>
          <div className="second">
            <form onSubmit={this.postStatus}>
              <input type="text" placeholder="What's up , bro ? " onChange={this.typeDescription}/>
              <input
                type="file"
                placeholder="Upload"
                onChange={this.selectImage}
              />
              <button className="btn btn-primary">Post</button>
            </form>


          </div>
          {
            loading ? (
              <h3>Loadding</h3>
            ) : (
                <div>
                  <img src={setImage} />
                </div>
              )
          }
        </div>
        
      </div>
    );
  }
}
