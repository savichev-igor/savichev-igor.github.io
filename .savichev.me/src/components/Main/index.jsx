import React from 'react'

import './index.styl'


class Main extends React.Component {
    render() {
        return (
            <article className="row">
                <div className="col-md-8">
                    <img src={require('./images/me.jpg')}
                         className="img-responsive img-rounded img-me"
                         alt="It's me"/>
                </div>
                <div className="col-md-4">
                    <section className="text-center">
                        <h2 className="custom-title">WHO AM I !?</h2>
                        <p className="lead">
                            студент, разработчик, яндексоид
                        </p>
                        <img src={require('./images/prog.png')}
                             className="img-responsive img-rounded center-block who-is-it"
                             alt="Programmer"/>
                    </section>
                </div>
            </article>
        );
    }
}

export default Main
