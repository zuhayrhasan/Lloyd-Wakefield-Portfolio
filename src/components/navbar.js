import React, { Component } from 'react';
import '../styles/nav.css'

// Images
import Logo from '../images/logo.png';

class NavBar extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isDarkMode: false,
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
    const { lastScrollY } = this.state;
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      this.setState({ isNavHidden: true });
    } else if (currentScrollY < lastScrollY) {
      this.setState({ isNavHidden: false });
    }

    this.setState({ lastScrollY: currentScrollY });
  };

  render() {
    const { isNavHidden } = this.state;
    const screenWidth = window.innerWidth;

    

    if (screenWidth <= 768) {
      return (
        <nav>
          
        </nav>
      );
    } 

    return (
      <nav id="navbar" className={isNavHidden ? "hidden" : ""}>
        <a href="#top">
          <div className="logo-circle">
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