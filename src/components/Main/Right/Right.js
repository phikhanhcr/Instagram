import React, { PureComponent } from 'react';
import '../Main.css'
import News from './News';
import NewFeed from './NewFeed';
class Right extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data : [
        {
          avatar : "https://instagram.fhan2-3.fna.fbcdn.net/v/t51.2885-15/e35/98274338_318501435800155_6640321408878702086_n.jpg?_nc_ht=instagram.fhan2-3.fna.fbcdn.net&_nc_cat=107&_nc_ohc=ISaDRsc6Z48AX8T4XC8&oh=c9dee2c223f0ec9cac11cc66fd11e86d&oe=5EF078DD",
          img :"https://instagram.fhan2-3.fna.fbcdn.net/v/t51.2885-15/e35/98274338_318501435800155_6640321408878702086_n.jpg?_nc_ht=instagram.fhan2-3.fna.fbcdn.net&_nc_cat=107&_nc_ohc=ISaDRsc6Z48AX8T4XC8&oh=c9dee2c223f0ec9cac11cc66fd11e86d&oe=5EF078DD" 
        },
        {
          avatar : "https://instagram.fhan2-3.fna.fbcdn.net/v/t51.2885-15/e35/98274338_318501435800155_6640321408878702086_n.jpg?_nc_ht=instagram.fhan2-3.fna.fbcdn.net&_nc_cat=107&_nc_ohc=ISaDRsc6Z48AX8T4XC8&oh=c9dee2c223f0ec9cac11cc66fd11e86d&oe=5EF078DD" ,
          img :"https://instagram.fhan2-3.fna.fbcdn.net/v/t51.2885-15/e35/98274338_318501435800155_6640321408878702086_n.jpg?_nc_ht=instagram.fhan2-3.fna.fbcdn.net&_nc_cat=107&_nc_ohc=ISaDRsc6Z48AX8T4XC8&oh=c9dee2c223f0ec9cac11cc66fd11e86d&oe=5EF078DD" 
        },
        {
          avatar : "https://instagram.fhan2-3.fna.fbcdn.net/v/t51.2885-15/e35/98274338_318501435800155_6640321408878702086_n.jpg?_nc_ht=instagram.fhan2-3.fna.fbcdn.net&_nc_cat=107&_nc_ohc=ISaDRsc6Z48AX8T4XC8&oh=c9dee2c223f0ec9cac11cc66fd11e86d&oe=5EF078DD" ,
          img :"https://instagram.fhan2-3.fna.fbcdn.net/v/t51.2885-15/e35/98274338_318501435800155_6640321408878702086_n.jpg?_nc_ht=instagram.fhan2-3.fna.fbcdn.net&_nc_cat=107&_nc_ohc=ISaDRsc6Z48AX8T4XC8&oh=c9dee2c223f0ec9cac11cc66fd11e86d&oe=5EF078DD" 
        }
      ]
    }
  }
  render() { 
    const {data} = this.state;
    return (
        <div class="Right">
          <News />
          {
            data.length && data.map((ele , index) => (
              <NewFeed item={ele} key={index}/>
            ))
          }
          
        </div>
      );
  }
}
 
export default Right;