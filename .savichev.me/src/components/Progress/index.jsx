import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

const Progress = props => {
    const {
        mod,
        value,
        srOnly,
        type
    } = props;

    return (
        <div className="progress">
            <div className={`progress-bar progress-bar-striped active progress-bar-${mod}`}
                 role="progressbar" aria-valuenow={value} aria-valuemin="0"
                 aria-valuemax="100" style={{ 'width': `${value}%` }}
            >
                <span className="sr-only">{srOnly}</span>
            </div>
            <span className="progress__type">{type}</span>
            <span className="progress__completed">{`${value}%`}</span>
        </div>
    );
};

Progress.propTypes = {
    mod: PropTypes.oneOf(['danger', 'warning', 'success', 'info']).isRequired,
    value: PropTypes.string.isRequired,
    srOnly: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
};

export default Progress;
