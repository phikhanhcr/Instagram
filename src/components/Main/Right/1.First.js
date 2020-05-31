import React, { PureComponent } from 'react';
class First extends PureComponent {

  render() {
    const { item, name } = this.props;
    return (
      <div className="person">
        <div className="infor">
          <a href="#">
            <img src={item.avatar} alt="img" />
          </a>
          <p>{name}</p>
        </div>
        <a href="#">
          <img className="more" src="https://cdn.glitch.com/6ccfbc6a-9aaf-46cd-b82e-57abff9221b0%2Fmore.png?v=1590153008167" alt="more" />
        </a>
      </div>
    );
  }
}

export default First;