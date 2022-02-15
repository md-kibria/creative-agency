import React, { Component } from 'react'

export class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError(error) {
        return { hasError: true }
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        // logErrorToMyService(error, errorInfo);
        console.log("Error:" + error);
        console.log(errorInfo);
        
    }

    render() {
        if (this.state.hasError) {
            return <h1>{this.props.msg}</h1>
        }

        return this.props.children
    }
}

export default ErrorBoundary