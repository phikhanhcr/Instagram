import React, { PureComponent } from 'react';
import Axios from 'axios'
class AddComment extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      comment: ""
    }
  }
  onChange = async event => {
    // find index of post
    // find id post 
    this.setState({
      comment: event.target.value
    })
  }

  onSubmit = async (event) => {
    event.preventDefault();
    let div = event.target.parentNode.parentNode
    const Timeline = Array.from(document.getElementsByClassName('Timeline'))
    const indexPost = Timeline.indexOf(div)
    console.log(indexPost);
    let idUser = "";
    var currentUser;
    await Axios.get(`http://localhost:3001/api/user`)
      .then(res => {
        const data = res.data;
        const user = data.filter(ele => {
          return ele.username === localStorage.getItem('token')
        })
        idUser = user[0]._id;
        currentUser = user[0].username;
      }).catch(err => {
        console.log(err);
      })
    Axios.get(`http://localhost:3001/api/post`)
      .then(res => {
        console.log(res.data)
        const id = res.data[indexPost]._id;
        let comment = {
          user: idUser,
          comment: this.state.comment
        }
        console.log(comment);
        Axios.put(`http://localhost:3001/api/post/${id}`, { comment })
          .then(res => {
            console.log(res)
          }).catch(err => {
            console.log(err);
          })
        this.setState({
          comment: ""
        })

        // add notification 
        // 1. find the post owner ID
        const postOwnerId = res.data[indexPost].by;
        console.log("post comment " + postOwnerId)
        // 2. find currentUser just commented any post
        console.log(currentUser)
        // 3. add notification notification/ID
        let notification = {
          who: currentUser,
          action: "commented in your photo"
        }
        console.log("notification post " + notification)
        // check xem đã có thông báo của cái post đó chưa 
        Axios.get('http://localhost:3001/api/notification')
          .then(res => {
            const allNoti = res.data;
            console.log(allNoti)
            const postInUse = allNoti.filter(ele => {
              return ele.postOwner === postOwnerId
            })
            console.log(postInUse)
            if (postInUse.length) {
              console.log('Already exits');
              Axios.put(`http://localhost:3001/api/notification/${postOwnerId}`, { notification })
                .then(res => {
                  console.log("Success")
                }).catch(err => {
                  console.log(err)
                })
            } else {
              console.log("Cai dau tien");
              let obj = {
                postOwner: postOwnerId,
                notification: [{
                  who: currentUser,
                  action: "commented in your photo"
                }]
              }
              Axios.post('http://localhost:3001/api/notification', { obj })
                .then(res => {
                  console.log("success")
                }).catch(err => {
                  console.log(err);
                })
            }
          }).catch(err => {
            console.log(err)
          })

      })
  }

  render() {
    const { comment } = this.state;
    return (
      <div className="AddComment">
        <form onSubmit={this.onSubmit}>
          <input type="text" placeholder="Add Comment" onChange={this.onChange} value={comment} />
          <input type="submit" className="btn btn-light" value="Post" />
        </form>
      </div>
    );
  }
}

export default AddComment;