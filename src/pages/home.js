import React, { PureComponent } from 'react';
import '../styles/home.css';

import Lloyd from '../images/lloyd.jpg';
import Pic1 from '../images/1.jpg';
import Pic2 from '../images/2.jpg';
import Pic3 from '../images/3.jpg';
import Pic4 from '../images/4.jpg';
import Pic5 from '../images/5.jpg';
import Pic6 from '../images/6.jpg';
import Pic7 from '../images/7.jpg';
import Pic8 from '../images/8.jpg';
import Pic9 from '../images/9.jpg';
import Pic10 from '../images/10.jpg';
import Pic11 from '../images/11.jpg';
import Pic12 from '../images/12.jpg';
import Pic13 from '../images/13.jpg';
import Pic14 from '../images/14.jpg';
import Pic15 from '../images/15.jpg';
import Pic16 from '../images/16.jpg';
import Pic17 from '../images/17.jpg';
import Pic18 from '../images/18.jpg';


export default class Home extends PureComponent {

  render() {
    return (
      <>
        <div class="landing-container">
          <div class="title-box">
            <div class="title-text">Lloyd.
              <div class="text-block"></div>
            </div>
            <div class="subtitle-text">Director & Photographer</div>
          </div>
          <div class="image-box">
            <div class="image-image">
              <img src={Lloyd} alt="LLoyd"></img>
              <div class="image-block"></div>
            </div>
          </div>
        </div>
        <div class="row"><div class="column">
          <div class="column-image">
            <img src={Pic1} alt="Picture 1" style={{width:'100%'}}/>
          </div>
          <div class="column-image">
            <img src={Pic2} alt="Picture 2" style={{width:'100%'}}/>
          </div>
          <div class="column-image">
            <img src={Pic3} alt="Picture 3" style={{width:'100%'}}/>
          </div>
          <div class="column-image">
            <img src={Pic4} alt="Picture 4" style={{width:'100%'}}/>
          </div>
          <div class="column-image">
            <img src={Pic5} alt="Picture 5" style={{width:'100%'}}/>
          </div>
          <div class="column-image">
            <img src={Pic6} alt="Picture 6" style={{width:'100%'}}/>
          </div>
        </div>

        <div class="column">
          <div class="column-image">
            <img src={Pic7} alt="Picture 7" style={{width:'100%'}}/>
          </div>
          <div class="column-image">
            <img src={Pic8} alt="Picture 8" style={{width:'100%'}}/>
          </div>
          <div class="column-image">
            <img src={Pic9} alt="Picture 9" style={{width:'100%'}}/>
          </div>
          <div class="column-image">
            <img src={Pic10} alt="Picture 10" style={{width:'100%'}}/>
          </div>
          <div class="column-image">
            <img src={Pic11} alt="Picture 11" style={{width:'100%'}}/>
          </div>
          <div class="column-image">
            <img src={Pic12} alt="Picture 12" style={{width:'100%'}}/>
          </div>
        </div>

        <div class="column">
          <div class="column-image">
            <img src={Pic13} alt="Picture 13" style={{width:'100%'}}/>
          </div>
          <div class="column-image">
            <img src={Pic14} alt="Picture 14" style={{width:'100%'}}/>
          </div>
          <div class="column-image">
            <img src={Pic15} alt="Picture 15" style={{width:'100%'}}/>
          </div>
          <div class="column-image">
            <img src={Pic16} alt="Picture 16" style={{width:'100%'}}/>
          </div>
          <div class="column-image">
            <img src={Pic17} alt="Picture 17" style={{width:'100%'}}/>
          </div>
          <div class="column-image">
            <img src={Pic18} alt="Picture 18" style={{width:'100%'}}/>
          </div>
        </div>

        <div class="column">
          <div class="column-image">
              <img src={Pic1} alt="Picture 1" style={{width:'100%'}}/>
            </div>
            <div class="column-image">
              <img src={Pic2} alt="Picture 2" style={{width:'100%'}}/>
            </div>
            <div class="column-image">
              <img src={Pic3} alt="Picture 3" style={{width:'100%'}}/>
            </div>
            <div class="column-image">
              <img src={Pic4} alt="Picture 4" style={{width:'100%'}}/>
            </div>
            <div class="column-image">
              <img src={Pic5} alt="Picture 5" style={{width:'100%'}}/>
            </div>
            <div class="column-image">
              <img class="test" src={Pic6} alt="Picture 6" style={{width:'100%'}}/>
            </div>
          </div>

        </div>
      </>
    );
  }
}