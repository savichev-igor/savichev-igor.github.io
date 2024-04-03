import React from 'react';

import './index.css';

const Main = () => {
    return (
        <article className="row vertical-align main">
            <div className="col-md-8">
                <img
                    src={require('./images/me_new.webp')}
                    className="img-responsive main__me"
                    alt="It's me"
                />
            </div>
            <div className="col-md-4">
                <h2 className="text-center main__title">WHO AM I !?</h2>
                <p className="lead text-center">
                    Frontend Engineer, Engineering Manager, Frontend Head
                </p>
                <img
                    src={require('./images/prog.webp')}
                    className="img-responsive center-block main__who"
                    alt="Programmer"
                />
            </div>
        </article>
    );
};

export default Main;
