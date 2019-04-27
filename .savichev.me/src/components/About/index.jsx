import React from 'react'

import './index.styl'


class About extends React.Component {
    render() {
        return (
            <article className="row">
                <div className="col-md-8">
                    <h2 className="title">Деятельность</h2>
                    <p className="lead">
                        Я студент 6-го курса <a target="_blank" href="http://imkn.urfu.ru/">
                        математико-механического факультета</a> УрГУ, ныне - <a target="_blank" href="http://urfu.ru/ru/">УрФУ</a>.
                    </p>
                    <p className="lead">
                        Обучаюсь по специальности <q>Компьютерная Безопасность</q>.
                    </p>
                </div>
                <div className="col-md-4">
                    <div className="text-center shake-it">
                        <img src={require('./images/mat-meh.jpg')}
                             className="img-responsive img-thumbnail shake-it__image"
                             alt="Mat-Meh"/>
                    </div>
                </div>
            </article>
        );
    }
}

export default About
