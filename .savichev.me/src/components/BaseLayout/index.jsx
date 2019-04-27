import React from 'react'

import Header from '../Header/index.jsx'

import './index.styl'


class Main extends React.Component {
    render() {
        return (
            <main className="container-fluid">
                <Header/>
                <section className="content">
                    {this.props.children}
                </section>
            </main>
        );
    }
}

export default Main
