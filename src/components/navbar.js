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
    const cinemaPos = fullHeight-svh*3-footer-safety
    const contactPos = fullHeight-svh*2-footer-safety;

    const homeRadio = document.getElementById("radio-home");
    const photosRadio = document.getElementById("radio-photos");
    const cinemaRadio = document.getElementById("radio-cinema");
    const contactRadio = document.getElementById("radio-contact");

    if (isMobile && !this.state.isScrolling) {
      homeRadio.checked = false;
      photosRadio.checked = false;
      cinemaRadio.checked = false;
      contactRadio.checked = false;

      if (currentScrollY < photosPos) {
        homeRadio.checked = true;
      } else if (currentScrollY < cinemaPos) {
        photosRadio.checked = true;
      } else if (currentScrollY < contactPos) {
        cinemaRadio.checked = true;
      } else {
        contactRadio.checked = true;
      }
    }

  };

  handleTabChange = (event) => {
    this.setState({ isScrolling: true });

    console.log(this.state.isScrolling);
    const fullHeight = document.documentElement.offsetHeight;
    const svh = document.documentElement.clientHeight;
    const footer = svh*0.5;

    const homePos = 0;
    const photosPos = svh;
    const cinemaPos = fullHeight-svh*2.5-footer;
    const contactPos = fullHeight-svh*1.5-footer;

    const tabId = event.target.id;
    this.setState({ tabId: tabId });

    console.log(tabId);

    switch (tabId) {
      case "radio-home":
        window.scroll(0, homePos);
        break;
      case "radio-photos":
        window.scroll(0, photosPos);
        break;
      case "radio-cinema":
        window.scroll(0, cinemaPos);
        break;
      case "radio-contact":
        window.scroll(0, contactPos);
        break;
    }
    setTimeout(() => {
      this.setState({ isScrolling: false });
    }, 800);
  };

  render() {
    const { isNavHidden } = false; // No hiding in mobile
    const screenWidth = window.innerWidth; // Is Mobile

    if (screenWidth <= 768) {
      return (
        <nav id="navbar-mobile" class={"navbar-mobile" + (isNavHidden ? " mobile-hidden" : "")}>
          <div class="section-tabs">
            <input type="radio" id="radio-home" name="tabs" onChange={this.handleTabChange} defaultChecked/>
            <label class="tab" for="radio-home">H</label>
            <input type="radio" id="radio-photos" name="tabs" onChange={this.handleTabChange} />
            <label class="tab" for="radio-photos">P</label>
            <input type="radio" id="radio-cinema" name="tabs" onChange={this.handleTabChange} />
            <label class="tab" for="radio-cinema">V</label>
            <input type="radio" id="radio-contact" name="tabs" onChange={this.handleTabChange} />
            <label class="tab" for="radio-contact">C</label>
            <span class="glider"></span>
          </div>
        </nav>
      );
    } 

    return (
      <nav id="navbar" class={"navbar" + (isNavHidden ? " hidden" : "")}>
        <a href="#top">
          <div class="logo-circle">
            <img src={Logo} alt="Logo" />
          </div>
        </a>
        <ul>
          <li><a class="option" href="#top">Home</a></li>
          <li><a class="option" href="#photography-section">Photos</a></li>
          <li><a class="option" href="#cinematography-section">Cinema</a></li>
          <li><a class="option" href="#contact-section">Contact</a></li>
        </ul>
      </nav>
    );

  }
}

export default NavBar;