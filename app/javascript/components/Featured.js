import React, { Component } from 'react'
import Pic from './Pic'
import Summary from './Summary'
import Video from './Video'
import QA from './QA'
import Minicon from './Minicon'

const Featured = () => {
    return (
        <div align="center">
            <div className="row">
                <div className="col-xs-6 col-xs-offset-2 featured-block">
                    <span className="name">First</span>
                    <Pic />
                    <span className="name">Last</span>
                    <Summary />
                    <Video />
                    <div className="row align-center">
                        <QA />
                        <QA />
                    </div>
                    <Minicon />
                </div>
            </div>
        </div>
    )
}

export default Featured