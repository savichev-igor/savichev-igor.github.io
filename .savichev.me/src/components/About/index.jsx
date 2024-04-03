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
                    Обучался по специальности <q>Инженерия программного обеспечения</q>.
                </p>
                <p className="lead about__work">
                    В прошлом работал разработчиком в компании&nbsp;
                    <a target="_blank" href="https://habr.com/ru/companies/yandex/profile/" rel="noopener noreferrer">
                        <img
                            src={require('./images/yandex_logo.svg')}
                            className="about__logo"
                            alt="yandex"
                        />
                        <span className="about__company">Яндекс.</span>
                    </a>
                </p>
                <p className="lead about__work">
                    В настоящее время являюсь руководителем гильдии фронтенд-разработки в компании&nbsp;
                    <a target="_blank" href="https://habr.com/ru/companies/samolet/profile/" rel="noopener noreferrer">
                        <img
                            src={require('./images/samolet_logo.webp')}
                            className="about__logo"
                            alt="samolet"
                        />
                        <span className="about__company">Самолет.</span>
                    </a>
                </p>
            </div>
            <div className="col-md-4">
                <img
                    src={require('./images/mat-meh.webp')}
                    className="img-thumbnail center-block about__image"
                    alt="Math-Mech"
                />
            </div>
        </article>
    );
};

export default About;
