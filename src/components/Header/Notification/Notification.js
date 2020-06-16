import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';


function Notification() {
  const [myNotification, setNotification] = useState([]);
  useEffect(() => {
    async function getNotification() {
      const currentUser = await Axios.get('http://localhost:3001/api/user');
      const IdUser = currentUser.data.filter(ele => {
        return ele.username === localStorage.getItem('token')
      })
      console.log(IdUser[0]._id);
      const myNotifi = await Axios.get(`http://localhost:3001/api/notification/${IdUser[0]._id}`)
      if(myNotifi.data[0]){
        setNotification(myNotifi.data[0].notification);
      }
      
    }
    getNotification();
  }, [])
  return (
    <ul className="Dropdown">
      {
        myNotification.length ? myNotification.map((ele, index) =>
          <li>
            <div className="each-notifi">
              <img src="https://scontent.fhan2-3.fna.fbcdn.net/v/t1.0-9/73244435_2997608627131456_2957342681333760000_n.jpg?_nc_cat=108&_nc_sid=85a577&_nc_ohc=5U53gYmzXVoAX-MOTT3&_nc_ht=scontent.fhan2-3.fna&oh=1755644c07fb47f26d8a70aad09046f4&oe=5EEEBDBC" />
              <p>{ele.who} {ele.action}</p>
            </div>
          </li>)
          : "No Notification"
      }

    </ul>
  );
}

export default Notification;