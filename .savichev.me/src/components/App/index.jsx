import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import BaseLayout from '../BaseLayout/index.jsx';

import Main from '../Main/index.jsx';
import About from '../About/index.jsx';
import Skills from '../Skills/index.jsx';
import Blog from '../Blog/index.jsx';
import Contacts from '../Contacts/index.jsx';
import NoMatch from '../NoMatch/index.jsx';

import './index.css';

const App = () => {
    return (
        <React.Fragment>
            <BrowserRouter>
                <BaseLayout>
                    <Switch>
                        <Route exact path="/" component={Main}/>
                        <Route exact path="/about" component={About}/>
                        <Route exact path="/skills" component={Skills}/>
                        <Route exact path="/blog" component={Blog}/>
                        <Route exact path="/contacts" component={Contacts}/>
                        <Route component={NoMatch}/>
                    </Switch>
                </BaseLayout>
            </BrowserRouter>
        </React.Fragment>
    );
};

export default App;
