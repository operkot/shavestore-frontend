import React, { ReactNode } from 'react'

type ErrorBoundaryProps = {
  fallback: ReactNode
  children: ReactNode
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps> {
  state = { hasError: false }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.log(error, errorInfo)
  }

  render(): ReactNode {
    return this.state.hasError ? this.props.fallback : this.props.children
  }
}

export default ErrorBoundary
