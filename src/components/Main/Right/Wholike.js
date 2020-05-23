import React, { PureComponent } from 'react';
class Wholiked extends PureComponent {
  render() {
    return (
      <div className="Wholike">
        <img src="https://scontent.fhan2-3.fna.fbcdn.net/v/t1.0-9/73244435_2997608627131456_2957342681333760000_n.jpg?_nc_cat=108&_nc_sid=85a577&_nc_ohc=5U53gYmzXVoAX-MOTT3&_nc_ht=scontent.fhan2-3.fna&oh=1755644c07fb47f26d8a70aad09046f4&oe=5EEEBDBC" alt="wholike" />
          &nbsp;
        <a href="#">
          <b>t.linh222</b>
        </a>
           &nbsp;
        <p>and</p>
           &nbsp;
        <a href="#">
          <b>10 others people liked</b>
        </a>
      </div>
    );
  }
}

export default Wholiked;