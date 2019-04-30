import React from 'react';

import './index.css';

const NoMatch = () => {
    return (
        <article className="row no-match">
            <div className="no-match__wrapper">
                <img
                    src={require('./images/tumbleweed.svg')}
                    className="img-responsive"
                    alt="tumbleweed"
                />
            </div>
        </article>
    );
};


export default NoMatch;
