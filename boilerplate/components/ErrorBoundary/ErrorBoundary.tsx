import React from 'react';
import Icon from '@components/Icon/Icon';

class ErrorBoundary extends React.Component<
  {
    fallback?: JSX.Element;
  },
  {
    error: Error | null;
    errorInfo: React.ErrorInfo | null;
  }
> {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      errorInfo: null
    };
  }

  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
    // You can also log error messages to an error reporting service here
    console.log(error, errorInfo);
  }

  render() {
    const { fallback } = this.props;

    // Error path
    if (this.state.errorInfo) {
      return (
        <section className="rounded border-danger-border bg-danger-background py-3 px-5 text-danger-text">
          {fallback ? (
            fallback
          ) : (
            <p>
              <Icon name="faCircleExclamation" />
              Something went wrong.
            </p>
          )}
        </section>
      );
    }
    // Normally, just render children
    return this.props.children;
  }
}

export default ErrorBoundary;
