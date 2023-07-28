import React, { Component } from 'react';
import '../styles/nav.css'

// Images
import Logo from '../images/logo.png';
import Insta from '../images/Insta.png';


class NavBar extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isNavHidden: false,
      lastScrollY: 0,
      selectedTab: 'radio-home',
      isScrolling: false,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }


  
  handleScroll = () => {

    // Hide Nav with Scroll
    const { lastScrollY } = this.state;
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      this.setState({ isNavHidden: true });
    } else if (currentScrollY < lastScrollY) {
      this.setState({ isNavHidden: false });
    }

    this.setState({ lastScrollY: currentScrollY });

    // Mobile Set buttons active
    const isMobile = window.innerWidth <= 768;

    const fullHeight = document.documentElement.offsetHeight;
    const svh = document.documentElement.clientHeight;
    const footer = svh*0.5;
    const safety = svh*0.5;

    const photosPos = svh-safety;
    const cinemaPos = fullHeight-svh*2.5-footer-safety;
    const contactPos = fullHeight-svh*1.5-footer-safety;

    const glider = document.querySelector('.glider');
    const instaIcon = document.getElementById('insta-icon');

    if (isMobile && glider) {
      if (currentScrollY < photosPos) {
        glider.style.transform = 'translateX(-240%)';
        instaIcon.style.filter = 'brightness(500%)';
      } else if (currentScrollY < cinemaPos) {
        glider.style.transform = 'translateX(-82.5%)';
      } else if (currentScrollY < contactPos) {
        glider.style.transform = 'translateX(77.5%)';
      } else {
        glider.style.transform = 'translateX(240%)';
      }
    };

  };

  render() {
    const { isNavHidden } = this.state;
    const screenWidth = window.innerWidth; // Is Mobile


    return (
      <nav id="navbar" class={"navbar" + (isNavHidden ? " hidden" : "")}>
        <a href="#home" class="hide-component">
          <div class="logo-circle">
            <img src={Logo} alt="Logo" />
          </div>
        </a>
        <ul class="nav-list section-tabs">
          <li><a id="insta-icon" class="option" href="#home" style={{ backgroundImage: `url(${Insta})` }}><span class="tab-text">Home</span></a></li>
          <li><a id="photos-icon" class="option" href="#photography-section"><span class="tab-text">Photos</span></a></li>
          <li><a id="video-icon" class="option" href="#cinematography-section"><span class="tab-text">Cinema</span></a></li>
          <li><a id="contact-icon" class="option" href="#contact-section"><span class="tab-text">Contact</span></a></li>
        </ul>
        <span class="glider"></span>
      </nav>
    );

  }
}

export default NavBar;