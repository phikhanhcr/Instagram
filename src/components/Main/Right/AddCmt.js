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
    await Axios.get(`http://localhost:3001/api/user`)
      .then(res => {
        const data = res.data;
        const user = data.filter(ele => {
          return ele.username === localStorage.getItem('token')
        })
        idUser = user[0]._id;
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

      })
  }
  render() {
    const { comment } = this.state;
    return (
      <div className="AddComment">
        <form onSubmit={this.onSubmit}>
          <input type="text" placeholder="Add Comment" onChange={this.onChange} />
          <input type="submit" className="btn btn-light" value="Post" />
        </form>
      </div>
    );
  }
}

export default AddComment;