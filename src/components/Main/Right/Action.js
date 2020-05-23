import React, { PureComponent } from 'react';
class Action extends PureComponent {
  state = {}
  render() {
    return (
      <div className="Action">
          <div className="wrapper-icon">
            <a href="#">
              <img src="https://cdn.glitch.com/6ccfbc6a-9aaf-46cd-b82e-57abff9221b0%2Fheart.png?v=1590148496701" alt="tym" />
            </a>
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