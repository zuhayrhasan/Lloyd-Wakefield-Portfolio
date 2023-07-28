import React, { Component } from 'react';
import '../styles/nav.css'

// Images
import Logo from '../images/logo.png';


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

    if (isMobile && glider) {
      if (currentScrollY < photosPos) {
        glider.style.transform = 'translateX(-240%)';
      } else if (currentScrollY < cinemaPos) {
        glider.style.transform = 'translateX(-80%)';
      } else if (currentScrollY < contactPos) {
        glider.style.transform = 'translateX(80%)';
      } else {
        glider.style.transform = 'translateX(240%)';
      }
    };

  };

  render() {
    const { isNavHidden } = this.state;
    const screenWidth = window.innerWidth; // Is Mobile

    if (screenWidth <= 768) {
      isNavHidden = false; // No hiding in mobile
      return (
        <nav id="navbar-mobile" class={"navbar-mobile" + (isNavHidden ? " mobile-hidden" : "")}>
          <ul class="nav-list section-tabs">
            <li><a class="option-mobile" href="#home">H</a></li>
            <li><a class="option-mobile" href="#photography-section">P</a></li>
            <li><a class="option-mobile" href="#cinematography-section">V</a></li>
            <li><a class="option-mobile" href="#contact-section">C</a></li>
            <span class="glider"/>
          </ul>
        </nav>
      );
    } 

    return (
      <nav id="navbar" class={"navbar" + (isNavHidden ? " hidden" : "")}>
        <a href="#home">
          <div class="logo-circle">
            <img src={Logo} alt="Logo" />
          </div>
        </a>
        <ul>
          <li><a class="option" href="#home">Home</a></li>
          <li><a class="option" href="#photography-section">Photos</a></li>
          <li><a class="option" href="#cinematography-section">Cinema</a></li>
          <li><a class="option" href="#contact-section">Contact</a></li>
        </ul>
      </nav>
    );

  }
}

export default NavBar;