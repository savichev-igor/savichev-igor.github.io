import React from 'react'

import './index.styl'


class Contacts extends React.Component {
    render() {
        return (
            <article className="row">
                <div className="col-sm-4 contacts">
                    <a href="mailto:igor@savichev.me">
                        <h2 className="text-center title">Написать письмо</h2>
                        <img src={require('./images/mail.png')}
                             className="img-responsive img-rounded center-block contacts__img"
                             alt="Paper"/>
                    </a>
                </div>
                <div className="col-sm-4 contacts">
                    <a href="skype:savichev_igor">
                        <h2 className="text-center title">Позвонить в Skype</h2>
                        <img src={require('./images/skype.png')}
                             className="img-responsive img-rounded center-block contacts__img"
                             alt="Skype"/>
                    </a>
                </div>
                <div className="col-sm-4 contacts">
                    <a target="_blank" href="http://vk.com/savichev_igor">
                        <h2 className="text-center title ">Страничка VK.com</h2>
                        <img src={require('./images/vk.png')}
                             className="img-responsive img-rounded center-block contacts__img"
                             alt="VK"/>
                    </a>
                </div>
            </article>
        );
    }
}

export default Contacts
