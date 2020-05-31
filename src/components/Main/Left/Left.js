import React, { PureComponent } from 'react';
import '../Main.css';
import RecommendFriends from './Recommend';
class Left extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      username: localStorage.getItem('token')
    }
  }
  render() {
    return (
      <div className="Left">
        <div className="wrapper-left">
          <div className="me">
            <img src="https://scontent.fhan2-3.fna.fbcdn.net/v/t1.0-9/73244435_2997608627131456_2957342681333760000_n.jpg?_nc_cat=108&_nc_sid=85a577&_nc_ohc=5U53gYmzXVoAX-MOTT3&_nc_ht=scontent.fhan2-3.fna&oh=1755644c07fb47f26d8a70aad09046f4&oe=5EEEBDBC" alt="" />
            <div>
              <a href="#"><b>{this.state.username}</b></a>
              <p>Phi Khanh Cr</p>
            </div>
            <a href="/login" onClick={() => { localStorage.removeItem('token') }} className="btn btn-light">Log Out</a>
          </div>
          <RecommendFriends />
        </div>
      </div>
    );
  }
}

export default Left;