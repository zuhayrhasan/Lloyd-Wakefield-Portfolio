import React, { Component } from 'react';
import '../styles/nav.css'

// Images
import Logo from '../images/logos/logo.png';

class NavBar extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isNavHidden: false,
      lastScrollY: 0,
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
    const HomeIcon = document.querySelector('.home-icon');
    const PhotoIcon = document.querySelector('.photo-icon');
    const VideoIcon = document.querySelector('.video-icon');
    const ContactIcon = document.querySelector('.contact-icon');

    console.log(HomeIcon);

    if (isMobile && glider) {
      if (currentScrollY < photosPos) {
        glider.style.transform = 'translateX(-240%)';
        HomeIcon.classList.add('selected-icon');
    
        // Remove the "selected-icon" class from other elements
        PhotoIcon.classList.remove('selected-icon');
        VideoIcon.classList.remove('selected-icon');
        ContactIcon.classList.remove('selected-icon');
      } else if (currentScrollY < cinemaPos) {
        glider.style.transform = 'translateX(-82%)';
        PhotoIcon.classList.add('selected-icon');
    
        // Remove the "selected-icon" class from other elements
        HomeIcon.classList.remove('selected-icon');
        VideoIcon.classList.remove('selected-icon');
        ContactIcon.classList.remove('selected-icon');
      } else if (currentScrollY < contactPos) {
        glider.style.transform = 'translateX(78%)';
        VideoIcon.classList.add('selected-icon');
    
        // Remove the "selected-icon" class from other elements
        HomeIcon.classList.remove('selected-icon');
        PhotoIcon.classList.remove('selected-icon');
        ContactIcon.classList.remove('selected-icon');
      } else {
        glider.style.transform = 'translateX(240%)';
        ContactIcon.classList.add('selected-icon');
    
        // Remove the "selected-icon" class from other elements
        HomeIcon.classList.remove('selected-icon');
        PhotoIcon.classList.remove('selected-icon');
        VideoIcon.classList.remove('selected-icon');
      }
    }
    

  };

  render() {
    const { isNavHidden } = this.state;

    return (
      <nav id="navbar" class={"navbar" + (isNavHidden ? " hidden" : "")}>
        <a href="#home" class="hide-component">
          <div class="logo-circle">
            <img src={Logo} alt="Logo" />
          </div>
        </a>
        <ul class="nav-list section-tabs">
          <li><a id="home-icon" class="selected-icon home-icon option" href="#home"><span class="tab-text">Home</span></a></li>
          <li><a id="photos-icon" class="photo-icon option" href="#photography-section"><span class="tab-text">Photos</span></a></li>
          <li><a id="video-icon" class="video-icon option" href="#cinematography-section"><span class="tab-text">Cinema</span></a></li>
          <li><a id="contact-icon" class="contact-icon option" href="#contact-section"><span class="tab-text">Contact</span></a></li>
        </ul>
        <span class="glider"></span>
      </nav>
    );

  }
}

export default NavBar;