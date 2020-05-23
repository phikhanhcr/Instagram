import React, { PureComponent } from 'react';
import FindFriends from './FindFriends';
class RecommendFriends extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          img: "https://scontent.fhan2-3.fna.fbcdn.net/v/t1.0-9/73244435_2997608627131456_2957342681333760000_n.jpg?_nc_cat=108&_nc_sid=85a577&_nc_ohc=5U53gYmzXVoAX-MOTT3&_nc_ht=scontent.fhan2-3.fna&oh=1755644c07fb47f26d8a70aad09046f4&oe=5EEEBDBC",
          user: "paulwalker"
        },
        {
          img: "https://scontent.fhan2-3.fna.fbcdn.net/v/t1.0-9/73244435_2997608627131456_2957342681333760000_n.jpg?_nc_cat=108&_nc_sid=85a577&_nc_ohc=5U53gYmzXVoAX-MOTT3&_nc_ht=scontent.fhan2-3.fna&oh=1755644c07fb47f26d8a70aad09046f4&oe=5EEEBDBC",
          user: "paulwalker"
        },
        {
          img: "https://scontent.fhan2-3.fna.fbcdn.net/v/t1.0-9/73244435_2997608627131456_2957342681333760000_n.jpg?_nc_cat=108&_nc_sid=85a577&_nc_ohc=5U53gYmzXVoAX-MOTT3&_nc_ht=scontent.fhan2-3.fna&oh=1755644c07fb47f26d8a70aad09046f4&oe=5EEEBDBC",
          user: "paulwalker"
        }
      ]
    }
  }
  render() {
    const { data } = this.state;
    return (
      <div className="RecommendFriends">
        <div className="Recommend">
          <p>For you</p>
          <a href="#">View all</a>
        </div>
        {
          data.length && data.map((ele , index) => (
            <FindFriends item={ele}/>
          ))
        }
      </div>
    );
  }
}

export default RecommendFriends;