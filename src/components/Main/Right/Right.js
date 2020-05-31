import React, { PureComponent } from 'react';
import '../Main.css'
import News from './New/News';
import NewFeed from './NewFeed';
import MyUploader from './Upload/Upload';
import axios from 'axios';

// https://codesandbox.io/s/crazy-moser-ihqb6?file=/src/index.js
class Right extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      username: []
    }
  }
  componentDidMount() {

    // const data = fetch('http://localhost:3001/api/post')
    // console.log(data.json)
    axios.get('http://localhost:3001/api/post', //proxy uri
      {
        headers: {
          authorization: ' oke em oi',
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        console.log(response.data)
        this.setState({
          data: response.data
        })
        let data = response.data;

        let idAuthor = data.map(ele => {
          return ele.by
        })
        axios.get('http://localhost:3001/api/user')
          .then(res => {
            console.log(res.data)
            let author = [];

            for (let i = 0; i < idAuthor.length; i++) {
              for (let j = 0; j < res.data.length; j++) {
                if (idAuthor[i] === res.data[j]._id) {
                  author.push(res.data[j].username)
                }
              }
            }
            this.setState({
              username: author
            })


          }).catch(err => {
            console.log(err)
          })
      })
      .catch(err => {
        console.log(err)
      })
  }



  render() {
    const { data, username } = this.state;
    const { displayNew } = this.props;
    return (
      <div className="Right">
        <MyUploader />
        <News displayNew={displayNew} />
        {
          data.length && data.map((ele, index) => (
            <NewFeed item={ele} key={index} name={username[data.indexOf(ele)]} />
          ))
        }

      </div>
    );
  }
}

export default Right;