import React, { Component } from 'react'
import NavBar from './NavBar'
import Featured from './Featured'
import Card from './Card'

class Home extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <NavBar />
        <Featured />
        <Card />
        <Card />
      </div>
    )
  }
}

export default Home