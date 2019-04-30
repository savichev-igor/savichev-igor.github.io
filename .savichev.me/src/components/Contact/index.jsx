import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

const Contact = props => {
    const {
        href,
        target = '_self',
        title,
        img
    } = props;

    return (
        <div className="contact">
            <a target={target} href={href}>
                <h2 className="text-center contact__title">{title}</h2>
                <img
                    src={img}
                    className="img-responsive center-block"
                    alt="contact"
                />
            </a>
        </div>
    );
};

Contact.propTypes = {
    href: PropTypes.string.isRequired,
    target: PropTypes.oneOf(['_self', '_blank']),
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired
};

export default Contact;
