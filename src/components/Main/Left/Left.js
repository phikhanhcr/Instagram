import React, { PureComponent } from 'react';
import ReactNotification from 'react-notifications-component'
import { store } from 'react-notifications-component'
import '../Main.css';
import RecommendFriends from './Recommend';
import 'react-notifications-component/dist/theme.css'
class Left extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      username: localStorage.getItem('token')
    }
  }

  handleClickLogOut = async () => {
    store.addNotification({
      title: "Log Out Successfully!",
      message: "Good bye and see you again",
      type: "success",
      insert: "top",
      container: "top-right",
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"],
      dismiss: {
        duration: 5000,
        onScreen: true
      }
    });
    localStorage.removeItem('token')
    

  }
  render() {
    return (
      <div>
        <div className="Left">

          <div className="wrapper-left">
            <div className="me">
              <img src="https://scontent.fhan2-3.fna.fbcdn.net/v/t1.0-9/73244435_2997608627131456_2957342681333760000_n.jpg?_nc_cat=108&_nc_sid=85a577&_nc_ohc=5U53gYmzXVoAX-MOTT3&_nc_ht=scontent.fhan2-3.fna&oh=1755644c07fb47f26d8a70aad09046f4&oe=5EEEBDBC" alt="" />
              <div>
                <a href="#"><b>{this.state.username}</b></a>
                <p>Phi Khanh Cr</p>
              </div>
              <a
                href="/login"
                onClick={this.handleClickLogOut}
                className="btn btn-light"
              >
                Log Out
              </a>
            </div>
            <RecommendFriends />
          </div>
        </div>
      </div>

    );
  }
}



export default Left;