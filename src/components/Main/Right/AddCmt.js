import React, { PureComponent } from 'react';
class AddComment extends PureComponent {
  render() {
    return (
      <div className="AddComment">
        <input type="text" placeholder="Add Comment" />
        <a href="#">Post</a>
      </div>
    );
  }
}

export default AddComment;