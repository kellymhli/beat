import React, { Component } from 'react'
import NavBar from './NavBar'
import Featured from './Featured'

class Home extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <NavBar />
        <Featured />
      </div>
    )
  }
}

export default Home