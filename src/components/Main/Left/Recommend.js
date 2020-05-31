import React, { PureComponent } from 'react';
import FindFriends from './FindFriends';
import axios from 'axios'
class RecommendFriends extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }
  componentDidMount() {
    axios.get('http://localhost:3001/api/user')
      .then(res => {
        console.log(res.data)
        const data = res.data;
        const user = data.filter(ele => {
          return ele.username === localStorage.getItem('token')
        })
        const index = data.indexOf(user[0])
        let followFriends = data.slice(0, index).concat(data.slice(index + 1, data.length))
        this.setState({
          data: followFriends
        })
        console.log(this.state.followFriends);
      }).catch(err => {
        console.log(err);
      })
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
            <FindFriends item={ele} key={index}/>
          ))
        }
      </div>
    );
  }
}

export default RecommendFriends;