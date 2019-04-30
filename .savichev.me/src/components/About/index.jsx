import React from 'react';

import './index.css';

const About = () => {
    return (
        <article className="row about">
            <div className="col-md-8">
                <h2 className="about__title">Деятельность</h2>
                <p className="lead">
                    Я студент 6-го курса&nbsp;
                    <a target="_blank" href="http://imkn.urfu.ru/" rel="noopener noreferrer">
                        математико-механического факультета
                    </a> УрГУ, ныне - <a target="_blank" href="http://urfu.ru/ru/" rel="noopener noreferrer">УрФУ</a>.
                </p>
                <p className="lead">
                    Обучаюсь по специальности <q>Компьютерная Безопасность</q>.
                </p>
            </div>
            <div className="col-md-4">
                <img
                    src={require('./images/mat-meh.jpg')}
                    className="img-thumbnail center-block about__image"
                    alt="Math-Mech"
                />
            </div>
        </article>
    );
};

export default About;
