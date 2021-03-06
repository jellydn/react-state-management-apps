/* eslint-disable react/destructuring-assignment */
import React from "react";

export default class ErrorBoundary extends React.Component<
  {},
  {
    hasError: boolean;
  }
> {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
    console.error(Error);
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: Record<string, any>) {
    // You can also log the error to an error reporting service
    console.error(Error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}
