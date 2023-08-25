/* eslint-disable react/prop-types */
import React from 'react';

class Button extends React.Component {
  constructor(props) {
    super(props);

    this.props = props;

    this.state = {
      // status: 'legacy',
    };
  }

  render() {
    const { isDark, switchMode } = this.props;

    return (
      <button type="button" onClick={switchMode}>
        Switch to {isDark ? 'light' : 'dark'} mode
      </button>
    );
  }
}

export default Button;
