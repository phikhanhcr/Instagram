import React, { PureComponent } from 'react';

import Action from './Action';
import Wholiked from './Wholike';
import AddComment from './AddCmt';
import Des from './Description';
import First from './1.First';
import Comment from './AllComment'
import Axios from 'axios';
class NewFeed extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      liked: false
    }
    this.doubleClick = this.doubleClick.bind(this);
  }

  unLike = () => {
    this.setState({
      liked: !this.state.liked
    })
  }

  doubleClick () {
    this.setState({
      liked : true
    })
  }
  render() {
    const { liked } = this.state; 
    const { item , name} = this.props;
    return (
      <div className="Timeline">
        <First item={item} name={name}/>
        <img className="imgUpload" onDoubleClick={this.doubleClick}  src={item.img} alt="img" />

        <Action liked={liked} unLike={this.unLike}/>

        <Wholiked />
        
        <Des description={item.description}/>
        
        <Comment comment={item.comment}/>

        <AddComment />
      </div>
    );
  }
}

export default NewFeed;