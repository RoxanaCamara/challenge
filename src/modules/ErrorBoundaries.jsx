import React from "react";
import { Error } from "../component/Error";

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <Error />;
    }

    // eslint-disable-next-line react/prop-types
    return this.props.children;
  }
}
