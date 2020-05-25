import React, { PureComponent } from 'react';
import Heart from '../../heart.png'
class Action extends PureComponent {

  render() {
    let img = "https://cdn.glitch.com/6ccfbc6a-9aaf-46cd-b82e-57abff9221b0%2Fheart.png?v=1590148496701";
    const { liked, unLike } = this.props;
    let className = "droTym";
    if (liked) {
      img = Heart
    }
    return (
      <div className="Action">
        <div className="wrapper-icon">
          <img onClick={unLike} className={className} src={img} alt="tym" />
          <a href>
            <img src="https://cdn.glitch.com/6ccfbc6a-9aaf-46cd-b82e-57abff9221b0%2Fcomment.png?v=1590154634070" alt="comt" />
          </a>
          <a href>
            <img src="https://cdn.glitch.com/6ccfbc6a-9aaf-46cd-b82e-57abff9221b0%2Fmail.png?v=1590154681531" alt="share" />
          </a>
        </div>
        <div className="ogikobiet">
          <a href>
            <img src="https://cdn.glitch.com/6ccfbc6a-9aaf-46cd-b82e-57abff9221b0%2Fheart.png?v=1590148496701" alt="tym" />
          </a>
        </div>
      </div>
    );
  }
}

export default Action;