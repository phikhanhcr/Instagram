import React, { PureComponent } from 'react';
import classNames from 'classnames';
import './Display.css';
class Story extends PureComponent {

  render() {
    const { state, changeDisplay } = this.props;
    let className = "DisplayNews";
    if (state) {
      className = classNames(className, "active");
    }

    return (
      <div className={className}>
        <div className="wrapper-news">
          <div className="infor">
            <div className="wrapper-infor">
              <img className="user" src="https://cdn.hyperdev.com/click-me.svg?v=1477239469954" alt="img" />
              <p>mn.png</p>
            </div>
            <a href="#">
              <img onClick={changeDisplay} className="delete" src="https://cdn.glitch.com/6ccfbc6a-9aaf-46cd-b82e-57abff9221b0%2Fcancel.png?v=1590224435026" alt="more" />
            </a>
          </div>
          <a href="#" >
            <img className="story" src="https://cdn.hyperdev.com/click-me.svg?v=1477239469954" alt="img" />
          </a>
        </div>
      </div>
    );
  }
}

export default Story;