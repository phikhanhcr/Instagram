import React, { PureComponent } from 'react';
class Comment extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      hideComment: false
    }
  }
  showCmt = () => {
    this.setState({
      hideComment: !this.state.hideComment
    })
  }

  hideOrShow = () => {
    if (this.state.hideComment) {
      return <p className="p" onClick={this.showCmt}>Hide comments </p>
    } else {
      return <p className="p" onClick={this.showCmt}>See comments </p>
    }
  }

  render() {
    const { comment } = this.props;
    const { hideComment } = this.state;
    let className = "wrapperEachComment display";
    if (hideComment) {
      className = "wrapperEachComment";
    }
    return (
      <div className="Comment">
        {
          this.hideOrShow()
        }
        {
          comment.length ? comment.map(ele => (
            <div className={className}>
              <a href="#">{ele.user}</a>
              <p>{ele.message}</p>
            </div>
          )) : (
            <div>
              No Comment
            </div>
          )
        }
      </div>
    );
  }
}

export default Comment;