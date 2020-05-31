import React, { PureComponent } from 'react';
import classNames from 'classnames';
class Des extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      displayDes: false
    }
  }
  displayDes = () => {
    this.setState({
      displayDes: !this.state.displayDes
    })
  }
  displayAdd = () => {
    if (this.state.displayDes) {
      return <a onClick={this.displayDes}> ... ẩn bớt</a>
    } else {
      return <a onClick={this.displayDes}> ... thêm</a>
    }
  }
  render() {
    const { description } = this.props;
    const { displayDes } = this.state;
    let className = "des-add";
    if (displayDes) {
      className = classNames(className, "display")
    }
    return (
      <div className="Des">
        <a href="#"><b>mn.png</b></a>
        {
          this.displayAdd()
        }
        <p>22 hours ago</p>
        <div className={className}>
          {description}
        </div>
      </div>
    );
  }
}

export default Des;