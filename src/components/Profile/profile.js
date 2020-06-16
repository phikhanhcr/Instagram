import React, { useState, useEffect } from 'react';
import './Profile.css'
import Header from '../Header/Header'
import EachPost from './EachPost'
import axios from 'axios'

function Profile() {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    async function getPost() {
      const allPost = await axios.get("http://localhost:3001/api/post");
      console.log(allPost.data);
      // const myPost = allPost.data.filter(ele => {
        
      // })
      const allUser = await axios.get("http://localhost:3001/api/user")
      const currentUser = allUser.data.filter(ele => {
        return ele.username === localStorage.getItem('token')
      })
      console.log(currentUser)
      const myPost = allPost.data.filter(ele => {
        return ele.by === currentUser[0]._id
      })
      console.log(myPost)
      setPostList(myPost);
    }
    getPost()
  }, [])

  return (
    <div className="App">
      <Header />
      <div>
        <div className="Profile">
          <div className="container">
            <div className="EditProfile">
              <img className="avatar"
                src="https:instagram.fhan2-1.fna.fbcdn.net/v/t51.2885-19/s320x320/72481773_538572816986102_3710814270154342400_n.jpg?_nc_ht=instagram.fhan2-1.fna.fbcdn.net&_nc_ohc=_eMb7uRe9YcAX_1rxLE&oh=5d44243ec8ace28acb449eb15cbf7cec&oe=5EFEB073"
                alt="img" />
              <div className="wrapper-profile">
                <div className="first">
                  <p className="name">{localStorage.getItem("token")}</p>
                  <a className="btn btn-light" href="#">Edit Profile</a>
                  <img src="https:cdn.glitch.com/4d1fcf2d-432d-48b9-9896-d4591b16fa4e%2Fsettings.png?v=1590919881874"
                    alt="img" />
                </div>
                <div className="second">
                  <p>6 Posts</p>
                  <p>27.2M followers</p>
                  <p>29 following</p>
                </div>
                <div className="first">
                  <b>Phi Khanh Cr</b>
                </div>
              </div>
            </div>
            <div class="Wrapper-row">
              <div class="row">
                {
                  postList.length && postList.map((ele, index) => <EachPost post={ele} />)
                }

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
// class Profile extends PureComponent {
//   render() {
//     return (
//       <div className="App">
//         <Header />
//         <div>
//           <div className="Profile">
//             <div class="container">
//               <div className="EditProfile">
//                 <img className="avatar"
//                   src="https://instagram.fhan2-1.fna.fbcdn.net/v/t51.2885-19/s320x320/72481773_538572816986102_3710814270154342400_n.jpg?_nc_ht=instagram.fhan2-1.fna.fbcdn.net&_nc_ohc=_eMb7uRe9YcAX_1rxLE&oh=5d44243ec8ace28acb449eb15cbf7cec&oe=5EFEB073"
//                   alt="img" />
//                 <div className="wrapper-profile">
//                   <div className="first">
//                     <p className="name">phikhanhcr</p>
//                     <a className="btn btn-light" href="#">Edit Profile</a>
//                     <img src="https://cdn.glitch.com/4d1fcf2d-432d-48b9-9896-d4591b16fa4e%2Fsettings.png?v=1590919881874"
//                       alt="img" />
//                   </div>
//                   <div className="second">
//                     <p>6 Posts</p>
//                     <p>27.2M followers</p>
//                     <p>29 following</p>
//                   </div>
//                   <div className="first">
//                     <b>Phi Khanh Cr</b>
//                   </div>
//                 </div>
//               </div>
//               <div class="Wrapper-row">
//                 <div class="row">
//                   <EachPost />
//                   <EachPost />
//                   <EachPost />
//                   <EachPost />
//                   <EachPost />

//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//     );
//   }
// }

