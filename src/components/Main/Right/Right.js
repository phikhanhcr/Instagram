import React, { PureComponent } from 'react';
import '../Main.css'
import News from './New/News';
import NewFeed from './NewFeed';
import MyUploader from './Upload/Upload';
// import data from '../../../db.json'
import axios from 'axios';

// https://codesandbox.io/s/crazy-moser-ihqb6?file=/src/index.js
class Right extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: []
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
          data : response.data
        })
      })
      .catch(err => {
        console.log(err)
      })
    
  }
  render() {
    const { data } = this.state;
    console.log(data)
    const { displayNew } = this.props;
    return (
      <div className="Right">
        <MyUploader />
        <News displayNew={displayNew} />
        {
          data.length && data.map((ele, index) => (
            <NewFeed item={ele} key={index} />
          ))
        }

      </div>
    );
  }
}

export default Right;