import React, { PureComponent } from 'react';
import Action from './Action';
import Wholiked from './Wholike';
import AddComment from './AddCmt';
import Des from './Description';
import First from './1.First';
class NewFeed extends PureComponent {
  render() {
    const { item } = this.props;
    return (
      <div className="Timeline">
        <First item={item}/>
        <img className="imgUpload" src={item.img} alt="img" />
        <Action />

        <Wholiked />
        
        <Des />
        
        <AddComment />
      </div>
    );
  }
}

export default NewFeed;