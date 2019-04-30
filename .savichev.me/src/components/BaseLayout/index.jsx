import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/index.jsx';

import './index.css';

const BaseLayout = props => {
    return (
        <main className="container-fluid">
            <Header/>
            <section className="content">
                {props.children}
            </section>
        </main>
    );
};

BaseLayout.propTypes = {
    children: PropTypes.element.isRequired
};

export default BaseLayout;
