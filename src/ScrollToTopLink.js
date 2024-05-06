import React from "react";
import { Link } from "react-router-dom";

class ScrollToTopLink extends React.Component {
  handleClick = () => {
    window.scrollTo(0, 0);
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
