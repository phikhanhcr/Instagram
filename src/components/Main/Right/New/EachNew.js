import React, { PureComponent } from 'react';
import classNames from 'classnames';
class EachNew extends PureComponent {

  render() {
    const { item , onClickItem , displayNew} = this.props;
    let className = "img";
    if (item.seen) {
      className = classNames(className, "seen");
    }
    return (
      <div className="EachNews" onClick={onClickItem} onClick={displayNew}>
        <a href="#">
          <img className={className} src={item.img} alt="news" />
        </a>
        <p>{item.user}</p>
      </div>
    );
  }
}

export default EachNew;