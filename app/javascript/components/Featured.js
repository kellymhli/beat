import React, { Component } from 'react'
import Pic from './Pic'
import Summary from './Summary'

const Featured = () => {
    return (
        <div align="center">
            <div className="row">
                <div className="col-xs-6 col-xs-offset-2 featured-block">
                    <span className="name">First</span>
                    <Pic />
                    <span className="name">Last</span>
                    <Summary />
                </div>
            </div>
        </div>
    )
}

export default Featured