import React, { PureComponent } from 'react';
class Friends extends PureComponent {
  state = {}
  render() {
    const { item } = this.props;
    return (
      <div className="FindFriends">
        <a href="#">
          <img src={item.img} alt="someone" />
        </a>
        <div className="information">
          <div className="name">
            <a href="#"><b>{item.user}</b></a>
          </div>
          <div className="someinfor">
            Instagram recommend
          </div>
        </div>
        <div className="follow">
          <a href="#">Follow</a>
        </div>
      </div>
    );
  }
}

export default Friends;