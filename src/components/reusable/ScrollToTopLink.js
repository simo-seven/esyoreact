import React from "react";
import { Link } from "react-router-dom";

class ScrollToTopLink extends React.Component {
  handleClick = () => {
    // Add a small delay before scrolling to the top
    setTimeout(() => {
      // Scroll to the top of the page
      window.scrollTo({
        top: 0,
        behavior: "smooth", // Smooth scrolling animation
      });
    }, 100); // Adjust delay as needed
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
