import React, { PureComponent } from 'react';
import './Profile.css'
class Profile extends PureComponent {
  render() {
    const { post } = this.props; 
    return (
          <div className="col-lg-4  col-12 post">
            <div className="wrapper-post" 
          
            style={{ backgroundImage: `url(${post.img})`}}>
              <div className="hover">
                <div>
                  <img src="https://cdn.glitch.com/6ccfbc6a-9aaf-46cd-b82e-57abff9221b0%2Fheart.png?v=1590148496701" alt="img" />
                  <p>1</p>
                  <img src="https://cdn.glitch.com/6ccfbc6a-9aaf-46cd-b82e-57abff9221b0%2Fheart.png?v=1590148496701" alt="img" />
    <p>{post.comment.length}</p>
                </div>
              </div>
            </div>
          </div>
    );
  }
}

export default Profile;