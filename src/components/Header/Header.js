import React, { PureComponent } from 'react';
import './Header.css';

class Header extends PureComponent {
  render() {
    return (

      <div className="Header">
        <div className="container">
          <div className="wrapper-header">
            <a href="#">
            <img src="https://cdn.glitch.com/6ccfbc6a-9aaf-46cd-b82e-57abff9221b0%2Fhi.png?v=1590147338026" alt="instagram" />
            </a>
            
            <input type="text" placeholder="Search" />
            <div className="icon">
              <a href="#">
                <img src="https://cdn.glitch.com/6ccfbc6a-9aaf-46cd-b82e-57abff9221b0%2Fbrowser.png?v=1590147652762" alt="home" />
              </a>
              <a href="#">
                <img src="https://cdn.glitch.com/6ccfbc6a-9aaf-46cd-b82e-57abff9221b0%2Fplane.png?v=1590148565871" alt="home" />
              </a>
              <a href="#">
                <img src="https://cdn.glitch.com/6ccfbc6a-9aaf-46cd-b82e-57abff9221b0%2Fcompass.png?v=1590148518875" alt="home" />
              </a>
              <a href="#">
                <img src="https://cdn.glitch.com/6ccfbc6a-9aaf-46cd-b82e-57abff9221b0%2Fheart.png?v=1590148496701" alt="home" />
              </a>
              <a href="#">
                <img className="avatar" src="https://scontent.fhan2-3.fna.fbcdn.net/v/t1.0-9/73244435_2997608627131456_2957342681333760000_n.jpg?_nc_cat=108&_nc_sid=85a577&_nc_ohc=5U53gYmzXVoAX-MOTT3&_nc_ht=scontent.fhan2-3.fna&oh=1755644c07fb47f26d8a70aad09046f4&oe=5EEEBDBC" alt="home" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;