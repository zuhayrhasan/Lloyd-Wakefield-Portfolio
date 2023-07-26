import React from 'react';
import '../styles/home.css';

import Image from '../components/image.js';

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
import Pic19 from '../images/19.jpg';

import Insta from '../images/Insta.png';
import Twitter from '../images/Twitter.png';

const Home = () => {

    window.addEventListener("load", function() {
      // Get the .title-text element
      const textBlock = document.querySelector(".text-block");
      const imageBlock = document.querySelector(".image-block");
      const text = document.querySelector(".title-text");
      const subtext = document.querySelector(".subtitle-text");
      const image = document.querySelector(".image-itself");

      // Add the 'loaded' class to trigger the transition
      text.classList.add("fully-loaded");
      subtext.classList.add("fully-loaded");
      image.classList.add("fully-loaded");
      textBlock.classList.add("text-block-loaded");
      imageBlock.classList.add("image-block-loaded");
    });

    return (
      <>
        <main>
            
          <div class="landing-container">
            <div class="title-box">
              <div class="title-text">Lloyd.
                <div class="text-block" id="text-block"></div>
              </div>
              <div class="subtitle-text">Director & Photographer</div>
            </div>
            <div class="image-box">
              <div class="image-image">
                <img class="image-itself" src={Lloyd} alt="Lloyd"></img>
                <div class="image-block"></div>
              </div>
            </div>
          </div>

          {/* Photography Header */}
          <div class="section-header">
            <div class="section-text">
              Photography
            </div>
          </div>

          {/* Photography Section */}
          <div class="pictures-container">

            <div class="column">
              <Image person={"Malin"} occasion={"Lidingö"} imageSrc={Pic1} id={"1"} />
              <Image person={"Harry Styles"} occasion={"Harryween"} imageSrc={Pic2} id={"2"} />
              <Image person={"Kenzie"} occasion={"Manchester"} imageSrc={Pic3} id={"3"} />
              <Image person={"Harry Styles"} occasion={"As It Was"} imageSrc={Pic4} id={"4"} />
              <Image person={"Harry Styles"} occasion={"Love On Tour"} imageSrc={Pic5} id={"5"} />
              <Image person={"Charlotte Jane"} occasion={"Salford"} imageSrc={Pic6} id={"6"} />
            </div>

            <div class="column">
              <Image person={"Val Mercado"} occasion={"Philipp Plein"} imageSrc={Pic7} id={"7"} />
              <Image person={"Harry Styles"} occasion={"Brixton ONO"} imageSrc={Pic8} id={"8"} />
              <Image person={"Kenzie"} occasion={"Manchester"} imageSrc={Pic9} id={"9"} />
              <Image person={"Harry Styles"} occasion={"As It Was"} imageSrc={Pic10} id={"10"} />
              <Image person={"Amelia"} occasion={"Stockholm"} imageSrc={Pic11} id={"11"} />
              <Image person={"Tom"} occasion={"Contact"} imageSrc={Pic12} id={"12"} />
            </div>

            <div class="column">
              <Image person={"Archive"} occasion={"Lidingö"} imageSrc={Pic13} id={"13"} />
              <Image person={"Nazaré"} occasion={"Portugal"} imageSrc={Pic14} id={"14"} />
              <Image person={"Maja Lindelöf"} occasion={"Edbald"} imageSrc={Pic15} id={"15"}/>
              <Image person={"Jassiel"} occasion={"Contact"} imageSrc={Pic16} id={"16"} />
              <Image person={"Alcobaça"} occasion={"Portugal"} imageSrc={Pic17} id={"17"} />
              <Image person={"Meredith Mickelson"} occasion={"Milan"} imageSrc={Pic18} id={"18"} />
            </div>

            <div class="column">
              <Image person={"Jassiel"} occasion={"Contact"} imageSrc={Pic19} id={"19"} />
              <Image person={"Harry Styles"} occasion={"Harryween"} imageSrc={Pic2} id={"20"} />
              <Image person={"Harry Styles"} occasion={"Harryween"} imageSrc={Pic3} id={"21"} />
              <Image person={"Harry Styles"} occasion={"Harryween"} imageSrc={Pic4} id={"22"} />
              <Image person={"Harry Styles"} occasion={"Harryween"} imageSrc={Pic5} id={"23"} />
              <Image person={"Harry Styles"} occasion={"Harryween"} imageSrc={Pic6} id={"24"} />
            </div>

          </div>

          {/* Videography Header */}
          <div class="section-header light">
            <div class="section-text">
              Videography
            </div>
          </div>
          
          {/* Videography Header */}
          <div class="video-container">

          </div>

          {/* Contact Me Header */}
          <div class="section-header">
            <div class="section-text">
              Contact Me
            </div>
          </div>
          
          
          {/* Contact Me Container */}
          <div class="contact-container">
            <div class="about-me-side">
              <div class="about-me-container">

                <div class="info-container">
                  <div class="info-text">
                    <div>
                      <h1 class="black-text text-underline">
                        Lloyd Wakefield
                        <div class="underline-block"></div>
                      </h1>
                    </div>
                    <h5 class="darkgrey-text">Director & Photgrapher from the United Kingdom.</h5>
                    <h5 class="darkgrey-text">Editorial, commercial, & music videos.</h5>
                    <h4 class="darkgrey-text bold">Available anywhere.</h4>
                    <div class="socials socials-hover">
                      <a href="https://www.instagram.com/lloyddddddddddddddddd/" target="_blank">
                        <img src={Insta} alt="Lloyd's Instagram"></img>
                      </a>
                      <a href="https://twitter.com/lloyddwakefield/" target="_blank">
                        <img src={Twitter} alt="Lloyd's Twitter"></img>
                      </a>
                    </div>
                  </div>
                </div>

                <div class="references-container">
                  <div>
                    <h3 class="black-text text-underline">Clients & Publications<div class="underline-block"></div></h3>
                    <h6 class="darkgrey-text sorted-items">
                      <span>Harry Styles</span>
                      <span>Gucci</span>
                      <span>Nike</span>
                      <span>Prime Video</span>
                      <span>Sony Music</span>
                      <span>Philipp Plein</span>
                      <span>The Basement</span>
                      <span>Virgin Records</span>
                      <span>Columbia Records</span>
                      <span>Rolling Stone</span>
                      <span>Billboard</span>
                      <span>NY Times</span>
                      <span>GQ</span>
                      <span>Teen Vogue</span>
                    </h6>
                  </div>
                </div>

              </div>
            </div>
            <div class="contact-me-side">
              <div class="contact-me-container">
                <h3 class="black-text text-underline">
                  Send me a Message
                  <div class="underline-block"></div>
                </h3>
                <form action="mailto:test@gmail.com" method="post" enctype="text/plain" class="contact-me-form darkgrey-text">
                  <label for="to">To:</label>
                  <input type="text" id="to" name="to" value="LLoyd Wakefield" readonly/>

                  <label for="from">From:</label>
                  <input type="text" id="from" name="from" placeholder="example@gmail.com" required/>

                  <label for="message">Message:</label>
                  <textarea id="message" name="message" placeholder="Where did you learn to be so cool?" required></textarea>

                  <button type="submit">
                    <span class="button-content">
                      Send Message
                    </span>
                  </button>
                  
                </form>
              </div>
            </div>
          </div>

        </main>
        <footer class="foot">
          <div class="gradient"></div>
        </footer>
      </>
    );
}

export default Home;