import React, { PureComponent } from 'react';
class Friends extends PureComponent {
  constructor(props){
    super(props)
    this.state = {
      displayFollow : false
    }
  }
  
  changeStateFollow = () => {
    this.setState({
      displayFollow : !this.state.displayFollow
    })
  }

  displayFollow = () => {
    if(this.state.displayFollow) {
      return <a href="#" onClick={this.changeStateFollow}>Unfollow</a>
    } else {
      return <a href="#" onClick={this.changeStateFollow}>Follow</a>
    }
  }
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
          {
            this.displayFollow()
          }
        </div>
      </div>
    );
  }
}

export default Friends;