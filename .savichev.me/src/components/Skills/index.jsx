import React from 'react';

import Progress from '../Progress/index.jsx';

const Skills = () => {
    return (
        <article className="row">
            <div className="col-md-12">
                <Progress
                    mod="danger"
                    value="80"
                    srOnly="80% Complete"
                    type="JS / NodeJS"
                />
                <Progress
                    mod="warning"
                    value="75"
                    srOnly="75% Complete"
                    type="HTML / CSS"
                />
                <Progress
                    mod="success"
                    value="70"
                    srOnly="70% Complete"
                    type="python2 / python3"
                />
                <Progress
                    mod="info"
                    value="50"
                    srOnly="50% Complete"
                    type="С / C++"
                />
            </div>
        </article>
    );
};

export default Skills;
