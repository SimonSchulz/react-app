import React, { Component } from 'react';
import ErrorMessage from '../views/errorMessage/errorMessage';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    const { hasError } = this.state;
    // eslint-disable-next-line react/prop-types
    const { children } = this.props;
    if (hasError) {
      return <ErrorMessage />;
    }

    return children;
  }
}
export default ErrorBoundary;
