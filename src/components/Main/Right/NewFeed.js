import React, { PureComponent } from 'react';
import Action from './Action';
import Wholiked from './Wholike';
import AddComment from './AddCmt';
import Des from './Description';
import First from './1.First';
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
    const { item } = this.props;
    return (
      <div className="Timeline">
        <First item={item}/>
        <img className="imgUpload" onDoubleClick={this.doubleClick}  src={item.img} alt="img" />

        <Action liked={liked} unLike={this.unLike}/>

        <Wholiked />
        
        <Des />
        
        <AddComment />
      </div>
    );
  }
}

export default NewFeed;