import React, { PureComponent } from 'react';
import EachNew from './EachNew';
class News extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          img: "https://cdn.hyperdev.com/click-me.svg?v=1477239469954",
          user: "phikhanhcr",
          seen: false
        }, {
          img: "https://cdn.hyperdev.com/click-me.svg?v=1477239469954",
          user: "hi",
          seen: false
        }, {
          img: "https://cdn.hyperdev.com/click-me.svg?v=1477239469954",
          user: "hello",
          seen: false
        }
      ]
    }
  }
  changeSeen = (ele) => {
    return () => {
      console.log(ele.user);
      // find index 
      const data = this.state.data;
      const index = data.indexOf(ele);
      const seen = ele.seen;
      this.setState({
        data: [
          ...data.slice(0, index),
          {
            ...ele,
            seen: !seen
          },
          ...data.slice(index + 1)
        ]
      })
    }
  }
  render() {
    const { data } = this.state;
    const { displayNew } = this.props;
    return (
      <div className="New">
        {
          data.length && data.map((ele, index) => (
            <EachNew
              item={ele}
              key={index}
              onClickItem={this.changeSeen(ele)}
              displayNew={displayNew}
            />
          ))
        }
      </div>
    );
  }
}

export default News;