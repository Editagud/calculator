import React from 'react'
export class WindowHelper extends React.Component {
  state = {
    width: null,
  }
  componentDidMount() {
    this.setState({ width: window.innerWidth })
    window.addEventListener('resize', () => {
      this.setState({ width: window.innerWidth })
    })
  }
  render() {
    return this.props.children(this.state)
  }
}
