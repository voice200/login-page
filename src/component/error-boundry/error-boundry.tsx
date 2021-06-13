import React, { Component } from 'react'
import './error-boundry.sass'

export default class ErrorBoundry extends Component<React.ComponentClass> {
  state = {
    hasErrors: false,
  }

  componentDidCatch() {
    this.setState({
      hasError: true,
    })
  }

  render() {
    const { hasErrors } = this.state
    const error = <div> You catch error, sorry </div>

    return hasErrors ? error : this.props.children
  }
}
