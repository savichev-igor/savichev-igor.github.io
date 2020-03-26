import React from 'react';

import './index.css';

const About = () => {
    return (
        <article className="row about">
            <div className="col-md-8">
                <h2 className="about__title">Деятельность</h2>
                <p className="lead">
                    Закончил&nbsp;
                    <a target="_blank" href="http://imkn.urfu.ru/" rel="noopener noreferrer">
                        математико-механический факультет
                    </a> УрГУ, ныне - <a target="_blank" href="http://urfu.ru/ru/" rel="noopener noreferrer">УрФУ</a>.
                    <br/>
                    Обучался по специальности <q>Компьютерная Безопасность</q>.
                </p>
                <p className="lead">
                    Продолжил обучение в магистратуре&nbsp;
                    <a target="_blank" href="https://rtf.urfu.ru/ru/" rel="noopener noreferrer">ИРИТ-РТФ</a>&nbsp;
                    <a target="_blank" href="http://urfu.ru/ru/" rel="noopener noreferrer">УрФУ</a>.
                    <br/>
                    Обучаюсь по специальности <q>Инженерия программного обеспечения</q>.
                </p>
                <p className="lead about__work">
                    В настоящее время работаю разработчиком в компании&nbsp;
                    <a target="_blank" href="https://yandex.ru/" rel="noopener noreferrer">
                        <img
                            src={require('./images/yandex_logo.svg')}
                            className="about__logo"
                            alt="yandex"
                        />
                        <span className="about__company">Яндекс.</span>
                    </a>
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
