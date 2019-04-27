import React from 'react'

import './index.styl'


class Skills extends React.Component {
    render() {
        return (
            <article className="row">
                <div className="col-md-12">
                    <div className="progress">
                        <div className="progress-bar progress-bar-danger"
                             role="progressbar" aria-valuenow="80" aria-valuemin="0"
                             aria-valuemax="100" style={{"width": "80%"}}>
                            <span className="sr-only">80% Complete</span>
                        </div>
                        <span className="progress-type">JS / NodeJS</span>
                        <span className="progress-completed">80%</span>
                    </div>
                    <div className="progress">
                        <div className="progress-bar progress-bar-warning"
                             role="progressbar" aria-valuenow="75" aria-valuemin="0"
                             aria-valuemax="100" style={{"width": "75%"}}>
                            <span className="sr-only">75% Complete</span>
                        </div>
                        <span className="progress-type">HTML / CSS</span>
                        <span className="progress-completed">75%</span>
                    </div>
                    <div className="progress">
                        <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="70"
                             aria-valuemin="0" aria-valuemax="100" style={{"width": "70%"}}>
                            <span className="sr-only">70% Complete</span>
                        </div>
                        <span className="progress-type">python2 / python3</span>
                        <span className="progress-completed">70%</span>
                    </div>
                    <div className="progress">
                        <div className="progress-bar"
                             role="progressbar" aria-valuenow="50" aria-valuemin="0"
                             aria-valuemax="100" style={{"width": "50%"}}>
                            <span className="sr-only">50% Complete</span>
                        </div>
                        <span className="progress-type">С / C++</span>
                        <span className="progress-completed">50%</span>
                    </div>
                </div>
            </article>
        );
    }
}

export default Skills
