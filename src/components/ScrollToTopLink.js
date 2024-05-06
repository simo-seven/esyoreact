import React from 'react';
import { Link } from 'react-router-dom';

class ScrollToTopLink extends React.Component {
  handleClick = () => {
    // Scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scrolling animation
    });
  };

  render() {
    return (
      <Link {...this.props} onClick={this.handleClick}>
        {this.props.children}
      </Link>
    );
  }
}

export default ScrollToTopLink;
